// element.addEventListener("event", handlerFunc, [options]);
// element.removeEventListener("event", handlerFunc, [options]);


const elem2 = document.getElementById('elem');
const menu = document.getElementById('menu');
const counterBtn = document.getElementById("counterBtn");

function handler(){
    alert('Thanks');
    // console.log('hello');
}

function handler2(){
    alert('Thanks 2');
    // console.log('hello');
}

// elem.addEventListener("click", handler);
// elem.addEventListener("click", handler2);

// setTimeout(() => elem.removeEventListener("click", handler), 5000);
// elem.removeEventListener("click", handler);


elem2.onclick = function (event){
    console.log(event.type + " at " + event.currentTarget);
    console.log(" Coordinates " + event.clientX + " : " + event.clientY);
}

class Menu {
    constructor(elem){
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

  
    save(){
        alert('saving')
    }

    load(){
        alert('loading')
    }

    search(){
        alert('searching')
    }


    onClick(event){
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}


new Menu(menu);


counterBtn.addEventListener('click', function (event){
    if(event.target.dataset.counter != undefined){
        event.target.value++;
    }
})