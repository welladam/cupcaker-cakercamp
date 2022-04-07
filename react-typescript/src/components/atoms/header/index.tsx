import styles from './styles.module.scss'
import logoBlack from './logo-black.png'
import Icon from '@mdi/react'
import { mdiMoonWaxingCrescent } from '@mdi/js';

const Header = (): JSX.Element => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.headerTop}>
                    <div className={styles.headerLogo}>
                        <a href="#">
                            <img src={logoBlack} alt="GameVicio" className={styles.logoBlack} />
                        </a>
                    </div>
                </div>
            </div>
            <nav>
                <div className={styles.tabContainer} >
                    <div className={styles.container}>
                        <div className={styles.themeContainer}>
                            <a>
                                <Icon path={mdiMoonWaxingCrescent} size={1} color="white" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
  }
  
  export { Header }