import axios from 'axios'
import React, {useState} from 'react'
export default function SignUp(){
    const [inputs, setInputs] = useState({})

 
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...inputs, [name]: value})

     
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost5000/api/user/sing-up', inputs)
        .then(res => {
            const signup = res.data
            document.getElementById('result-span').innerHTML = `
            <h3>사용자 ID : ${signup.username}</h3>
            <h3>비밀번호 : ${signup.password}</h3>
            <h3>이름 : ${signup.name}</h3>
            <h3>전화번호 : ${signup.telephone}</h3>
            `
        })
        .catch(err => alert(err))
       
    }



    return (<div><h1>회원가입폼</h1>
        <form action="" onSubmit={handleSubmit}>
  
            <div>
                <label><b>사용자 ID</b></label>
                <input type="text" name='username' onChange={handleChange} /><br />

                <label htmlFor=""><b>비밀번호</b></label>
                <input type="text" name='password' onChange={handleChange}/><br />

                <label><b>이름</b></label>
                <input type="text" name='name'  onChange={handleChange}/><br />

                <label><b>전화번호</b></label>
                <input type="text" name='telephone' onChange={handleChange}/><br />
                <input type="submit" value="회원가입" /><br />  
            </div>
        </form>
        <div> 결과 : <span id= "result-span"></span></div>
        </div>)
    
}