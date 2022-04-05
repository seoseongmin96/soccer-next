import style from "board/style/board-form.module.css"
import React, {useState} from 'react'
export default function TeamForm(){
    const [inputs, setInputs] = useState({})
    const {TeamId, HomeTown, TeamName, orgYyyy, stadiumName, address, tel} = inputs;
    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        alert(`등록할 팀 정보 : ${JSON.stringify(inputs)}`)
    }
    return (<>
        <div className={style.container}>
            <form action="">
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="TeamId">팀 ID</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="TeamId" name="TeamId"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="HomeTown">연고지</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="HomeTown" name="HomeTown"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="TeamName">팀명</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="TeamName" name="TeamName"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="orgYyyy">창단년도</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="orgYyyy" name="orgYyyy"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="stadiumName">스타디움 명칭</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="stadiumName" name="stadiumName"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="address">주소</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="address" name="address"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="tel">전화번호</label>
                </div>
                <div className={style.col75}>
                    <input type="text" onChange={handleChange} className={style.inputText} id="tel" name="tel"/>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit}
                onClick={handleSubmit} value="Submit"/>
            </div>
            </form>
            </div>
    </>)
}