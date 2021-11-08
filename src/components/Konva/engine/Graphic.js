
import DefaultLayer from './Layers/DefaultLayer'
import { _initStage } from '../utils/_initStage.js'
import {initDefaultTransformer} from '../utils/transformer/initDefaultTransformer.js'
import { getTransformSelectionRect } from '../utils/transformer/getTransformerSelectionRect.js'
import HandDrawLayer from './Layers/HandDrawLayer'
import Konva from 'konva'
const _initHandDrawLayer = (stage) => {
    return new HandDrawLayer(stage)
}

const draw = (stage, layer) => {
    let isPaint = true;
    let mode = 'brush';
    let lastLine;

    stage.on('mousedown touchstart', function (e) {
      isPaint = true;
      var pos = stage.getPointerPosition();
      lastLine = new Konva.Line({
        stroke: '#df4b26',
        strokeWidth: 5,
        globalCompositeOperation:
          mode === 'brush' ? 'source-over' : 'destination-out',
        // round cap for smoother lines
        lineCap: 'round',
        // add point twice, so we have some drawings even on a simple click
        points: [pos.x, pos.y, pos.x, pos.y],
      });
      layer.add(lastLine);
    });

    stage.on('mouseup touchend', function () {
      isPaint = false;
    });

    // and core function - drawing
    stage.on('mousemove touchmove', function (e) {
      if (!isPaint) {
        return;
      }

      // prevent scrolling on touch devices
      e.evt.preventDefault();

      const pos = stage.getPointerPosition();
      let newPoints = lastLine.points().concat([pos.x, pos.y]);
      lastLine.points(newPoints);
    });

    // var select = document.getElementById('tool');
    // select.addEventListener('change', function () {
    //   mode = select.value;
    // });
}

class Graphic {
    constructor(idContainer, config = {width: window.innerWidth, height: window.innerHeight}) {
        const stage = _initStage(idContainer,config)
        const handDrawLayer = _initHandDrawLayer(stage)
        const defaultTransformerSelector = getTransformSelectionRect()
        const transformer  = initDefaultTransformer(stage, defaultTransformerSelector)
        const defaultLayer = new DefaultLayer(stage, transformer, defaultTransformerSelector )
        
        
        this.layers = []


        this.transformer = transformer
        this.stage = stage
        this.defaultLayer = defaultLayer
        this.handDrawLayer = handDrawLayer

    }
    exportToJson() {
        return this.stage.toJSON()
    }
    changeCurrentLayer(boolParam) {
        
    }
}

export default Graphic