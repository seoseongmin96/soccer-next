import axios from 'axios';
import { useEffect, useState } from 'react';
import tableStyles from '../common/style/table.module.css'
import Link from 'next/link';
const Table = ({ columns, colspan, data}) => {
    return (
        <table className={tableStyles.table}>
        <thead>
        <tr className={tableStyles.tr}>
        {columns.map((column, index) => (
            <th className= {tableStyles.td} key={index}>{column}</th>
        ))}
        </tr>
        </thead>
        <tbody>
            { data.length ==0 ?<tr className={tableStyles.tr}>
                                <td colSpan={colspan} className={tableStyles.td}>할 일이 없습니다</td>
                                </tr>
            :data.map((todo) => (
            <tr className={tableStyles.tr}  key={todo.text} >
                <td className={tableStyles.td}>
                <Link href= {{pathname:`/todo/[text]`,
                              query:{selectedUser: 'test'}}} as={`/todo/${todo.text}`}>
                <a>{todo.text}</a>              
              </Link>

            </td>
                <td className={tableStyles.td}>{todo.text}</td>

              </tr>
          ))}
          
      </tbody>
    </table>
  );
}

export default function TodoList(){

    const columns = [];
    const [data, setData] = useState([])
    useEffect(() =>{
      axios.get('http://localhost:5000/api/todo/list').then(res=>{
          setData(res.data.todo)
      }).catch(err=>{})  
    },[])
    return (<>
        <h1>스케줄 목록</h1>
        <div className= {tableStyles.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>)
}

