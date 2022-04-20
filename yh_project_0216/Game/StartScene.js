import Scene from "../engine/Scene.js"
import StartGameObject from "./StartGameOjbect.js"

class StartScene extends Scene
{
    constructor()
    {
        super("Start Game")
    }
    start()
    {
        this.gameObjects.push(new StartGameObject(50,50));
    }
}

export default StartScene;