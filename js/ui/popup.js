import DraftState from "./state.js";

import {
    pickHero,
    banHero,
    canPick,
    canBan,
    getCurrentAction
} from "./draftEngine.js";

let currentSlot = null;
let renderCallback = null;

export function initPopup(render) {

    renderCallback = render;

    document.getElementById("heroSearch")
        .addEventListener("input", filterHeroes);

    document
    .getElementById("laneFilter")
    .addEventListener("change", () => {

        renderHeroList(
            document.getElementById("heroSearch").value
        );

    });
    
    document.getElementById("heroPopup")
        .addEventListener("click", (e) => {

            if (e.target.id === "heroPopup") {

                closePopup();

            }

        });
    
    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closePopup();

        }

    });

}

export function openPopup(slot){

    currentSlot = slot;

    document.getElementById("heroSearch").value = "";

    document.getElementById("laneFilter").value = "";

    document
        .getElementById("heroPopup")
        .classList.remove("hidden");

    renderHeroList("");

}

export function closePopup() {

    document
        .getElementById("heroPopup")
        .classList.add("hidden");

    currentSlot = null;

}
function filterHeroes(e){

    renderHeroList(e.target.value);

}
function renderHeroList(keyword){

    const list = document.getElementById("heroList");

    item.innerHTML=`

    <img src="${hero.avatar}">

    <div>

        <b>${hero.name}</b>

        <p>${hero.lane.join(" / ")}</p>

        <p>Meta ${hero.meta}</p>

    </div>

    `;

    const action = getCurrentAction();

    const lane = document.getElementById("laneFilter").value;

    const heroes = DraftState.heroes.filter(hero=>{

        if(
            !hero.name
                .toLowerCase()
                .includes(keyword.toLowerCase())
        ){
            return false;
        }

        if(lane){

            if(!hero.lane.includes(lane)){

                return false;

            }

        }

        if(action==="pick"){

            return canPick(hero.id);

        }

        return canBan(hero.id);

    });

    heroes.forEach(hero=>{

        const item=document.createElement("div");

        item.className="hero-item";

        item.innerHTML=`

            <img src="${hero.avatar}">

            <div>

                <b>${hero.name}</b>

                <p>${hero.lane.join(" / ")}</p>

            </div>

        `;

        item.onclick=()=>selectHero(hero);

        list.appendChild(item);

    });

}
function selectHero(hero){

    const action = getCurrentAction();

    let success = false;

    if(action==="pick"){

        success = pickHero(hero.id);

    }else{

        success = banHero(hero.id);

    }

    if(!success){

        alert("Không thể chọn tướng này!");

        return;

    }

    closePopup();

    renderCallback();

}
