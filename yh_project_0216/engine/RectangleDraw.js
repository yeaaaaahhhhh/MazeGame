import Rectangle from "./Rectangle.js"
import Component from "./Component.js";

class RectangleDraw extends Component
{
    constructor(parent,color)
    {
        super(parent)
        this.fillStyle=color
        this.strokeStyle=color
    }
    draw(ctx)
    {
        ctx.fillStyle=this.fillStyle
        ctx.strokeStyle=this.strokeStyle
        let rect=this.parent.getComponent('Rectangle')
        ctx.fillRect(rect.x,rect.y,rect.w,rect.h)
    }
}
export default RectangleDraw