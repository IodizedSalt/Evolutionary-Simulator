function generateSingleATP(){
    console.log('atp')
        updateATP(1);
}

function updateATP(value){
    gameData.TotalATP += value
    document.getElementById('ATPLabel').textContent = 'ATP: ' + gameData.TotalATP

}
