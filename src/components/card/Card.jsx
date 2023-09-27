import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>27.09.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
            <h1>Mflkajk jfklaj jlajdfl jflajdfla</h1>
            </Link>
            <p className={styles.desc}>
                Lkfajfjad  ajdflajf lkdjflajdf jfklajfaf
                jfasldjfa ljflajfa kjflajdf ddjflkajdfadf
                adflaj f fjaljdfa flajfas slkfjaljf ad dfjald
            </p>
            <Link href="/" className={styles.desc}>Read More</Link>
        </div>
    </div>
  )
}

export default Card