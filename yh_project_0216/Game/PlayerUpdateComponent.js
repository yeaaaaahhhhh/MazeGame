import Component from "../engine/Component.js";
import Input from '../engine/Input.js'
import Constants from './Constants.js'
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
                    
                    break;
                case "s":
                    console.log("down")
                    pyNew = py + 5
                    
                    break;
                case "d":
                    pxNew = px + 5
                    
                    break
                case "w":
                    pyNew = py - 5
                    break;    
            }
            let collisionCheck = false;
            for (let rect of Constants.walls) {
                if (rect.x < pxNew + 10 && rect.x + rect.w > pxNew - 10 && rect.y < pyNew + 10 && rect.y + rect.h > pyNew - 10) {
                    console.log("in")
                    collisionCheck = true;
                    break;
                }
            }
            if (collisionCheck == false) {
                circle.x=pxNew
                circle.y=pyNew
            }


            let idxfound = Constants.darkRect.findIndex(function (element) {
                
                if (element.x < circle.x + 10 && element.x + 50 > circle.x - 10 && element.y < circle.y + 10 && element.y + 50 > circle.y - 10) {
                    //console.log("a")
                    return true
                }
                return false
            })

            //console.log(idxfound)

            if (idxfound > -1) {
                //console.log(idxfound)
                Constants.darkRect.splice(idxfound, 1)
            }

            if (Constants.endy < circle.y && (circle.x > Constants.endl && circle.x < Constants.endr)) {
                Constants.endOfGame = true
            }
        }
    }
}

export default PlayerUpdateComponent