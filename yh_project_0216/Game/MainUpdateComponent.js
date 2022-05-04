import Component from "../engine/Component.js";
import time from "../engine/time.js"
class MainUpdateComponent extends Component
{
    constructor(parent)
    {
        super(parent)
        //ticks=0
    }
    update()
    {
        let textComp=this.parent.getComponent("Text")
        textComp.text="Time : "+(Math.round(time.timePassed)-2)
    }
}

export default MainUpdateComponent