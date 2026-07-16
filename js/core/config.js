const CONFIG = {

    // ===============================
    // Draft
    // ===============================
    DRAFT: {

        TEAM_SIZE: 5,

        MAX_BAN: 5,

        MAX_PICK: 5

    },

    // ===============================
    // Recommendation Weight
    // Tổng = 100%
    // ===============================
    WEIGHTS: {

        META: 0.30,

        COUNTER: 0.25,

        SYNERGY: 0.20,

        ROLE: 0.10,

        TEAM_BALANCE: 0.05,

        PHASE: 0.05,

        ATTRIBUTE: 0.05

    },

    // ===============================
    // Team Threshold
    // ===============================
    THRESHOLD: {

        FRONTLINE: 70,

        MOBILITY: 70,

        BURST: 70,

        CC: 70,

        WAVECLEAR: 70,

        EARLY: 70,

        MID: 70,

        LATE: 70

    },

    // ===============================
    // Bonus Point
    // ===============================
    BONUS: {

        NEED_ROLE: 15,

        DUPLICATE_ROLE: -8,

        NEED_FRONTLINE: 12,

        NEED_CC: 10,

        NEED_WAVECLEAR: 8,

        NEED_MOBILITY: 6,

        META_HIGH: 10,

        META_LOW: -5

    },

    // ===============================
    // Hero Lane
    // ===============================
    LANE: {

        TOP: "Top",

        JUNGLE: "Jungle",

        MID: "Mid",

        ADC: "ADC",

        SUPPORT: "Support"

    },

    // ===============================
    // Damage Type
    // ===============================
    DAMAGE: {

        PHYSICAL: "Physical",

        MAGIC: "Magic",

        TRUE: "True",

        MIXED: "Mixed"

    },

    // ===============================
    // Difficulty
    // ===============================
    DIFFICULTY: {

        EASY: 1,

        NORMAL: 2,

        HARD: 3

    }

};

export default CONFIG;