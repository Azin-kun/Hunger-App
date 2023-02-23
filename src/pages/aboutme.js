import Image from 'next/image'
import '../app/globals.css'
import Link from 'next/link';
import styles from '../style/aboutme.module.css'

export default function aboutme () {
    return(
        <div>
            <div className={styles.nav}>
        <div className={styles.navbarleft}>
        <a href="#">Hunger Apps</a>
        </div>

        <div className={styles.navbarright}>
          <ul>
            <li><Link href="/#">Home</Link></li>
            <li><Link href="/favorite">Favorite</Link></li>
            <li><Link href="/aboutme">About Me</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.hero}>
        <div class={styles.herocontent}>
          <h1>Find your favorite restourant here</h1>
        </div>
      </div>
        </div>
    )
}