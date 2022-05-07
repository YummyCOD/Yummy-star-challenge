import * as UI from "./ui";

export class Obj extends Entity {
constructor(
  model: GLTFShape,
  X: number,
  Y: number
){
  super()
  
      this.addComponent(model)
      this.addComponent(new Transform({
          position: new Vector3(X,0,Y)
      }))
      this.addComponent(
          new OnPointerDown(
            (e) => {
  
              UI.GlobalVars.eggcount++
              UI.counter.value = UI.GlobalVars.eggcount + "/5"
              engine.removeEntity(this)


               
            },
            {
              button: ActionButton.POINTER,
              showFeedback: true,
              hoverText: "Grab",
              distance: 8
  
  }
          ))
          
          if (UI.GlobalVars.gameison = true) {
            engine.addEntity(this)
          }
}
}



