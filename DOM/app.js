const p = document.querySelector('p');
const ol = document.getElementById('ol');   
const div2 = document.getElementById('div');   


const div = document.createElement('div');
div.className = 'alert'
div.innerHTML = '<strong>Hi there!</strong> You\'ve this message'
p.append(div)

//before
// prependfield
// append
// after
ol.before('hello')

let liFirst = document.createElement('li'); 
liFirst.innerHTML = 'prepend is here';
ol.prepend(liFirst)


let liLast = document.createElement('li'); 
liLast.innerHTML = 'append is here';
ol.append(liLast)

//after
ol.after('hi it is after')


//insertAdjacentHTML
// beforebegin -> insert html immediately before elem, 
//beforeend -> insert html into elem, at the end, 
//afterend -> insert html immediately after elem, 
// afterbegin -> insert html into the elm at the beginning
div2.insertAdjacentHTML('afterbegin', '<strong>hello</strong>')


p.style.cssText = `
background-color: yellow;
text-align: center;
color: red;
`;


div2.classList.add('alert');
    //classList.remove
    //classList.toogle
    //classList.contains