import * as UI from "./ui"
export function NewObject(
    model: GLTFShape,
    transform: Transform,
  ): Entity {
    const ObjCrea = new Entity()
    engine.addEntity(ObjCrea)
    ObjCrea.addComponent(model)
    ObjCrea.addComponent(transform)
    model.visible = false
    ObjCrea.addComponent(
        new OnPointerDown(
          (e) => {

            UI.GlobalVars.eggcount++
            UI.counter.value = UI.GlobalVars.eggcount + "/5"
            engine.removeEntity(ObjCrea)


             
          },
          {
            button: ActionButton.POINTER,
            showFeedback: true,
            hoverText: "Grab",
            distance: 8

          }))
          UI.Yes.onClick = new OnClick(() => {
            UI.DialogBox.visible = false
            UI.counter.visible = true
            UI.EggCounter.visible = true
            model.visible = true
          })
      
    
          return ObjCrea
  }