import Konva from "konva"

class Layer {
    constructor(stage) {
        const layer = new Konva.Layer()
        this.refStage = stage
        this.layer = layer
    }
}


export default Layer 