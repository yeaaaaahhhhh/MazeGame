import Circle from "../engine/Circle.js"
import CircleDraw from "../engine/CircleDraw.js"
import GameObject from "../engine/GameObject.js"
import PlayerUpdateComponent from "./PlayerUpdateComponent.js"


class PlayerGameObject extends GameObject
{
    constructor(x,y,r)
    {
        super()
        this.components.push(new Circle(this,x,y,r))
        this.components.push(new CircleDraw(this,"green","green"))
        this.components.push(new PlayerUpdateComponent(this))
    }
}

export default PlayerGameObject