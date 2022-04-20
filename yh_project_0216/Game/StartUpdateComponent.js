import Time from "../engine/time.js"
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
        this.time+=Time.secondsBetweenFrame;
        if(this.time>1)
        {
            Game.changeScene(1)
        }
    }
}

export default StartUpdateComponent;