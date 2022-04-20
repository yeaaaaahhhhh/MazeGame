import GameObject from "../engine/GameObject.js";
import Text from "../engine/Text.js";
import TextDraw from "../engine/TextDraw.js";
import time from "../engine/time.js";

class EndGameObject extends GameObject{
    constructor(x,y)
    {
        super();
        this.x=x;
        this.y=y;
        this.start();
    }
    start()
    {
        this.components.push(new Text(this,this.x,this.y,"Escape Success\nYour Record is "+time.timePassed,"50px sans"))
        this.components.push(new TextDraw(this,"white","black"))
    }
}
export default EndGameObject