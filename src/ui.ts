import { Obj } from "./object"

const gamecanvas = new UICanvas()
let maintexture = new Texture("images/uimap.png")
export class GlobalVars {
  public static eggcount = 0

}
let gameison = false

      
      

      const npc = new Entity
      npc.addComponent(new GLTFShape("models/npc.glb"))
      npc.addComponent(new Transform({
          position: new Vector3(3,0,3)
      }))
      npc.addComponent(
        new OnPointerDown(
          (e) => {
            DialogBox.visible = true
             
          },
          {
            button: ActionButton.POINTER,
            showFeedback: true,
            hoverText: "Talk",
            distance: 8

}
        ))
      engine.addEntity(npc)
      gameison = false
    
      const DialogBox = new UIImage(gamecanvas, maintexture)
      DialogBox.sourceWidth = 760
      DialogBox.sourceHeight = 374
      DialogBox.sourceLeft = 19
      DialogBox.sourceTop = 11
      DialogBox.positionX = 0
      DialogBox.positionY = 0
      DialogBox.width = 722
      DialogBox.height = 376
      DialogBox.hAlign = 'center'
      DialogBox.vAlign = 'center'
      DialogBox.visible = false


      const EggCounter = new UIImage(gamecanvas, maintexture)
      EggCounter.sourceWidth = 94
      EggCounter.sourceHeight = 124
      EggCounter.sourceLeft = 626
      EggCounter.sourceTop = 429
      EggCounter.positionX = 5
      EggCounter.positionY = 150
      EggCounter.width = 47
      EggCounter.height = 62
      EggCounter.hAlign = 'left'
      EggCounter.vAlign = 'center'
      EggCounter.visible = false

      export const counter = new UIText(gamecanvas)
      counter.value = GlobalVars.eggcount + "/5"
      counter.fontSize = 50
      counter.positionX = 60
      counter.positionY = 135
      counter.height = 35
      counter.width = 90
      counter.hAlign = "left"
      counter.vAlign = "center"
      counter.color = Color4.White()
      counter.visible = false
      
    

      const Yes = new UIImage(DialogBox, maintexture)
      Yes.sourceWidth = 249
      Yes.sourceHeight = 73
      Yes.sourceLeft = 47
      Yes.sourceTop = 398
      Yes.positionX = -170
      Yes.positionY = -100
      Yes.width = 249
      Yes.height = 73
      Yes.hAlign = 'center'
      Yes.vAlign = 'center'
      Yes.isPointerBlocker = true
      Yes.onClick = new OnClick(() => {
        DialogBox.visible = false
        counter.visible = true
        EggCounter.visible = true
        
      
})
      const No = new UIImage(DialogBox, maintexture)
      No.sourceWidth = 249
      No.sourceHeight = 73
      No.sourceLeft = 48
      No.sourceTop = 501
      No.positionX = 150
      No.positionY = -100
      No.width = 249
      No.height = 73
      No.hAlign = 'center'
      No.vAlign = 'center'
      No.isPointerBlocker = true
      No.onClick = new OnClick(() => {
      DialogBox.visible = false
        

    })


  