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
        var canvas = document.createElement('canvas');
        document.body.appendChild(canvas)
        canvas.setAttribute('class', "carnivoreCanvas");
        var carnivoreCanvas = document.getElementsByClassName("carnivoreCanvas")
        var ctx = carnivoreCanvas.getContext("2d");                 //FIX DIS
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0, 0, 150, 75);
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
    document.getElementById('INIT').onclick = function(){
        // attributeSlider();
        getOrganismType();
        drawInitOrganisms();
    }

    document.getElementById('optionsButton').onclick = function(){
        //Turn this into an options tab
    }

}