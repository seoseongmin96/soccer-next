import Link from "next/link";
import styles from "common/style/Nav.module.css";
export default function GameLink(){
    return(
        <nav className={styles.nav}>
        <ul>
       
        <li className={styles.li}><Link href='/game/addGame'>게임추가</Link></li>
        <li className={styles.li}><Link href='/game/getGames'>팀목록</Link></li>
        <li className={styles.li}><Link href='/game/modifyGame'>팀수정</Link></li>
        <li className={styles.li}><Link href='/game/removeGame'>팀삭제</Link></li>
        
       
         </ul>
        
        </nav>
    );
}