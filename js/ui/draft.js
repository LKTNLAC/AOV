import DraftState from "./state.js";
import { loadData } from "./dataLoader.js";
import {
    loadDraftMode,
    pickHero,
    banHero,
    getCurrentAction,
    getCurrentTeam,
    getCurrentCount,
    getCurrentStep,
    undo,
    resetDraft,
    isFinished
} from "./draftEngine.js";

import { getRecommendations } from "./recommendationEngine.js";
import {
    initPopup,
    openPopup
} from "./popup.js";
import { predictDraft } from "./predictionEngine.js";
import { analyzeTeam, analyzeWeakness } from "./teamAnalyzer.js";


async function init() {

    await loadData();

    loadDraftMode("rank");

    bindEvents();

    initPopup(render);

    render();

    initRadar();

}

init();
function bindEvents() {

    document
        .querySelectorAll("input[name='mode']")
        .forEach(radio => {

            radio.addEventListener("change", () => {

                loadDraftMode(radio.value);

                render();

            });

        });

    document
        .getElementById("undoBtn")
        .addEventListener("click", () => {

            undo();

            render();

        });

    document
        .getElementById("resetBtn")
        .addEventListener("click", () => {

            resetDraft();

            render();

        });
    document
    .querySelector("main")
    .addEventListener("click",(e)=>{

        const slot=e.target.closest(".hero-slot");

        if(!slot) return;

        openPopup(slot);

    });

    document.addEventListener("click",(e)=>{

        const slot = e.target.closest(".hero-slot");

        if(!slot) return;

        openPopup(slot);

    });

}
function render() {

    renderBoard();

    renderTurn();

    renderRecommendation();

    renderPrediction();

    renderPhaseAnalysis();

    renderWeakness();

    renderDashboard();

    updateRadar();

}
function renderBoard() {

    renderTeam("blue");

    renderTeam("red");

}
function renderTeam(team) {

    renderSlots(

        `${team}Pick`,

        DraftState[team].picks

    );

    renderSlots(

        `${team}Ban`,

        DraftState[team].bans

    );

}
function renderSlots(containerId, heroes) {

    const container = document.getElementById(containerId);

    if (!container) return;

    const slots = container.querySelectorAll(".hero-slot");

    slots.forEach((slot, index) => {

        const heroId = heroes[index];

        if (heroId === null) {

            slot.innerHTML = "";

            return;

        }

        const hero = DraftState.heroMap.get(heroId);

        slot.innerHTML = `

            <img
                src="${hero.avatar}"
                class="hero-avatar"
            >

        `;

    });

}
function renderTurn() {

    if (isFinished()) {

        document
            .getElementById("turnText")
            .textContent = "Draft Finished";

        return;

    }

    const team = getCurrentTeam();

    const action = getCurrentAction();

    const step = getCurrentStep();

    document
        .getElementById("turnText")
        .textContent =

        `${team.toUpperCase()} ${action.toUpperCase()}`;

    document
        .getElementById("turnCount")
        .textContent =

        `${DraftState.draft.currentAction + 1} / ${step.count}`;

}
function renderRecommendation(){

    if(isFinished()) return;

    const team = getCurrentTeam();

    const rec = getRecommendations(team);

    renderRecommendGroup(
        "recommendOverall",
        rec.overall
    );

    renderRecommendGroup(
        "recommendTop",
        rec.laneRecommendations.Top
    );

    renderRecommendGroup(
        "recommendJungle",
        rec.laneRecommendations.Jungle
    );

    renderRecommendGroup(
        "recommendMid",
        rec.laneRecommendations.Mid
    );

    renderRecommendGroup(
        "recommendADC",
        rec.laneRecommendations.ADC
    );

    renderRecommendGroup(
        "recommendSupport",
        rec.laneRecommendations.Support
    );

}
function renderRecommendGroup(containerId,list){

    const container = document.getElementById(containerId);

    container.innerHTML="";

    list.forEach(item=>{

        const div=document.createElement("div");

        div.className="recommend-item";

        div.innerHTML=`

            <img src="${item.hero.avatar}">

            <div>

                <b>${item.hero.name}</b>

                <div class="recommend-reasons">

                    ${item.reasons.slice(0,2).join("<br>")}

                </div>

            </div>

            <div class="recommend-score">

                ${item.score}

            </div>

        `;

        container.appendChild(div);

    });

}
function renderPrediction(){

    const result = predictDraft();

    document.getElementById("blueRate").textContent =
        result.blue + "%";

    document.getElementById("redRate").textContent =
        result.red + "%";

}
function renderPhaseAnalysis(){

    const blue = analyzeTeam("blue");

    const red = analyzeTeam("red");

    updatePhase(
        "Early",
        blue.early,
        red.early
    );

    updatePhase(
        "Mid",
        blue.mid,
        red.mid
    );

    updatePhase(
        "Late",
        blue.late,
        red.late
    );

}
function updatePhase(name, blue, red){

    document.getElementById("blue"+name).value = blue;

    document.getElementById("red"+name).value = red;

    document.getElementById("blue"+name+"Text").textContent =
        Math.round(blue);

    document.getElementById("red"+name+"Text").textContent =
        Math.round(red);

}
function renderWeakness(){

    renderWeaknessList(

        "blueWeakness",

        analyzeWeakness("blue")

    );

    renderWeaknessList(

        "redWeakness",

        analyzeWeakness("red")

    );

}
function renderWeaknessList(id,list){

    const ul=document.getElementById(id);

    ul.innerHTML="";

    list.forEach(item=>{

        const li=document.createElement("li");

        li.textContent=item;

        ul.appendChild(li);

    });

}

function renderDashboard(){

    renderTagList(

        "blueStrength",

        analyzeStrength("blue"),

        true

    );

    renderTagList(

        "blueWeakness",

        analyzeWeakness("blue"),

        false

    );

    renderTagList(

        "redStrength",

        analyzeStrength("red"),

        true

    );

    renderTagList(

        "redWeakness",

        analyzeWeakness("red"),

        false

    );

}
function renderTagList(id,list,isGood){

    const container=document.getElementById(id);

    container.innerHTML="";

    list.forEach(text=>{

        const span=document.createElement("span");

        span.className=

            isGood

            ? "analysis-tag analysis-good"

            : "analysis-tag analysis-bad";

        span.textContent=text;

        container.appendChild(span);

    });

}
import{

    initRadar,

    updateRadar

}
from "radarChart.js";

