import { NewObject } from './ts'


const ObjectPositions = [
    new Vector3(2, 0, 2),
    new Vector3(5, 0, 5),
    new Vector3(8, 0, 2),
    new Vector3(10, 0, 10),
    new Vector3(2, 0, 8),
   
    
  ]
  const Objectshape = new GLTFShape('models/egg.glb')
  for (const coinPosition of ObjectPositions) {
    NewObject(
      Objectshape,
      new Transform({ position: coinPosition }),
      
    )}