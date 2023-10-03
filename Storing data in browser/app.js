console.log('Hello world from Javascript');

const cookie = document.getElementById("cookie");
const local = document.getElementById("local");
const session = document.getElementById("session");

let nam = "my name"
let value = "Ako Ruth"

cookie.onclick = () => {
    document.cookie = 'user = Ruth; max-age = 3'
    document.cookie = encodeURIComponent(nam) + "=" + encodeURIComponent(value)        
    alert(document.cookie)
}

// name = value; pairs

// Local(full browser restart) & Session(refresh ) Storage


/*
setItem(key, value)
getItem(key)
removeItem(key)
clear()
key(index)
length

*/

let userInfo = {
    name :"Ako Ruth",
    age : 18,
    sex : "F"
}

local.onclick = () => {
    // localStorage.setItem('test',2)
    
    // alert(localStorage.getItem('test'))
    // localStorage.setItem("userInfo",JSON.stringify(userInfo))
    const user = JSON.parse(localStorage.getItem('userInfo'))
    alert(user?.height);
}

session.onclick = () => {
        sessionStorage.setItem('test 2', 20);
}


// let promise = fetch(url, [opions])

// status eg 200 
// ok eg boolean true -> 200

// async / await 
/*

let response = await fetch(url);

if(response.ok){
    let json = await response.json();
} else{
    console.log(response.status);
}


response.text() -> read the response and return as text
        .json()
        .formData() -> as formData object
        .blob() -> 
*/




let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';


// async / await 
async function  fetchCommmits()  {

let response = await fetch(url);
console.log(response.headers.get('Content-Type'));

let commits = await response.json();
console.log(commits[0].author.login);

}


//promises
// fetch(url)
// .then((response) => response.json())
// .then((commits) =>{
//     console.log(commits[0].author.url);
// })


async function fetchImage () {
    let response = await fetch('data:image/jpeg;base64,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');
    console.log(response.headers.get('Content-Type'));
    let blob = await response.blob();

    //create <img> for the incoming image
    let img = document.createElement('img');
    img.style = 'position:fixed;top:90px;width:100px';
    document.body.append(img);

    //show it
    img.src = URL.createObjectURL(blob);
}


const post = {
    userId : 1,
    id: 1,
    title: "hello",
    body : 'this is the body of the post request'
    }

async function postInfo (){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(post)

    });

    console.log('This is the response from the post', response.status ); ;
}

postInfo();