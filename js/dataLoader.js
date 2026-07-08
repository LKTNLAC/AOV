import DraftState from "./state.js";

async function loadJson(path){

    const res = await fetch(path);

    return await res.json();

}

export async function initializeData(){

    DraftState.heroes = await loadJson("data/heroes.json");

    DraftState.counters = await loadJson("data/counters.json");

    DraftState.synergies = await loadJson("data/synergies.json");

    DraftState.heroClasses = await loadJson("data/heroClasses.json");

    DraftState.patch = await loadJson("data/patch.json");

}