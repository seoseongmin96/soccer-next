import Link from "next/link";
import styles from "./style/Nav.module.css";
export default function Nav(){
    return(
        <nav className={styles.nav}>
        <ul>
        <li className={styles.li}><Link href='/'>메인</Link></li>
        <li className={styles.li}><Link href='/common/link-to-link/article-link'>게시판</Link></li>
        <li className={styles.li}><Link href='/common/link-to-link/basic-link'>베이식</Link></li>
        <li className={styles.li}><Link href='/common/link-to-link/game-link'>게임</Link></li>
        <li className={styles.li}><Link href='/common/link-to-link/todo-link'>투두</Link></li>
        <li className={styles.li}><Link href='/common/link-to-link/user-link'>사용자</Link></li>
        
       
         </ul>
        
        </nav>
    );
}