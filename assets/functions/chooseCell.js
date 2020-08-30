// Object to hold state of all aspects of a user's game

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
var currentEvolutionWidth = 0;

//TODO: Move drawUI, updateLabels functions and all others that init elements on page to another file

// Loop that saves game every 15 seconds
var saveGameLoop = window.setInterval(function() {              
    localStorage.setItem('EvolutionarySimSave', JSON.stringify(gameData))
    console.log('Game Auto-saved')
  }, 15000)

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


var loadGame = function(){
    console.log('loading game')
    var savegame = JSON.parse(localStorage.getItem("EvolutionarySimSave"))

    if (savegame !== null && savegame.gameExists) {
      gameData = savegame
      
      // Display the interactables on load
      drawUI()
    
    
    }
    console.log(gameData)
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

window.onload = function(){

    loadGame();
  
    setOrganismType = function(organismType){
        this.organismType = organismType;

    },
    getOrganismType = function(){
        return this.organismType;

    };
    if(gameData.gameExists){                        // Check if init organism already selected and a game is already present, otherwise, begin the game
        console.log('game exists:', gameData.organsimType)
        // loadGame();
    }else{
        console.log('no game yet')
        drawBigBang();
    }

//Save Function
    document.getElementById('navSave').onclick = function(){
        localStorage.setItem('EvolutionarySimSave', JSON.stringify(gameData))
        console.log('Game manually saved')
    }
//Delete Function
    document.getElementById('navDelete').onclick = function(){
        Swal.fire({
            title: 'Are you certain you want to delete your game?',
            text: "This CANNOT be undone!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FF4D4D',
            cancelButtonColor: '#A1A1A1',
            confirmButtonText: 'Delete'
          }).then((result) => {
            if (result.value) {
                localStorage.removeItem("EvolutionarySimSave")
                console.log('Game DELETED')
                Swal.fire({title: "The Universe implodes", text: "Space, time, consciousness, and everything else that we can perceive, ceases to exist...", type: "success"})
                .then(function(){ 
                    location.reload();
                    }
             );
            }
        })
       
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


    function attributeSlider(){
        Swal.fire({
            title: "<i>Title</i>", 
            html: "Testno  sporocilo za objekt: <b>test</b>",  
            confirmButtonText: "V <u>redu</u>", 
          });
        // var Speed = document.createElement("input");
        // Speed.type = "number";
        // var Agility = document.createElement("input");
        // Agility.type = "number";
        // var Health = document.createElement("input");
        // Health.type = "number";
        // var Intelligence = document.createElement("input");
        // Intelligence.type = "number";


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
    // document.getElementById('INIT').onclick = function(){
    //     // attributeSlider();
    //     getOrganismType();
    //     drawInitOrganisms();
    // }

    document.getElementById('navOptions').onclick = function(){
        //Turn this into an options tab
    }

}