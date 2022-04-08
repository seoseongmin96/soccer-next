import Link from "next/link";
import styles from "common/style/Nav.module.css"
export default function Nav(){
    return(
        <nav className={styles.nav}>
        <ul>
        <li className={styles.li}><Link href='/'>Home</Link></li>
        <li className={styles.li}><Link href='/board/board-list'>Board</Link></li>
        <li className={styles.li}><Link href='/game/game-list'>Game</Link></li>
        <li className={styles.li}><Link href='/basic/calc'>Calculator</Link></li>
        <li className={styles.li}><Link href='/basic/counter'>Counter</Link></li>
        <li className={styles.li}><Link href='/basic/bmi'>BMI</Link></li>
        <li className={styles.li}><Link href='/basic/grade'>Grade</Link></li>
        <li className={styles.li}><Link href='/user/sign-in'>SignIn</Link></li>
        <li className={styles.li}><Link href='/user/sign-up'>SignUp</Link></li>
        <li className={styles.li}><Link href='/admin/dashboard'>DashBoard</Link></li><br/>
        <li className={styles.li}><Link href='/board/board-list'>BoardList</Link></li>
        <li className={styles.li}><Link href='/game/game-list'>GameList</Link></li>
        <li className={styles.li}><Link href='/game/team-list'>TeamList</Link></li>
        <li className={styles.li}><Link href='/todo/todo-list'>TodoList</Link></li>
        <li className={styles.li}><Link href='/board/board-form'>BoardForm</Link></li>
        <li className={styles.li}><Link href='/game/team-form'>TeamForm</Link></li>
        <li className={styles.li}><Link href='/user/user-list'>UserList</Link></li>
        </ul>
        
        </nav>
    );
}