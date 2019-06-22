window.onload = function(){

    document.getElementById('BigBang').onclick = function(){
        chooseInitOrganism();
        document.getElementById('INIT').disabled=false
    }

    function attributeSlider(){
        
        var slider = document.createElement("input");
        slider.type = "range";
        
        swal({
        content: slider,
        });

    }

function chooseInitOrganism(){
    swal('Welcome to the Evolutionary hot soup. Choose an archetype below and begin evolving your organism.', {
        buttons:{
          being1: {
            text: "Carnivore",
            value: "Carnivore",
          },
          being2: {
            text: "Omnivore",
            value: "Omnivore",
          },
          being3: {
            text: "Herbivore",
            value: "Herbivore",
          },
        }
      }).then((value) => {
            swal(`The returned value is: ${value}`);
        } 
        )   
        //TODO: Make 3 archetypes

}
    document.getElementById('INIT').onclick = function(){
        chooseInitOrganism();
    }

    document.getElementById('optionsButton').onclick = function(){
        attributeSlider();
    }

}