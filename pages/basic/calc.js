import axios from 'axios';
import React, { useState } from "react";
export default function Calc() {
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({opcode: "+"})
    const [result, setResult] = useState(``)
    const { num1, num2, opcode} = inputs
    const handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy+'/api/basic/calc', inputs)
        .then(res => {
            alert(JSON.stringify(res.data))
            const calc = res.data
            document.getElementById('result-span').innerHTML = `
            <h3>숫자 1 : ${calc.num1}</h3>
            <h3>숫자 2 : ${calc.num2}</h3>
            <h3>연산자 : ${calc.opcode}</h3>
            <h3>계산 결과 : ${calc.calc}</h3>
            `
        })
        .catch(err => alert(err))
        
        // switch (opcode){
        //     case "+" :
        //         return setResult(Number(num1) + Number(num2))
        //     case "-" :
        //         return setResult(Number(num1) - Number(num2))
        //     case "*" :
        //         return setResult(Number(num1) * Number(num2))
        //     case "/" :
        //         return setResult(Number(num1) / Number(num2))
        //     case "%" :
        //         return setResult(Number(num1) % Number(num2))
                
        // }
    }
    return (<>
        <h1>계산기</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={handleChange} /> <br />
            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={handleChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select><br />
            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={handleChange} /><br />
            <input type="submit" value="계산 결과" /> <br />
        </form>
        <div>결과 : <span id="result-span"></span></div>
    </>
    )
}