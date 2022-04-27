import Circle from "./Circle.js"
import Component from "./Component.js";

class CircleDraw extends Component
{
    constructor(parent,fillStyle,strokeStyle)
    {
        super(parent)
        this.fillStyle=fillStyle
        this.strokeStyle=strokeStyle
    }

    draw(ctx) {
        ctx.fillStyle=this.fillStyle
        ctx.strokeStyle=this.strokeStyle

        let circle=this.parent.getComponent('Circle')
        //console.log(circle.x+" == "+circle.y)
        ctx.beginPath()
        ctx.arc(circle.x,circle.y, circle.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
    }
}
export default CircleDraw