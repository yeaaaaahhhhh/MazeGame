import Component from "../engine/Component.js";
import Input from '../engine/Input.js'
class PlayerUpdateComponent extends Component {
    constructor(parent) {
        super(parent)
    }
    update() {

        let circle = this.parent.getComponent('Circle')
        let px = circle.x
        let py = circle.y
        let pxNew = px;
        let pyNew = py;
        //console.log(px+ "////"+py)
        //console.log(Input.frameKey + "****")
        if (Input.frameKey != undefined) {
            //console.log("not undefined",Input.key)
            switch (Input.frameKey) {
                case "a":
                    pxNew = px - 5
                    circle.x = pxNew
                    break;
                case "s":
                    console.log("down")
                    pyNew = py + 5
                    circle.y = pyNew
                    break;
                case "d":
                    pxNew = px + 5
                    circle.x = pxNew
                    break
                case "w":
                    pyNew = py - 5
                    circle.y = pyNew
                    break;
            }
        }
    }
}

export default PlayerUpdateComponent