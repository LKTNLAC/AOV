const DraftState = {

    // Data
    heroes: [],
    heroMap: new Map(),

    counters: {},
    synergies: {},
    meta: {},

    // Draft
    draft: {

        mode: "rank",

        currentStep: 0,

        currentTeam: "blue",

        currentAction: "ban",

        history: []

    },

    // Team
    blue: {

        bans: [null, null, null, null, null],

        picks: [null, null, null, null, null]

    },

    red: {

        bans: [null, null, null, null, null],

        picks: [null, null, null, null, null]

    }

};

export default DraftState;