import { charactersData } from "./data.js"
class Character{
    constructor(data){
        Object.assign(this,data)
    }

    getRenderHTML(data){
        const {name, avatar, episodes, studios, hasBeenLiked, hasBeenSwiped} = this
        return`
        <img class="main-img" src="./${avatar}" alt="">
        <div class="main-text">
            <p class="name">${name}</p>
            <p class="studios">Studio : ${studios}</p>
        </div>
        `
    }
}

export { Character } 