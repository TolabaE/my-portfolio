'use strict';
const textDeveloment = document.getElementById('title-developer');
const tools = document.getElementById('primary-kits');



const arrayTexto = ['FrontEnd Developer','BackEnd Developer','FrontEnd Developer','BackEnd Developer'];

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

    for (let i = 0; i < arrayTexto.length; i++) {
        //obtengo el indice de cada palabra en el array
        const text = arrayTexto[i];
        deleteInterval = setInterval(()=>{
            writeText(text)
        },time)
        await waitFor(time*text.length+600)
        
    }
    textDeveloment.textContent = 'Full Stack Developer';
}
fullFunction();


const personalProjects = [
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
        name:"html",
        image:"https://blog.hubspot.es/hubfs/media/imagenhtmlejemplo.png",
        description:"imagen del logo de html5"
    },
    {
        name:"CSS3",
        image:"https://cdn-icons-png.flaticon.com/512/919/919826.png",
        description:"imagen del logo de css3"
    },
    {
        name:"javascript",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        description:"imagen del logo de javascript"
    },
    {
        name:"node js",
        image:"https://midu.dev/images/tags/node.png",
        description:"imagen del logo de node.js"
    },
    {
        name:"react js",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        description:"imagen del logo de react js"
    },
    {
        name:"bootstrap",
        image:"https://blog.baehost.com/wp-content/uploads/2017/12/bootstrap.png",
        description:"imagen del logo de bootstrap"
    },
    {
        name:"tailwindcss",
        image:"https://cms-assets.tutsplus.com/uploads/users/30/posts/34128/preview_image/tailwindcss-pre.png",
        description:"imagen del logo de tailwindcss"
    },
    {
        name:"firebase",
        image:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/firebase_logo-1.png",
        description:"imagen del logo de firebase"
    }
]

primaryTools.forEach(card =>{
    tools.innerHTML += `
    <figure class="box-father">
        <img class="box-img" src=${card.image} alt=${card.description}>
    </figure>`;
})