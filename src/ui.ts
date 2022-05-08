import * as utils from '@dcl/ecs-scene-utils'

const gamecanvas = new UICanvas()
let maintexture = new Texture("images/uimap.png")
export class GlobalVars {
  public static eggcount = 0
 

}
        
      

     export const npc = new Entity
      npc.addComponent(new GLTFShape("models/npc.glb"))
      npc.addComponent(new Transform({
          position: new Vector3(3,0,3),
          scale: new Vector3(0.5, 0.5, 0.5),
      }))
      npc.addComponent(new Animator())
      const EYES = new AnimationState("eyes",{ layer: 0 })
      const CUBE = new AnimationState("CUBE",{ layer: 1 })
      npc.getComponent(Animator).addClip(EYES)
      npc.getComponent(Animator).addClip(CUBE)
      CUBE.speed = 0.5
      EYES.looping = false
      npc.addComponent(
        new utils.Interval(1500, () => {
          EYES.play()
          CUBE.play()

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
     

      
      export const DialogBox = new UIImage(gamecanvas, maintexture)
      DialogBox.sourceWidth = 957
      DialogBox.sourceHeight = 412
      DialogBox.sourceLeft = 32
      DialogBox.sourceTop = 77
      DialogBox.positionX = 0
      DialogBox.positionY = 0
      DialogBox.width = 957
      DialogBox.height = 412
      DialogBox.hAlign = 'center'
      DialogBox.vAlign = 'center'
      DialogBox.visible = false


     export const ObjCounter = new UIImage(gamecanvas, maintexture)
      ObjCounter.sourceWidth = 269
      ObjCounter.sourceHeight = 269
      ObjCounter.sourceLeft = 614
      ObjCounter.sourceTop = 599
      ObjCounter.positionX = 5
      ObjCounter.positionY = 150
      ObjCounter.width = 47
      ObjCounter.height = 47
      ObjCounter.hAlign = 'left'
      ObjCounter.vAlign = 'center'
      ObjCounter.visible = false

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
      
    

      export const Yes = new UIImage(DialogBox, maintexture)
      const Yes_soul = new Entity
      Yes.sourceWidth = 185
      Yes.sourceHeight = 185
      Yes.positionX = -170
      Yes.positionY = -100
      Yes.width = 120
      Yes.height = 120
      Yes.hAlign = 'center'
      Yes.vAlign = 'center'
      Yes.isPointerBlocker = true
      Yes_soul.addComponent(
        new utils.Interval(1500, () => {
          Yes.sourceLeft = 38
          Yes.sourceTop = 537
          
          utils.setTimeout(500, ()=>{
              Yes.sourceLeft = 38
                Yes.sourceTop = 730
              utils.setTimeout(500, ()=>{
                Yes.sourceLeft = 38
              Yes.sourceTop = 931
                
              })
              
            })
            
          
         
          
            
          
          
          
        })
      )
      engine.addEntity(Yes_soul)
  
      const No = new UIImage(DialogBox, maintexture)
      const No_soul = new Entity
      No.sourceWidth = 186
      No.sourceHeight = 186
      No.positionX = 150
      No.positionY = -100
      No.width = 120
      No.height = 120
      No.hAlign = 'center'
      No.vAlign = 'center'
      No.isPointerBlocker = true
      No.onClick = new OnClick(() => {
      DialogBox.visible = false
        

    })
    No_soul.addComponent(
      new utils.Interval(1500, () => {
        No.sourceLeft = 340
        No.sourceTop = 537
        
        utils.setTimeout(500, ()=>{
            No.sourceLeft = 336
              No.sourceTop = 730
            utils.setTimeout(500, ()=>{
              No.sourceLeft = 336
            No.sourceTop = 931
              
            })
            
          })
          
        
       
        
          
        
        
        
      })
    )
    engine.addEntity(No_soul)

