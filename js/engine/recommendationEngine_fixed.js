import DraftState from "./state.js";
import { analyzeTeam } from "./teamAnalyzer.js";

/*
===========================================
Recommendation Engine
===========================================
*/

export function getRecommendations(team){

    const recommendations = [];

    const heroes = getAvailableHeroes();

    heroes.forEach(hero=>{

        recommendations.push(

            calculateHero(hero,team)

        );

    });

    recommendations.sort((a,b)=>b.score-a.score);

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
function createResult(){

    return{

        score:0,

        reasons:[]

    };

}
function addReason(result,type,text,value){

    if(value===0) return;

    result.score+=value;

    result.reasons.push({

        type,

        text,

        value:Number(value.toFixed(1))

    });

}
function mergeResult(target,source){

    target.score+=source.score;

    target.reasons.push(

        ...source.reasons

    );

}
function calculateHero(hero,team){

    const result=createResult();

    mergeResult(

        result,

        calculateMetaScore(hero)

    );

    mergeResult(

        result,

        calculateCounterScore(hero,team)

    );

    mergeResult(

        result,

        calculateSynergyScore(hero,team)

    );

    mergeResult(

        result,

        calculateRoleScore(hero,team)

    );

    mergeResult(

        result,

        calculateTeamBalanceScore(hero,team)

    );

    mergeResult(

        result,

        calculatePhaseScore(hero,team)

    );

    mergeResult(

        result,

        calculateAttributeScore(hero,team)

    );

    result.reasons.sort(

        (a,b)=>b.value-a.value

    );

    return{

        hero,

        score:normalizeScore(result.score),

        reasons:result.reasons

    };

}
function calculateMetaScore(hero){

    const result = createResult();

    // Meta chiếm khoảng 30% tổng điểm
    const score = hero.meta * CONFIG.WEIGHTS.META;

    addReason(
        result,
        "meta",
        `Meta ${hero.meta}`,
        score
    );

    return result;

}
function calculateCounterScore(hero, team){

    const result = createResult();

    const enemyHeroes = getEnemyTeam(team);

    enemyHeroes.forEach(enemy=>{

        if(
            !DraftState.counterData ||
            !DraftState.counterData[hero.id]
        ) return;

        const value =
            DraftState.counterData[hero.id][enemy.id];

        if(value){

            addReason(

                result,

                "counter",

                `Counter ${enemy.name}`,

                value * 0.25

            );

        }

    });

    return result;

}
function calculateSynergyScore(hero, team){

    const result = createResult();

    const allies = getOwnTeam(team);

    allies.forEach(ally=>{

        if(
            !DraftState.synergyData ||
            !DraftState.synergyData[hero.id]
        ) return;

        const value =
            DraftState.synergyData[hero.id][ally.id];

        if(value){

            addReason(

                result,

                "synergy",

                `Combo ${ally.name}`,

                value * 0.2

            );

        }

    });

    return result;

}
function calculateRoleScore(hero, team){

    const result = createResult();

    const laneCount = getLaneCount(team);

    hero.lane.forEach(lane=>{

        if(laneCount[lane] === 0){

            addReason(

                result,

                "role",

                `Bổ sung ${lane}`,

                15

            );

        }
        else{

            addReason(

                result,

                "role",

                `${lane} đã có tướng`,

                -8

            );

        }

    });

    return result;

}
function calculateTeamBalanceScore(hero,team){

    const result=createResult();

    const stats=analyzeTeam(team);

    if(stats.frontline<50 && hero.frontline>=CONFIG.BONUS.NEED_FRONTLINE){

        addReason(

            result,

            "team",

            "Đội thiếu Frontline",

            CONFIG.BONUS.NEED_FRONTLINE

        );

    }

    if(stats.cc<50 && hero.cc>=70){

        addReason(

            result,

            "team",

            "Đội thiếu CC",

            10

        );

    }

    if(stats.waveClear<50 && hero.waveClear>=70){

        addReason(

            result,

            "team",

            "Đội thiếu Wave Clear",

            8

        );

    }

    if(stats.mobility<50 && hero.mobility>=70){

        addReason(

            result,

            "team",

            "Đội thiếu Mobility",

            6

        );

    }

    return result;

}
function calculatePhaseScore(hero){

    const result=createResult();

    addReason(

        result,

        "phase",

        "Early",

        hero.early*0.05

    );

    addReason(

        result,

        "phase",

        "Mid",

        hero.mid*0.05

    );

    addReason(

        result,

        "phase",

        "Late",

        hero.late*0.05

    );

    return result;

}
function calculateAttributeScore(hero){

    const result=createResult();

    addReason(

        result,

        "attribute",

        "Frontline",

        hero.frontline*0.02

    );

    addReason(

        result,

        "attribute",

        "Burst",

        hero.burst*0.02

    );

    addReason(

        result,

        "attribute",

        "Mobility",

        hero.mobility*0.02

    );

    addReason(

        result,

        "attribute",

        "CC",

        hero.cc*0.02

    );

    addReason(

        result,

        "attribute",

        "Wave Clear",

        hero.waveClear*0.02

    );

    return result;

}
function getAvailableHeroes() {

    const used = new Set();

    [
        ...DraftState.blue.pick,
        ...DraftState.red.pick,
        ...DraftState.blue.ban,
        ...DraftState.red.ban
    ].forEach(hero => {

        if (hero) used.add(hero.id);

    });

    return DraftState.heroes.filter(hero => !used.has(hero.id));

}
function getOwnTeam(team) {

    return team === "blue"
        ? DraftState.blue.pick.filter(Boolean)
        : DraftState.red.pick.filter(Boolean);

}
function getEnemyTeam(team) {

    return team === "blue"
        ? DraftState.red.pick.filter(Boolean)
        : DraftState.blue.pick.filter(Boolean);

}
function getLaneCount(team) {

    const count = {

        Top:0,
        Jungle:0,
        Mid:0,
        ADC:0,
        Support:0

    };

    getOwnTeam(team).forEach(hero=>{

        hero.lane.forEach(lane=>{

            if(count[lane] !== undefined){

                count[lane]++;

            }

        });

    });

    return count;

}
function getLaneTop(list,lane){

    return list

        .filter(item=>item.hero.lane.includes(lane))

        .slice(0,10);

}
function normalizeScore(score){

    if(score<0) return 0;

    if(score>100) return 100;

    return Number(score.toFixed(1));

}
