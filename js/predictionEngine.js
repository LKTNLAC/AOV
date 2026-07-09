import { analyzeTeam } from "./teamAnalyzer.js";

export function predictDraft() {

    const blue = analyzeTeam("blue");
    const red = analyzeTeam("red");

    let blueScore = 0;
    let redScore = 0;

    const keys = [
        "frontline",
        "burst",
        "mobility",
        "cc",
        "waveClear",
        "early",
        "mid",
        "late"
    ];

    keys.forEach(key => {

        if (blue[key] > red[key]) {

            blueScore++;

        } else if (red[key] > blue[key]) {

            redScore++;

        }

    });

    const total = blueScore + redScore;

    if (total === 0) {

        return {

            blue: 50,
            red: 50

        };

    }

    return {

        blue: Number((blueScore / total * 100).toFixed(1)),

        red: Number((redScore / total * 100).toFixed(1))

    };

}