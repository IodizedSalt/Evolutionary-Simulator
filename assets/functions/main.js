var ui = require('./uiManagement')


// Object to hold state of all aspects of a user's game
// var gameData = {
//     gameExists: false,
//     organsimType: '',
//     TotalATP: 0,
//     TotalFood: 0,
//     TotalEvolution: 0,
//     atpPerFood: 0,
//     DPS: 0,
//     health: 0,
//     healthRegen: 0,
//     gameStage: 0,                       //What stage is the user in (Cell, Creature, Space, etc.)
//     elementsStage: 0,                   //What dom elements should be rendered (Which elements to show within the stage that the user is currently in)
//     evolutionLevel: 0,
//   }

// var gameData = localStorage.getItem("EvolutionarySimSave")

var currentEvolutionWidth = 0;

//TODO: Move drawUI, updateLabels functions and all others that init elements on page to another file

// Loop that saves game every 15 seconds
var saveGameLoop = window.setInterval(function() {              
    localStorage.setItem('EvolutionarySimSave', JSON.stringify(gameData))
    console.log('Game Auto-saved')
  }, 15000)



var loadGame = function(){
    console.log('loading game')
    var savegame = JSON.parse(localStorage.getItem("EvolutionarySimSave"))

    if (savegame !== null && savegame.gameExists) {
      gameData = savegame
      
      // Display the interactables on load
      drawUI()
    
    
    }
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


    document.getElementById('navOptions').onclick = function(){
        //Turn this into an options tab
    }
}