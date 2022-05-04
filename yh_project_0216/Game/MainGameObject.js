import GameObject from "../engine/GameObject.js";
import TextDraw from "../engine/TextDraw.js";
import Text from "../engine/Text.js";
import time from "../engine/time.js"
import MainUpdateComponent from "./MainUpdateComponent.js";

class MainGameObject extends GameObject{
    constructor()
    {
        super()
        this.start()
    }
    start()
    {
        console.log( Math.round(time.timePassed * 100) / 100)
        this.components.push(new Text(this,30,30,"","30px Arial"))
        this.components.push(new TextDraw(this,"white","black"))
        this.components.push(new MainUpdateComponent(this))
    }
}
export default MainGameObject