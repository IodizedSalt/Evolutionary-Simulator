// All gameData variables must be update/saved through a function in uiManagement.js

var ui = require('./uiManagement')
var sm = require('./sustenanceManagement')

var gameData = JSON.parse(localStorage.getItem("EvolutionarySimSave"))

var currentEvolutionWidth = 0;

//TODO: Encrypt localstorage variable

var loadGame = function(){
    console.log('loading game...')
    ui.saveLoop()
    gameData = JSON.parse(localStorage.getItem("EvolutionarySimSave"))

    if (gameData !== null && gameData.gameExists) {
      
      // Display the interactables on load
      ui.drawUI()
      console.log('game exists:', gameData)

    
    }else{
        console.log('game doesnt exist:', gameData)
        ui.drawBigBang()

    }
}



window.onload = function(){
    loadGame();

    document.querySelector('#atp').addEventListener('click', sm.generateSingleATP)

    //Save Function
    document.getElementById('navSave').onclick = function(){
        // localStorage.setItem('EvolutionarySimSave', JSON.stringify(gameData))
        ui.manualSaveGame()
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
                Swal.fire({title: "Heat Death of the Universe", text: "Space, time, consciousness, and everything else that we can perceive, ceases to exist...", type: "success"})
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