import React from 'react'
import { useState, useEffect } from 'react'

import './css/PriceSlider.css'

export default function PriceSlider(props) {

    const [min, setMin] = useState(props.min)
    const [max, setMax] = useState(props.max)
    const [left, setLeft] = useState('0%')
    const [right, setRight] = useState('0%')

    function changeRangeMin(e){

        if((parseInt(e.target.value) - max) >= -props.step){
        }else{
            setMin(parseInt(e.target.value))
            if(min == props.min){
                setLeft('0%')
            }else{
                var totalBarra = props.max - props.min
                var passos = min - props.min

                setLeft(((passos * 100) / totalBarra) + "%")
            }
        }

        
    }

    useEffect(()=>{
        if(min==props.min){
            document.getElementById('inputMin').value = props.min
        }else{
            document.getElementById('inputMin').value = min
        }
    },[min])

    function changeRangeMax(e){
        if((parseInt(e.target.value) - min) <= props.step){
        }else{
            setMax(parseInt(e.target.value))
            if(max == props.max){
                setRight('0%')
            }else{
                var totalBarra = props.max - props.min
                var passos = props.max - max

                setRight(((passos * 100) / totalBarra) + "%")
            }
        }
    }

    useEffect(()=>{
        if(max==props.max){
            document.getElementById('inputMax').value = props.max + "+"
        }else{
            document.getElementById('inputMax').value = max
        }
    },[max])

    function validacao(e){
        let inputMin = document.getElementById('inputMin')
        let inputMax = document.getElementById('inputMax')

        let valor = parseInt(e.target.value)

        if(e.target.id == "inputMin"){
            if(e.target.value == "" || e.target.value == null || e.target.value < props.min){
                setMin(props.min)
                setLeft("0%")
                inputMin.value = props.min
            } else{ if(e.target.value >= max){
                    let corrige = max - props.step
                    setMin(corrige)

                    var totalBarra = props.max - props.min
                    var qtSteps = valor - props.min

                    setLeft(((qtSteps * 100) / totalBarra) + "%")

                    inputMin.value = corrige
                } else{
                    setMin(valor)
                    var totalBarra = props.max - props.min
                    var qtSteps = valor - props.min

                    setLeft(((qtSteps * 100) / totalBarra) + "%")
                }
            }
        }

        if(e.target.id == "inputMax"){
            if(e.target.value == "" || e.target.value == null || valor > props.max){
                setMax(props.max)
                setRight("0%")

                inputMax.value = props.max + "+"
            } else{
                if(valor <= min){
                    let corrige = min + props.step
                    setMax(corrige)

                    var totalBarra = props.max - props.min
                    var qtSteps = props.max - valor

                    setRight(((qtSteps * 100) / totalBarra) + "%")
                    inputMax.value = corrige
                } else{
                    setMax(valor)
                    var totalBarra = props.max - props.min
                    var qtSteps = props.max - valor

                    setRight(((qtSteps * 100) / totalBarra) + "%")
                }
            }
        }
    }

  return (
    <div>
        <div className='slider'> 
            <div style={{left:left, right:right}} className='progress'></div>
        </div>
        <div className='range-input'>
            <input id='rangeMin' onChange={changeRangeMin} type="range" min={props.min} max={props.max} value={min} step={props.step} />
            <input id='rangeMax' onChange={changeRangeMax} type="range" min={props.min} max={props.max} value={max} step={props.step} />
        </div>
        <div className='row mt-4'>
            <div className='col'>
                <label className='text-muted' htmlFor="">preço mínimo</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">R$</span>
                    <input id='inputMin'  onBlur={validacao} type="number" className="form-control" placeholder="Min"/>
                </div>
            </div>
            <div className='col'>
                <label className='text-muted' htmlFor="">preço máximo</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">R$</span>
                    <input id='inputMax' onBlur={validacao} type="number" className="form-control" placeholder="Max"/>
                </div>
            </div>
        </div>
    </div>
  )
}
