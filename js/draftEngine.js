import DraftState from "./state.js";

let currentMode = [];

export function loadDraftMode(modeName) {

    currentMode = DraftState.draftModes[modeName];

    DraftState.draft.mode = modeName;
    DraftState.draft.currentStep = 0;
    DraftState.draft.currentAction = 0;

    DraftState.blue.bans.fill(null);
    DraftState.blue.picks.fill(null);

    DraftState.red.bans.fill(null);
    DraftState.red.picks.fill(null);

    DraftState.draft.history = [];
}

export function getCurrentStep() {

    return currentMode[
        DraftState.draft.currentStep
    ];

}

export function getCurrentTeam() {

    return getCurrentStep().team;

}

export function getCurrentAction() {

    return getCurrentStep().action;

}

export function getCurrentCount() {

    return getCurrentStep().count;

}

function heroExists(heroId){

    return [

        ...DraftState.blue.bans,

        ...DraftState.blue.picks,

        ...DraftState.red.bans,

        ...DraftState.red.picks

    ].includes(heroId);

}

export function canPick(heroId){

    return !heroExists(heroId);

}

export function canBan(heroId){

    return !heroExists(heroId);

}

function insertHero(team,action,heroId){

    const list = DraftState[team][action];

    const index = list.findIndex(v=>v===null);

    if(index===-1) return false;

    list[index]=heroId;

    return index;

}

export function pickHero(heroId){

    if(getCurrentAction()!=="pick") return false;

    if(!canPick(heroId)) return false;

    const team=getCurrentTeam();

    const index=insertHero(team,"picks",heroId);

    if(index===false) return false;

    DraftState.draft.history.push({

        type:"pick",

        team,

        heroId,

        index,

        step:DraftState.draft.currentStep

    });

    nextAction();

    return true;

}

export function banHero(heroId){

    if(getCurrentAction()!=="ban") return false;

    if(!canBan(heroId)) return false;

    const team=getCurrentTeam();

    const index=insertHero(team,"bans",heroId);

    if(index===false) return false;

    DraftState.draft.history.push({

        type:"ban",

        team,

        heroId,

        index,

        step:DraftState.draft.currentStep

    });

    nextAction();

    return true;

}

function nextAction(){

    DraftState.draft.currentAction++;

    if(

        DraftState.draft.currentAction>=

        getCurrentCount()

    ){

        DraftState.draft.currentStep++;

        DraftState.draft.currentAction=0;

    }

}

export function undo(){

    const last=

        DraftState.draft.history.pop();

    if(!last) return;

    DraftState[last.team][last.type+"s"][last.index]=null;

    DraftState.draft.currentStep=last.step;

    DraftState.draft.currentAction=0;

}

export function resetDraft(){

    loadDraftMode(DraftState.draft.mode);

}

export function isFinished(){

    return DraftState.draft.currentStep>=currentMode.length;

}