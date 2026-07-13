import DraftState from "./state.js";
import { analyzeTeam } from "./teamAnalyzer.js";

/*
===========================================
Recommendation Engine
===========================================
*/

export function getRecommendations(team) {

    const availableHeroes = getAvailableHeroes();

    const recommendations = [];

    for (const hero of availableHeroes) {

        const result = calculateHero(hero, team);

        recommendations.push(result);

    }

    recommendations.sort((a, b) => b.score - a.score);

    return{

        overall:recommendations.slice(0,10),

        laneRecommendations:{

            Top:getLaneTop(recommendations,"Top"),

            Jungle:getLaneTop(recommendations,"Jungle"),

            Mid:getLaneTop(recommendations,"Mid"),

            ADC:getLaneTop(recommendations,"ADC"),

            Support:getLaneTop(recommendations,"Support")

        }

    };

}

/*
===========================================
Lọc hero chưa Pick/Ban
===========================================
*/

function getAvailableHeroes() {

    const used = new Set();

    DraftState.blue.bans.forEach(id => {

        if (id !== null) used.add(id);

    });

    DraftState.blue.picks.forEach(id => {

        if (id !== null) used.add(id);

    });

    DraftState.red.bans.forEach(id => {

        if (id !== null) used.add(id);

    });

    DraftState.red.picks.forEach(id => {

        if (id !== null) used.add(id);

    });

    return DraftState.heroes.filter(hero => !used.has(hero.id));

}

/*
===========================================
Top theo lane
===========================================
*/

function getLaneTop(list, lane) {

    return list
        .filter(hero => hero.hero.lane.includes(lane))
        .slice(0, 3);

}

/*
===========================================
Đội đang xét
===========================================
*/

function getOwnTeam(team) {

    return team === "blue"

        ? DraftState.blue

        : DraftState.red;

}

function getEnemyTeam(team) {

    return team === "blue"

        ? DraftState.red

        : DraftState.blue;

}
function calculateHero(hero, team){

    let score = hero.meta;

    const reasons = [];
    const metaScore = calculateMeta(hero);

    score += metaScore;

    reasons.push({

        type: "meta",

        text: "Meta mạnh",

        value: metaScore

    });

    score += calculateMetaScore(hero, reasons);

    score += calculateCounterScore(hero, team, reasons);

    score += calculateSynergyScore(hero, team, reasons);

    score += calculateRoleScore(hero, team, reasons);

    score += calculatePhaseScore(hero, team, reasons);

    score += calculateAttributeScore(hero, team, reasons);

    score += calculateTeamBalance(hero,team,reasons);

    score += calculatePenalty(hero,team,reasons);

    return {

        hero,

        score: Number(score.toFixed(2)),

        reasons

    };

}
function calculateMetaScore(hero,reasons){

    const score = hero.meta * 0.30;

    if(hero.meta>=90){

        reasons.push("Meta rất mạnh");

    }

    else if(hero.meta>=80){

        reasons.push("Meta ổn định");

    }

    return score;

}
function calculateCounterScore(hero,team,reasons){

    const enemy = getEnemyTeam(team);

    let score = 0;

    enemy.picks.forEach(heroId=>{

        if(heroId===null) return;

        const enemyHero = DraftState.heroMap.get(heroId);

        if(!enemyHero) return;

        const counter = DraftState.counters[enemyHero.name];

        if(counter && counter[hero.name]){

            score += counter[hero.name];

            reasons.push("Counter "+enemyHero.name);

        }

    });

    return score * 0.25;

}
function calculateSynergyScore(hero,team,reasons){

    const own = getOwnTeam(team);

    let score = 0;

    own.picks.forEach(heroId=>{

        if(heroId===null) return;

        const ownHero = DraftState.heroMap.get(heroId);

        if(!ownHero) return;

        const synergy = DraftState.synergies[ownHero.name];

        if(synergy && synergy[hero.name]){

            score += synergy[hero.name];

            reasons.push("Combo "+ownHero.name);

        }

    });

    return score * 0.20;

}
function calculateRoleScore(hero,team,reasons){

    const own = getOwnTeam(team);

    const roles = [];

    own.picks.forEach(id=>{

        if(id===null) return;

        const h = DraftState.heroMap.get(id);

        if(h){

            h.lane.forEach(r=>roles.push(r));

        }

    });

    let score = 0;

    if(hero.lane.includes("Support") && !roles.includes("Support")){

        score += 12;

        reasons.push("Đội thiếu Support");

    }

    if(hero.lane.includes("Mid") && !roles.includes("Mid")){

        score += 10;

        reasons.push("Đội thiếu Pháp sư");

    }

    if(hero.lane.includes("ADC") && !roles.includes("ADC")){

        score += 10;

        reasons.push("Đội thiếu Xạ thủ");

    }

    if(hero.frontline>=70){

        const frontline = own.picks
            .filter(id=>id!==null)
            .map(id=>DraftState.heroMap.get(id))
            .reduce((s,h)=>s+h.frontline,0);

        if(frontline<100){

            score += 15;

            reasons.push("Đội thiếu chống chịu");

        }

    }

    return score;

}
function calculatePhaseScore(hero,team,reasons){

    const own = getOwnTeam(team);

    let early=0;

    let mid=0;

    let late=0;

    own.picks.forEach(id=>{

        if(id===null) return;

        const h=DraftState.heroMap.get(id);

        early+=h.early;

        mid+=h.mid;

        late+=h.late;

    });

    let score=0;

    if(early<180){

        score+=hero.early*0.05;

    }

    if(mid<180){

        score+=hero.mid*0.05;

    }

    if(late<180){

        score+=hero.late*0.05;

    }

    return score;

}
function calculateAttributeScore(hero,team,reasons){

    const own = getOwnTeam(team);

    let frontline=0;

    let cc=0;

    let mobility=0;

    let wave=0;

    own.picks.forEach(id=>{

        if(id===null) return;

        const h=DraftState.heroMap.get(id);

        frontline+=h.frontline;

        cc+=h.cc;

        mobility+=h.mobility;

        wave+=h.waveClear;

    });

    let score=0;

    if(frontline<150){

        score+=hero.frontline*0.08;

    }

    if(cc<150){

        score+=hero.cc*0.06;

    }

    if(mobility<150){

        score+=hero.mobility*0.04;

    }

    if(wave<150){

        score+=hero.waveClear*0.05;

    }

    return score;

}
function getTeamHeroes(team){

    const own = getOwnTeam(team);

    return own.picks
        .filter(id => id !== null)
            .map(id => DraftState.heroMap.get(id));       

}
function getLaneCount(team){

    const heroes = getTeamHeroes(team);

    const lanes = {

        Top:0,

        Jungle:0,

        Mid:0,

        ADC:0,

        Support:0

    };

    heroes.forEach(hero=>{

        hero.lane.forEach(lane=>{

            if(lanes[lane]!==undefined){

                lanes[lane]++;

            }

        });

    });

    return lanes;

}
function getTeamAttributes(team){

    const heroes = getTeamHeroes(team);

    const result = {

        frontline:0,

        burst:0,

        mobility:0,

        cc:0,

        waveClear:0,

        early:0,

        mid:0,

        late:0

    };

    heroes.forEach(hero=>{

        result.frontline+=hero.frontline;

        result.burst+=hero.burst;

        result.mobility+=hero.mobility;

        result.cc+=hero.cc;

        result.waveClear+=hero.waveClear;

        result.early+=hero.early;

        result.mid+=hero.mid;

        result.late+=hero.late;

    });

    return result;

}
function calculateTeamBalance(hero,team,reasons){

    const lane=getLaneCount(team);

    let score=0;

    if(hero.lane.includes("Top") && lane.Top===0){

        score+=18;

        reasons.push("Thiếu đường Caesar");

    }

    if(hero.lane.includes("Jungle") && lane.Jungle===0){

        score+=20;

        reasons.push("Thiếu Đi Rừng");

    }

    if(hero.lane.includes("Mid") && lane.Mid===0){

        score+=20;

        reasons.push("Thiếu Pháp sư");

    }

    if(hero.lane.includes("ADC") && lane.ADC===0){

        score+=18;

        reasons.push("Thiếu Xạ thủ");

    }

    if(hero.lane.includes("Support") && lane.Support===0){

        score+=20;

        reasons.push("Thiếu Trợ thủ");

    }

    return score;

}
function calculatePenalty(hero,team,reasons){

    const heroes=getTeamHeroes(team);

    let assassin=0;

    let tank=0;

    let mage=0;

    let adc=0;

    let support=0;

    heroes.forEach(h=>{

        if(h.lane==="Assassin") assassin++;

        if(h.lane==="Tank") tank++;

        if(h.lane==="Mage") mage++;

        if(h.lane==="Marksman") adc++;

        if(h.lane==="Support") support++;

    });

    let penalty=0;

    if(hero.class==="Assassin" && assassin>=2){

        penalty-=25;

        reasons.push("Quá nhiều Sát thủ");

    }

    if(hero.class==="Mage" && mage>=1){

        penalty-=8;

    }

    if(hero.class==="Marksman" && adc>=1){

        penalty-=10;

    }

    if(hero.class==="Support" && support>=1){

        penalty-=15;

    }

    return penalty;

}