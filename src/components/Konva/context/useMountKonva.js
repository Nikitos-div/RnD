import  {useEffect, useState} from 'react'
import Graphic from '../index'
export const useMountKonva = () => {
    const [konvaInstance, setKonvaInstance] = useState()

    useEffect(() => {
        const konva = new Graphic('stage-conva')
        setKonvaInstance(konva)
    }, [])
    return [konvaInstance, setKonvaInstance]
}




