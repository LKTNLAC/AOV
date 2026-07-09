import DraftState from "./state.js";

export async function loadData() {

    const [
        heroes,
        counters,
        synergies,
        draftModes
    ] = await Promise.all([
        fetch("data/heroes.json").then(r => r.json()),
        fetch("data/counter.json").then(r => r.json()),
        fetch("data/synergy.json").then(r => r.json()),
        fetch("data/draftModes.json").then(r => r.json())
    ]);

    DraftState.heroes = heroes;
    DraftState.counters = counters;
    DraftState.synergies = synergies;
    DraftState.draftModes = draftModes;

    // Tạo Map để tra cứu hero nhanh
    DraftState.heroMap = new Map();

    heroes.forEach(hero => {
        DraftState.heroMap.set(hero.id, hero);
    });

}