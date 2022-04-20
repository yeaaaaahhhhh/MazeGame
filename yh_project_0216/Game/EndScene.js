import Scene from "../engine/Scene.js";
import EndGameObject from "./EndGameObject.js";

class EndScene extends Scene
{
    constructor()
    {
        super("End Game")
    }
    start()
    {
        this.gameObjects.push(new EndGameObject(50,50));
    }
}

export default EndScene