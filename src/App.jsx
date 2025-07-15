import React, { useState } from 'react'
import './App.css'
import './index.css'

function App() {

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [bmistatus, setBmistatus] = useState("")
  const [error, setError] = useState("")

  const calbmi = () => {

    const heightt = /^\d+$/.test(height)
    const Weightt = /^\d+$/.test(weight)


    if (heightt && Weightt) {
      const heightInMeters = height / 100;
      const bmivalue = weight / (heightInMeters * heightInMeters);
      setBmi(bmivalue.toFixed(2))
      if (bmivalue < 18.5) {
        setBmistatus("Underweight")
      }
      else if (bmivalue >= 18.5 && bmivalue < 24.9) {
        setBmistatus("Normal weight")
      }
      else if (bmivalue >= 25 && bmivalue < 29.9) {
        setBmistatus("Overweight")
      }
      else {
        setBmistatus("Obese")
      }
      setError("")
    }
    else {
      setBmi(null)
      setBmistatus("")
      setError("please enter a valid numeric values for height and weigth")
    }

  }

  const clear = () => {
    setHeight("")
    setWeight("")
    setBmi(null)
    setBmistatus("")
  }

  return (
    <div className='bmi-calculator flex justify-center items-center gap-10 bg-white md:w-[800px] h-[480px]'>

      <div className='md:w-90 h-90'>
        <img src="./bmi.png" alt="" className='w-full h-full ' />
      </div>
     
      <div className="box">

        <div className="data ">
          <h1 className='text-sm font-semibold md:text-2xl'>BMI CALCULATION</h1>

          {error && <p className='error'>{error}</p>}

          <div className="input-container ">
            <label>Height (cm):</label>
            <input  type="text" id='height' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className="input-container">
            <label>Weight (kg):</label>
            <input type="text" id='weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button onClick={calbmi}>Calculate BMI</button>
          <button onClick={clear} style={{ backgroundColor: 'red', color: "white" }}>Clear</button>
          {bmi !== null && (
            <div className="result mt-4 p-4 border border-blue-600">
              <p>Your BMI is : {bmi}</p>
              <p>BMI status: {bmistatus}</p>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default App