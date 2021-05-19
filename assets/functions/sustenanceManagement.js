var ui = require('./uiManagement')
var gameData = JSON.parse(localStorage.getItem("EvolutionarySimSave"))

module.exports = {
        generateSingleATP(){
                ui.updateATP(1);
        },
              
        photosynthesize(photosynthesis_time){
                // Photosynthesis time in seconds
                photosynthesis_progress_bar = document.getElementById("PhotosynthesisProgress")
                var timesRun = 0;
                var interval = setInterval(function(){
                        timesRun += 1
                        photosynthesis_progress_bar.setAttribute("style","width: " +timesRun*10+ "%");	
                        photosynthesis_progress_bar.setAttribute("aria-valuenow", timesRun*10);
                        photosynthesis_progress_bar.textContent= timesRun *10	
                        if(timesRun === photosynthesis_time){
                                clearInterval(interval);
                                photosynthesis_progress_bar.textContent= ''
                                photosynthesis_progress_bar.setAttribute("style","width: " +0+ "%");	
                                photosynthesis_progress_bar.setAttribute("aria-valuenow", 0);
                                ui.updateFood(1)
                        }
                }, 1000)
                
        }
}

