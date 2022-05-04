import Scene from "../engine/Scene.js";
import TextGameObject from "./TextGameObject.js";
import time from "../engine/time.js"

class EndScene extends Scene
{
    constructor()
    {
        super("End Game")
    }
    start()
    {
        this.gameObjects.push(new TextGameObject(100,100,"Escape Success!"));
        this.gameObjects.push(new TextGameObject(100,200,"Your Time Record is "+(Math.round(time.timePassed)-2)));
    }
}

export default EndScene