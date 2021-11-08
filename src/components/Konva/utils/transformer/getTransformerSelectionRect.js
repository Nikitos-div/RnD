import Konva from 'konva'

export const getTransformSelectionRect = () => {
    return new Konva.Rect({
        fill: 'rgba(0,0,255,0.5)',
        visible: false,
      });
}