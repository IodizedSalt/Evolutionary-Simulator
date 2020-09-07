var gameData = {
    gameExists: false,
    organsimType: '',
    TotalATP: 0,
    TotalFood: 0,
    TotalEvolution: 0,
    atpPerFood: 0,
    DPS: 0,
    health: 0,
    healthRegen: 0,
    gameStage: 0,                       //What stage is the user in (Cell, Creature, Space, etc.)
    elementsStage: 0,                   //What dom elements should be rendered (Which elements to show within the stage that the user is currently in)
    evolutionLevel: 0,
}

function drawUI(){
    document.getElementsByClassName('InteractableSection')[0].hidden = false;
    document.getElementsByClassName('navbar')[0].hidden = false;
    document.getElementsByClassName('MiddleSection')[0].hidden = false;
    updateLabels()
    if(gameData.organsimType == 'Carnivore'){
        document.getElementById('Photosynthesize').hidden = true
    }else if(gameData.organsimType == 'Herbivore'){
        document.getElementById('Attack').hidden = true
    }
}

function updateEvolutionBar(value){    
    currentEvolutionWidth += value;
    document.getElementById('EVOLUTION').style.width = currentEvolutionWidth + '%';

}



function updateLabels(){        //This should update all  of the labels upon resuming session (HP, ATP, Food, Evolution progress, etc.)
    document.getElementById('EvolutionLabel').textContent = 'Evolution: ' + gameData.TotalEvolution
    document.getElementById('ATPLabel').textContent = 'ATP: ' + gameData.TotalATP
    document.getElementById('FoodLabel').textContent = 'Food: ' + gameData.TotalFood
}

function updateATP(value){
    gameData.TotalATP += value
    document.getElementById('ATPLabel').textContent = 'ATP: ' + gameData.TotalATP

}


//Beginning of new game
function drawBigBang(){
    var wrapperDiv = document.createElement('div')
    wrapperDiv.innerHTML = "<div id='BigBang' > <h1 id=''>Big Bang</h1> </div>"
    document.getElementsByTagName('body')[0].appendChild(wrapperDiv.firstChild)
    
    document.getElementById('BigBang').onclick = function(){
        chooseInitOrganism();
    }
}
//Display new elements slowly at a time
function drawFirstElememnts(){
    var wrapperDiv = document.getElementsByClassName('MiddleSection')
    wrapperDiv.appendChild = 
    document.getElementsByTagName('body')[0].appendChild(wrapperDiv.firstChild)
}

function drawSecondElements(){

}

function drawThirdElements(){

}

//Choose the initial organism on Big Bang
function chooseInitOrganism(){
    swal.fire({
        title: 'Welcome to the Evolutionary hot soup.',
        html:   "<p>Choose an archetype below and begin evolving your organism.</p> "+
                "<br>" +
                '<div class="btn-alert">' +
                    '<label class="Carnivore">' +
                        '<input type="radio" hidden name="check"  onclick=setOrganismType("Carnivore") class="CarnivoreButton"> <span> Carnivore </span>' +
                    '</label>' +
                    '<label class="Omnivore">' +
                       '<input type="radio" hidden name="check"  onclick=setOrganismType("Omnivore") class="OmnivoreButton"> <span> Omnivore </span>' +
                    '</label>' +
                    '<label class="Herbivore">' +
                     '   <input type="radio" hidden name="check"  onclick=setOrganismType("Herbivore") class="HerbivoreButton"> <span> Herbivore </span>' +
                    '</label>' +
                '</div>' ,
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: true,
        customClass: 'bigBangSwal',
        onClose: function(){
            if(getOrganismType() !== undefined){
                document.getElementById('BigBang').remove();
                drawInitOrganisms();
            }else{
                return;
            }
        }

    });

        //User should then be able to select attributes and design
}



function drawInitOrganisms(){
    gameData.organsimType = getOrganismType();
    gameData.gameExists = true;
    console.log(gameData);

    // Load interactables
    drawUI()

//     var canvas = document.createElement('canvas');
//     document.body.appendChild(canvas)
//     canvas.setAttribute('class', "carnivoreCanvas");
//     var carnivoreCanvas = document.getElementsByClassName("carnivoreCanvas")
//     var ctx = carnivoreCanvas.getContext("2d");                 //FIX DIS
//     ctx.fillStyle = "#FF0000";
//     ctx.fillRect(0, 0, 150, 75);
}





// document.getElementById('INIT').onclick = function(){
//     // attributeSlider();
//     getOrganismType();
//     drawInitOrganisms();
// }


