import Scene from "../engine/Scene.js"
import StartGameObject from "./StartGameObject.js"

class StartScene extends Scene
{
    constructor()
    {
        super("Start Game")
    }
    start()
    {
        this.gameObjects.push(new StartGameObject(100,100));
    }
}

export default StartScene;