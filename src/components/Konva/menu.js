export const menu = [
    {
        figure: 'rect', 
        config: {
            x: 100,
            y: 100,
            height:100,
            width: 100,
            // radius: 70,
            fill: 'transparent',
            name:'element',
            stroke: 'black',
            strokeWidth: 1,
            draggable: true
        }
    },
    {
        figure: 'circle',
        config: {
            x: 100,
            y: 100,
            radius: 70,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 1,
            name:'element',
            draggable: true
        }
    },
    {
        figure: 'ellipse', 
        config: {
            x: 100,
            y: 100,
            radiusX: 100,
            radiusY: 50,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 1,
            name:'element',
            draggable: true
          }
    },
    {
        figure: 'line',
        config: {
            points: [5, 70, 140, 23, 250, 60, 300, 20,10,101,1000,100],
            stroke: 'red',
            strokeWidth: 5,
            lineCap: 'round',
            lineJoin: 'round',
            name:'element',
            draggable: true,
          }
    }
]