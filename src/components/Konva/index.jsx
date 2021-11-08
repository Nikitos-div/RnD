import React from 'react'
import { useMountKonva } from './context/useMountKonva'
// import Graphic from './index'
import './index.css'
import {menu} from './menu'



export const Konva = () => {
    const [konvaInstance] = useMountKonva()
    const handler = (figure='rect', config) => {
        console.log(konvaInstance) 
        konvaInstance.defaultLayer.draw(figure, config)
    }
    const exportToJson = () => {
        console.log(konvaInstance.exportToJson())
        return;
    }
  
    
    return (
        <>
            <div style={{border: '1px solid red'}} id='stage-conva'></div>
            <div className='btns'>
                {
                    menu.map(item => {
                        return (
                            <button className='btns__el' onClick={() => handler(item.figure, item.config)}>{item.figure}</button>
                        )
                    })
                }
              <button onClick={exportToJson} className='btns__el'>Export to JSON</button>

            </div>
           
        </>
    )
}


export default Konva