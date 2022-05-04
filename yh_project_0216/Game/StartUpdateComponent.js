import time from "../engine/time.js"
import Component from "../engine/Component.js";
import Game from "../engine/Game.js";

class StartUpdateComponent extends Component{
    constructor(parent)
    {
        super(parent)
        this.time=0;
    }
    update()
    {
        this.time+=time.secondsBetweenFrame;
        if(this.time>3)
        {
            Game.changeScene(1)
        }
    }
}

export default StartUpdateComponent;