import Layer from "./AbstractLayer";
import Figure from '../Figure'

class DefaultLayer extends Layer {
    constructor(stage, transformer, transformerSelector) {
        super(stage)
        this.shapes = []
        this.tranformer = transformer
        stage.add(this.layer)
        this.layer.add(transformer)
        this.layer.add(transformerSelector)
     
    }
    draw(figure, config) {
       const element = new Figure(figure, config)
       this.layer.add(element.figure)
       this.shapes.push(element)
    }
}

export default DefaultLayer