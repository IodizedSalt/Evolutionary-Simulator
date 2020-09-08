var ui = require('./uiManagement')
var gameData = JSON.parse(localStorage.getItem("EvolutionarySimSave"))

module.exports = {
generateSingleATP(){
        ui.updateATP(1);
},
}

