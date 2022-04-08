import axios from "axios"
import { useEffect, useState } from "react";

import tableStyles from '../common/style/table.module.css'

const Table = ({ columns, colspan, data}) => {
    return (
        <table className={tableStyles.table}>
          <thead>
              {/**<th key={column} className={tableStyles.td}>{column}</th> */}
              <tr className={tableStyles.tr}  >
              {columns.map((column) => (
                  <th key={column} className= {tableStyles.td}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
                  { data.length == 0  ?<tr className={tableStyles.tr}>
                                        <td colSpan={colspan} className={tableStyles.td}>데이터가 없습니다</td>
                                        </tr>
                  :data.map((board) => (
                  <tr className={tableStyles.tr}  key={board.passengerId} >
                    <td className={tableStyles.td}>{board.passengerId}</td>
                    <td className={tableStyles.td}>{board.name}</td>
                    <td className={tableStyles.td}>{board.teamId}</td>
                    <td className={tableStyles.td}>{board.subject}</td>
                  </tr>
              ))}
              
          </tbody>
        </table>
      );
}



export default function BoardList(){

    const columns = ["PassengerId", "Name", "TeamId", "Subject"];
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/board/list').then(res=>{
            setData(res.data.board)
        }).catch(err=>{})
    },[])
    return (<>
        <h1>보드리스트</h1>
        <div className={tableStyles.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        
        </>)
}