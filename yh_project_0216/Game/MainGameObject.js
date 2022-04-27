import GameObject from "../engine/GameObject.js";
import TextDraw from "../engine/TextDraw.js";
import Text from "../engine/Text.js";

class MainGameObject extends GameObject{
    constructor()
    {
        super()
        this.start
    }
    start()
    {
        this.gameObjects.push(new Text(30,30,"Time : " + Math.round(time.timePassed * 100) / 100,"30px Arial"))
        this.gameObjects.push(new TextDraw(this,"white","black"))
        
    }
}
export default MainGameObject