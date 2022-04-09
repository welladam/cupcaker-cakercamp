import React from 'react'
//import logo from 'app/core/resources/logo.svg'
import styles from './styles.module.scss'
import { Header, Footer } from 'components/atoms'
import { Stories, NewsLine } from 'components/molecules'

const Home = (): JSX.Element => {
  return (
    <main>
      <Header />
      <div className={styles.mainContainer}>
        <Stories />
        <NewsLine />
      </div>
      <Footer />
    </main>
  )
}

export default Home
