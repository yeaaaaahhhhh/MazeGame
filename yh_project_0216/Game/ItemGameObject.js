import GameObject from "../engine/GameObject.js"
import Rectangle from "../engine/Rectangle.js"
import RectangleDraw from "../engine/RectangleDraw.js"
class ItemGameObject extends GameObject
{
    constructor(x,y,color)
    {
        super()
        this.components.push(new Rectangle(this,x,y,10,10))
        this.components.push(new RectangleDraw(this,color))
    }
}

export default ItemGameObject