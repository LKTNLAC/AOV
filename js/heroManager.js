import DraftState from "./state.js";

const heroMap = new Map();

export function buildHeroMap(){

    DraftState.heroes.forEach(hero=>{

        heroMap.set(hero.name,hero);

    });

}

export function getHero(name){

    return heroMap.get(name);

}