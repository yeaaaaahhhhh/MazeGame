import Circle from "../engine/Circle.js"
import CircleDraw from "../engine/CircleDraw.js"
import GameObject from "../engine/GameObject.js"

class PlayerGameObject extends GameObject
{
    constructor(x,y,r)
    {
        super()
        this.components.push(new Circle(this,x,y,r))
        this.components.push(new CircleDraw(this,"green","green"))
    }
}

export default PlayerGameObject