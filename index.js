'use strict';
const textDeveloment = document.getElementById('title-developer');
const tools = document.getElementById('primary-kits');



const arrayTexto = ['FrontEnd Developer','BackEnd Developer'];

let deleteInterval
const time = 120;

// esta funcion hace que espere un tiempo en milisegundos hasta que una promesa se cumpla.
const waitFor = (time) => {
    return new Promise((res, rej) => setTimeout(() => {res()}, time))
}

let j = 0;
function writeText(palabra){
    if (j < palabra.length+1) {
        textDeveloment.textContent += palabra.charAt(j);
        j++;
    }
    if (j === palabra.length+1) {
        textDeveloment.textContent = "";
        j = 0;
        clearInterval(deleteInterval)//limpia el intervalo y empieza el nuevo arreglo
    }
}

async function fullFunction() {
    while (true) {
        for (let i = 0; i < arrayTexto.length; i++) {
            //obtengo el indice de cada palabra en el array
            const text = arrayTexto[i];
            deleteInterval = setInterval(()=>{
                writeText(text)
            },time)
            await waitFor(time*text.length+600)
            // textDeveloment.textContent = "Full Stack Web Developer";
        }
    }
}
fullFunction();


// async function fullFunction() {
//     let i = 0;
//     while (i< arrayTexto.length) {
        
//         const mes = arrayTexto[i];
        
//         deleteInterval = setInterval(()=>{
//             writeText(mes)
//         },time)
        

//         await waitFor(time*text.length+600)
//     }
// }
// fullFunction();



const personalProyects = [
    {
        name:"proyecto de desarrollo web",
        description:"",
        gitHub:"",
        linkDeploy:"",
        
    },
    {
        name:"proyecto de JavaScript",
        description:"",
        gitHub:"",
        linkDeploy:"",
        
    },
    {
        name:"proyecto de React.Js",
        description:"",
        gitHub:"",
        linkDeploy:"",
        
    },
    {
        name:"proyecto Chats",
        description:"",
        gitHub:"",
        linkDeploy:"",
        
    },
    {
        name:"proyecto de desarrollo web",
        description:""
    },
    {
        name:"proyecto de desarrollo web",
        description:""
    },
]

const primaryTools = [
    {
        name:"bootstrap",
        image:"https://blog.baehost.com/wp-content/uploads/2017/12/bootstrap.png"
    },
    {
        name:"node js",
        image:"https://midu.dev/images/tags/node.png",
    },
]

primaryTools.forEach(card =>{
    tools.innerHTML += `
    <figure class="box-father">
        <img class="box-img" src=${card.image} alt="logo de la herramienta">
    </figure>`;
})