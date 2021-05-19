// All gameData variables must be update/saved through a function in uiManagement.js

var ui = require('./uiManagement')
var sustenance_management = require('./sustenanceManagement')
var cell_types = require('./enemyCellTypes')
var canvas_drawer = require('./canvasDrawer')

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

    document.querySelector('#atp').addEventListener('click', sustenance_management.generateSingleATP)
    document.querySelector('#Photosynthesize').addEventListener('click', function(){
        sustenance_management.photosynthesize(10)
    })

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


    document.getElementById('navOptions').onclick = function(){
        //Turn this into an options tab
    }
}