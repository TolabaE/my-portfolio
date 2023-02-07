'use strict';
const textDeveloment = document.getElementById('title-develoment');
// const arrayTexto = ['Web developer Full Stack','front end developer','back end developer']
const txt = 'Full stack web developer '
let i = 0;


function writeText(){
    if (i < txt.length) {
        textDeveloment.innerHTML += txt.charAt(i);
        i++;
    }
    if (i === txt.length) {
        textDeveloment.innerHTML = "";
        i = 0;
    }
}

setInterval(()=>{
    writeText()
},150)


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