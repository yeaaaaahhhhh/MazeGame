import GameObject from "../engine/GameObject.js"
import Rectangle from "../engine/Rectangle.js"
import RectangleDraw from "../engine/RectangleDraw.js"
class ShadowGameObject extends GameObject
{
    constructor(x,y,w,h,color)
    {
        super()
        this.components.push(new Rectangle(this,x,y,w,h))
        this.components.push(new RectangleDraw(this,color))
    }
}

export default ShadowGameObject