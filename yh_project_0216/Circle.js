class Circle
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    }
    draw(ctx) {
        ctx.fillStyle = "green"
        ctx.beginPath()
        ctx.arc(this.x, this.y, 15, 0, Math.PI * 2)
        ctx.fill()
    }
}

export default Circle