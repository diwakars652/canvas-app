import { useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import './App.css'

function App() {
    const [data, setData] = useState({ brushRadius: 1, brushColor: '#000' })
    const handleData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }
    return (
        <>
            <div className="main">
                <CanvasDraw
                    brushRadius={data.brushRadius}
                    brushColor={data.brushColor}
                    catenaryColor="red"
                    hideGrid={false}
                    style={{ border: '1px solid black' }}
                />
            </div>
            <div className="footer">
                <div className="input">
                    <label htmlFor="color">Pick a color:</label>
                    <input
                        type="color"
                        id="color"
                        name="brushColor"
                        onChange={handleData}
                    />
                </div>
                <div className="input">
                    <label htmlFor="brush">Pick a brush size:</label>
                    <input
                        type="range"
                        id="brush"
                        name="brushRadius"
                        min={1}
                        max={12}
                        step={0.1}
                        onChange={handleData}
                    />
                </div>
            </div>
        </>
    )
}

export default App
