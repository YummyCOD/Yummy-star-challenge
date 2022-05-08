import * as UI from "./ui";

export class Settings{
     public static model = GLTFShape
     public static X : number
     public static Y : number
}
     export const Base = new Entity
      Base.addComponent(new Transform({
          position: new Vector3(Settings.X? Settings.X:1,0,Settings.Y? Settings.Y:1)
      }))
      Base.addComponent(
          new OnPointerDown(
            (e) => {
  
              UI.GlobalVars.eggcount++
              UI.counter.value = UI.GlobalVars.eggcount + "/5"
              engine.removeEntity(Base)


               
            },
            {
              button: ActionButton.POINTER,
              showFeedback: true,
              hoverText: "Grab",
              distance: 8
  
  }
          ))


