import DraftState from "./state.js";

export function analyzeTeam(team){

    const heroes = DraftState[team].picks
        .filter(id => id !== null)
        .map(id => DraftState.heroMap.get(id));

    const result = {

        frontline:0,
        burst:0,
        mobility:0,
        cc:0,
        waveClear:0,

        early:0,
        mid:0,
        late:0,

        heroCount:heroes.length

    };
    result.roles = {

        Top:0,
        Jungle:0,
        Mid:0,
        ADC:0,
        Support:0

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
        hero.lane.forEach(lane=>{

            if(result.roles[lane] !== undefined){

                result.roles[lane]++;

            }

        });

    });

    return result;

}
function normalize(stats){

    if(stats.heroCount===0){

        return stats;

    }

    const count = stats.heroCount;

    stats.frontline/=count;
    stats.burst/=count;
    stats.mobility/=count;
    stats.cc/=count;
    stats.waveClear/=count;

    stats.early/=count;
    stats.mid/=count;
    stats.late/=count;

    return stats;

}
return normalize(result);
export function analyzeWeakness(team){

    const stats = analyzeTeam(team);

    const result=[];

    if(stats.frontline<50){

        result.push("Thiếu chống chịu");

    }

    if(stats.cc<45){

        result.push("Thiếu khống chế");

    }

    if(stats.waveClear<55){

        result.push("Thiếu dọn lính");

    }

    if(stats.early<55){

        result.push("Đầu game yếu");

    }

    if(stats.late<55){

        result.push("Cuối game yếu");

    }

    if(stats.roles.Top===0){

        result.push("Chưa có đường Tà thần");

    }

    if(stats.roles.Jungle===0){

        result.push("Chưa có Đi rừng");

    }

    if(stats.roles.Mid===0){

        result.push("Thiếu Pháp sư");

    }

    if(stats.roles.ADC===0){

        result.push("Thiếu Xạ thủ");

    }

    if(stats.roles.Support===0){

        result.push("Thiếu Trợ thủ");

    }

    return result;

}
export function analyzeStrength(team){

    const stats=analyzeTeam(team);

    const result=[];

    if(stats.frontline>=75){

        result.push("Chống chịu mạnh");

    }

    if(stats.cc>=70){

        result.push("Khống chế mạnh");

    }

    if(stats.burst>=80){

        result.push("Sốc sát thương cao");

    }

    if(stats.mobility>=80){

        result.push("Cơ động");

    }

    if(stats.waveClear>=80){

        result.push("Đẩy lính nhanh");

    }

    return result;

}
