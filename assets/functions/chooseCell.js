window.onload = function(){

    setOrganismType = function(organismType){
        this.organismType = organismType;
        console.log(this.organismType)

    },
    getOrganismType = function(){
        console.log(this.organismType)
        return this.organismType;

    };
    document.getElementById('BigBang').onclick = function(){
        chooseInitOrganism();
        document.getElementById('INIT').disabled=false
        document.getElementById('optionsButton').disabled=false
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





//Choose the initial organism on Big Bang
function chooseInitOrganism(){
    swal.fire({
        title: 'Welcome to the Evolutionary hot soup.',
        html:   "<p>Choose an archetype below and begin evolving your organism.</p> "+
                "<br>" +
                '<div class="btn-group" data-toggle="buttons">' +
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
            }else{
                return;
            }
        }

    });


        //User should then be able to select attributes and design
}
    document.getElementById('INIT').onclick = function(){
        // attributeSlider();
        getOrganismType();
    }

    document.getElementById('optionsButton').onclick = function(){
        //Turn this into an options tab
    }

}