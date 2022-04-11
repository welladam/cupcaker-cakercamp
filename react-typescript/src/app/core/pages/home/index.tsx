import React from 'react'
//import logo from 'app/core/resources/logo.svg'
import styles from './styles.module.scss'
import { Header, Footer } from 'components/atoms'

import { Tag,  LabelType} from 'components/atoms'
import { Stories, News } from 'components/molecules'

const Home = (): JSX.Element => {
  return (
    <main>
      <Header />
      <div className={styles.mainContainer}>
        
        <Stories />
        <News />
      </div>
      <Footer />
    </main>
  )
}

export default Home
