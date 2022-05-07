import { Obj } from "./object";
import * as UI from "./ui";

UI.GlobalVars.gameison = false
const eggs = new Obj(
    new GLTFShape("models/egg.glb"),
    10,
    2
)

UI