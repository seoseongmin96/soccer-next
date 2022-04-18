import Link from "next/link";
import styles from "common/style/Nav.module.css";
export default function BasicLink(){
    return(
        <nav className={styles.nav}>
        <ul>
        
        <li className={styles.li}><Link href='/basic/bmi'>BMI</Link></li>
        <li className={styles.li}><Link href='/basic/calc'>계산기</Link></li>
        <li className={styles.li}><Link href='/basic/counter'>카운터</Link></li>
        </ul>
        
        </nav>
    );
}