import Konva from "konva"
export const _initStage = (idContainer, {width, height}) => {
    return new Konva.Stage({
        container: idContainer, 
        width: width,
        height: height
    })
}
