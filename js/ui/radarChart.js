import { analyzeTeam } from "./teamAnalyzer.js";

let radar;

export function initRadar(){

    const ctx=document
        .getElementById("radarChart")
        .getContext("2d");

    radar=new Chart(ctx,{

        type:"radar",

        data:{

            labels:[

                "Frontline",

                "Burst",

                "Mobility",

                "CC",

                "Wave Clear",

                "Early",

                "Mid",

                "Late"

            ],

            datasets:[

                {

                    label:"Blue",

                    data:[0,0,0,0,0,0,0,0]

                },

                {

                    label:"Red",

                    data:[0,0,0,0,0,0,0,0]

                }

            ]

        },

        options:{

            responsive:true,

            scales:{

                r:{

                    min:0,

                    max:100

                }

            }

        }

    });

}

export function updateRadar(){

    const blue=analyzeTeam("blue");

    const red=analyzeTeam("red");

    radar.data.datasets[0].data=[

        blue.frontline,

        blue.burst,

        blue.mobility,

        blue.cc,

        blue.waveClear,

        blue.early,

        blue.mid,

        blue.late

    ];

    radar.data.datasets[1].data=[

        red.frontline,

        red.burst,

        red.mobility,

        red.cc,

        red.waveClear,

        red.early,

        red.mid,

        red.late

    ];

    radar.update();

}