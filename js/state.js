const DraftState={

    heroes:[],

    counters:{},

    synergies:{},

    meta:{},

    draftModes:{},

    blue:{

        bans:[null,null,null,null,null],

        picks:[null,null,null,null,null]

    },

    red:{

        bans:[null,null,null,null,null],

        picks:[null,null,null,null,null]

    },

    draft:{

        mode:"rank",

        currentStep:0,

        currentAction:0,

        history:[]

    }

}

export default DraftState;