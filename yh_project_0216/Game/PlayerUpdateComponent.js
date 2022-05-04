import Component from "../engine/Component.js";
import Input from '../engine/Input.js'
import Constants from './Constants.js'
import Game from "../engine/Game.js"
import time from "../engine/time.js"
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

        let wallObjects = Game.findByType("WallGameObject")
        //console.log(wallObjects)
        let shadowObjects = Game.findByType("ShadowGameObject")
        let itemObject = Game.findByType("ItemGameObject")[0]
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
            for (let wall of wallObjects) {
                let rect = wall.getComponent("Rectangle")
                if (rect.x < pxNew + 10 && rect.x + rect.w > pxNew - 10 && rect.y < pyNew + 10 && rect.y + rect.h > pyNew - 10) {
                    console.log("in")
                    collisionCheck = true;
                    break;
                }
            }
            if (collisionCheck == false) {
                circle.x = pxNew
                circle.y = pyNew
            }
            if (itemObject != null) {
                let item = itemObject.getComponent("Rectangle")
                if (item.x < circle.x + 10 && item.x + 10 > circle.x - 10 && item.y < circle.y + 10 && item.y + 10 > circle.y - 10) {
                    console.log("b")
                    itemObject.markForDelete = true;
                    Constants.aTime+=time.timePassed
                    // let tempObjects = structuredClone(shadowObjects);
                    shadowObjects.forEach(element => {
                        //element.markForDelete=true
                        element.visibility=false
                    });
                }
            }
            else
            {
                if(Constants.aTime!=0&&Constants.aTime+3<time.timePassed)
                {
                    shadowObjects.forEach(element=>{
                        element.visibility=true;
                    })
                }
            }


            let shadows = []
            for (let shadow of shadowObjects) {
                shadows.push(shadow.getComponent("Rectangle"))
            }



            let idxfound = shadows.findIndex(function (element) {

                if (element.x < circle.x + 10 && element.x + 50 > circle.x - 10 && element.y < circle.y + 10 && element.y + 50 > circle.y - 10) {
                    console.log("a")
                    return true
                }
                return false
            })


            //console.log(idxfound)

            if (idxfound > -1) {
                console.log(idxfound)
                shadowObjects[idxfound].markForDelete = true
            }

            if (Constants.endy < circle.y && (circle.x > Constants.endl && circle.x < Constants.endr)) {
                Game.changeScene(2)
            }
        }
    }
}

export default PlayerUpdateComponent