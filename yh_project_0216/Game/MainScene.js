import Scene from "../engine/Scene.js";
import MainGameObject from "./MainGameObject.js";
import WallGameObject from "./WallGameObject.js"
import PlayerGameObject from "./PlayerGameObject.js";
import ShadowGameObject from "./ShadowGameObject.js";
import ItemGameObject from "./ItemGameObject.js";

class MainScene extends Scene{
    constructor()
    {
        super("Main Game Scene")
    }
    start()
    {
        this.gameObjects.push(new MainGameObject())

        this.gameObjects.push(new WallGameObject(100, 100, 10, 400, "white"))
        this.gameObjects.push(new WallGameObject(100, 100, 100, 10, "white"))
        this.gameObjects.push(new WallGameObject(250, 100, 350, 10, "white"))
        this.gameObjects.push(new WallGameObject(600, 100, 10, 410, "white"))
        this.gameObjects.push(new WallGameObject(100, 500, 350, 10, "white"))
        this.gameObjects.push(new WallGameObject(500, 500, 100, 10, "white"))
        this.gameObjects.push(new WallGameObject(195, 100, 10, 60, "white"))
        this.gameObjects.push(new WallGameObject(245, 100, 10, 100, "white"))
        this.gameObjects.push(new WallGameObject(245, 195, 50, 10, "white"))
        this.gameObjects.push(new WallGameObject(300, 150, 50, 10, "white"))
        this.gameObjects.push(new WallGameObject(350, 150, 10, 100, "white"))
        this.gameObjects.push(new WallGameObject(150, 250, 210, 10, "white"))
        this.gameObjects.push(new WallGameObject(150, 250, 210, 10, "white"))
        this.gameObjects.push(new WallGameObject(150, 250, 10, 50, "white"))
        this.gameObjects.push(new WallGameObject(150, 300, 50, 10, "white"))
        this.gameObjects.push(new WallGameObject(150, 350, 100, 10, "white"))
        this.gameObjects.push(new WallGameObject(250, 250, 10, 150, "white"))
        this.gameObjects.push(new WallGameObject(250, 400, 50, 10, "white"))
        this.gameObjects.push(new WallGameObject(100, 400, 100, 10, "white"))
        this.gameObjects.push(new WallGameObject(150, 450, 150, 10, "white"))
        this.gameObjects.push(new WallGameObject(300, 450, 10, 50, "white"))
        this.gameObjects.push(new WallGameObject(350, 400, 10, 50, "white"))
        this.gameObjects.push(new WallGameObject(350, 450, 50, 10, "white"))
        this.gameObjects.push(new WallGameObject(400, 400, 10, 50, "white"))
        this.gameObjects.push(new WallGameObject(400, 400, 150, 10, "white"))
        this.gameObjects.push(new WallGameObject(500, 400, 10, 50, "white"))
        this.gameObjects.push(new WallGameObject(450, 450, 10, 50, "white"))
        this.gameObjects.push(new WallGameObject(450, 450, 50, 10, "white"))
        this.gameObjects.push(new WallGameObject(400, 150, 10, 200, "white"))
        this.gameObjects.push(new WallGameObject(300, 300, 200, 10, "white"))
        this.gameObjects.push(new WallGameObject(300, 300, 10, 50, "white"))
        this.gameObjects.push(new WallGameObject(300, 350, 50, 10, "white"))
        this.gameObjects.push(new WallGameObject(400, 150, 50, 10, "white"))
        this.gameObjects.push(new WallGameObject(450, 150, 10, 100, "white"))
        this.gameObjects.push(new WallGameObject(500, 100, 10, 100, "white"))
        this.gameObjects.push(new WallGameObject(550, 150, 10, 50, "white"))
        this.gameObjects.push(new WallGameObject(550, 150, 50, 10, "white"))
        this.gameObjects.push(new WallGameObject(500, 250, 100, 10, "white"))
        this.gameObjects.push(new WallGameObject(400, 350, 50, 10, "white"))
        this.gameObjects.push(new WallGameObject(450, 350, 10, 50, "white"))
        this.gameObjects.push(new WallGameObject(500, 300, 10, 50, "white"))
        this.gameObjects.push(new WallGameObject(550, 300, 10, 100, "white"))
        this.gameObjects.push(new WallGameObject(550, 450, 10, 50, "white"))
    
    
        this.gameObjects.push(new WallGameObject(150, 140, 10, 60, "white"))
        this.gameObjects.push(new WallGameObject(100, 195, 105, 10, "white"))

        this.gameObjects.push(new ItemGameObject(180,280,"orange"))

        this.gameObjects.push(new PlayerGameObject(225, 115, 15))
       
        for (let x = 105; x < 600; x = x + 50) {
            for (let y = 105; y < 500; y = y + 50) {
                this.gameObjects.push(new ShadowGameObject(x, y, 50, 50, "grey"))
            }
        }
    }

}

export default MainScene