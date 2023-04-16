import { charactersData } from "./data.js";
import { Character } from "./Character.js"

const main = document.querySelector('main')
const heart = document.getElementById('icon-heart')
const cross = document.getElementById('icon-cross')



document.querySelector('footer').addEventListener('click',function(event){
    if(event.target.id === 'icon-heart' || event.target.id === 'icon-cross'){
        document.getElementById('badges').style.display = "block"
        if(event.target.id === 'icon-heart'){
            document.getElementById('badge-like').style.display = "block";
            document.getElementById('badge-nope').style.display = "none";
        }else{
            document.getElementById('badge-nope').style.display = "block";
            document.getElementById('badge-like').style.display = "none";
        }
        setTimeout(render,1500)
    }
})

function render(){
    document.getElementById('badges').style.display = "none"
    if(charactersData.length !== 0){
        let character = new Character(charactersData.shift())
        main.innerHTML = character.getRenderHTML()
    }
}

render()
