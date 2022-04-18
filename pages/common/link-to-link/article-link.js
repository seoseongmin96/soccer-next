import Link from "next/link";
import styles from "common/style/Nav.module.css";
export default function ArticleLink(){
    return(
        <nav className={styles.nav}>
        <ul>
        
        <li className={styles.li}><Link href='/board/addArticle'>게시글등록</Link></li>
        <li className={styles.li}><Link href='/board/getArticles'>게시글목록</Link></li>
        <li className={styles.li}><Link href='/board/modifyArticle'>게시글수정</Link></li>
        <li className={styles.li}><Link href='/board/removeArticle'>게시글삭제</Link></li>
        
        
       
         </ul>
        
        </nav>
    );
}