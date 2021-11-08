import Konva from 'konva'


const figures =  {
    rect: Konva.Rect,
    circle: Konva.Circle,
    ellipse: Konva.Ellipse,
    arrow: Konva.Arrow,
    line: Konva.Line
}


class Figure {
    constructor(typeOfFigure, config) {
       this.figure = new figures[typeOfFigure](config)
    }
}


export default Figure