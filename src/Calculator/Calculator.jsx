import React, { useState } from "react";
import CalculatorForm from "../CalculatorForm/CalculatorForm";
import styles from './Calculator.module.css'


const Calculator = () => {

    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')

    let calcBmi = (event) => {
        
        let bmi = (event.weight / (event.height * event.height) * 703)
        
        setBmi(bmi.toFixed(1))
        debugger;
        if (bmi < 25) {
            setMessage('You are underweight')
        } else if (bmi >= 25 && bmi < 30) {
            setMessage('You are a healthy weight')
        } else {
            setMessage('You are overweight')
        }

    }


    return (
        <div className={styles.wrapper}>
            <h2>BMI calculator</h2>

            <CalculatorForm calcBmi={calcBmi} />

            <div className='message'>
                <h3>Your BMI is: {bmi}</h3>
                <p>{message}</p>
            </div>


        </div>
    )
}

export default Calculator;