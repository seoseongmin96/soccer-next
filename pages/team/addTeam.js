
import tableStyles from '../common/style/table.module.css'

export default function TeamForm(){
    const handleSubmit = e => {
        e.preventDefault()
        alert(`등록할 팀 정보 : `)
    }
    return (<>
        <div className={tableStyles.container}>
            <form action="">
            <div className={tableStyles.row}>
                <div className={tableStyles.col25}>
                    <label className={tableStyles.label} htmlFor="teamId">팀 ID</label>
                </div>
                <div className={tableStyles.col75}>
                    <input type="text" className={tableStyles.inputText} id="TeamId" name="TeamId"/>
                </div>
            </div>
            <div className={tableStyles.row}>
                <div className={tableStyles.col25}>
                    <label className={tableStyles.label} htmlFor="teamId">팀 ID</label>
                </div>
                <div className={tableStyles.col75}>
                    <input type="text" className={tableStyles.inputText} id="TeamId" name="TeamId"/>
                </div>
            </div>
            <div className={tableStyles.row}>
                <div className={tableStyles.col25}>
                    <label className={tableStyles.label} htmlFor="teamId">연고지</label>
                </div>
                <div className={tableStyles.col75}>
                    <input type="text" className={tableStyles.inputText} id="TeamId" name="TeamId"/>
                </div>
            </div>
            <div className={tableStyles.row}>
                <div className={tableStyles.col25}>
                    <label className={tableStyles.label} htmlFor="teamId">팀명</label>
                </div>
                <div className={tableStyles.col75}>
                    <input type="text" className={tableStyles.inputText} id="TeamId" name="TeamId"/>
                </div>
            </div>
            <div className={tableStyles.row}>
                <div className={tableStyles.col25}>
                    <label className={tableStyles.label} htmlFor="orgYyyy">창단년도</label>
                </div>
                <div className={tableStyles.col75}>
                    <input type="text" className={tableStyles.inputText} id="orgYyyy" name="orgYyyy"/>
                </div>
            </div>
            <div className={tableStyles.row}>
                <div className={tableStyles.col25}>
                    <label className={tableStyles.label} htmlFor="stadiumName">스타디움 명칭</label>
                </div>
                <div className={tableStyles.col75}>
                    <input type="text" className={tableStyles.inputText} id="stadiumName" name="stadiumName"/>
                </div>
            </div>
            <div className={tableStyles.row}>
                <div className={tableStyles.col25}>
                    <label className={tableStyles.label} htmlFor="address">주소</label>
                </div>
                <div className={tableStyles.col75}>
                    <input type="text" className={tableStyles.inputText} id="address" name="address"/>
                </div>
            </div>
            <div className={tableStyles.row}>
                <div className={tableStyles.col25}>
                    <label className={tableStyles.label} htmlFor="tel">전화번호</label>
                </div>
                <div className={tableStyles.col75}>
                    <input type="text" className={tableStyles.inputText} id="tel" name="tel"/>
                </div>
            </div>
            <br/>
            <div className={tableStyles.row}>
                <input type="submit" className={tableStyles.inputSubmit}
                value="Submit"/>
            </div>
            </form>
            </div>
    </>)
}