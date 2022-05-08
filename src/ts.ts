import * as UI from "./ui"
export function NewObject(
    model: GLTFShape,
    transform: Transform,
    animation: AnimationState
  ): Entity {
    const ObjCrea = new Entity()
    engine.addEntity(ObjCrea)
    ObjCrea.addComponent(model)
    ObjCrea.addComponent(transform)
    ObjCrea.addComponent(new Animator())
    ObjCrea.getComponent(Animator).addClip(animation)
    animation.looping = false
    model.visible = false
    ObjCrea.addComponent(
        new OnPointerDown(
          (e) => {

            UI.GlobalVars.eggcount++
            UI.counter.value = UI.GlobalVars.eggcount + "/5"
            animation.play()
            
            if(UI.GlobalVars.eggcount == 5){
              UI.counter.value = "COMPLETED"
              UI.counter.color = Color4.Red()
              UI.counter.fontSize = 30
              UI.counter.positionY = 150


            }


             
          },
          {
            button: ActionButton.POINTER,
            showFeedback: true,
            hoverText: "Grab",
            distance: 8

          }))
          ObjCrea.addComponent(
            new OnPointerUp(
              (e) => {
                ObjCrea.removeComponent(OnPointerDown)
              },
              
            )
          )
          UI.Yes.onClick = new OnClick(() => {
            UI.DialogBox.visible = false
            UI.counter.visible = true
            UI.ObjCounter.visible = true
            model.visible = true
            UI.npc.removeComponent(OnPointerDown)
          })
      
          
    
          return ObjCrea
  }