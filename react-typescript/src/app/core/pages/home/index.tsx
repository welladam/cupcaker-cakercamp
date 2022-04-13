import React from 'react'
import styles from './styles.module.scss'
import { Header, Footer } from 'components/atoms'
import { Stories, News, Slideshow } from 'components/molecules'

const Home = (): JSX.Element => {
  return (
    <main>
      <Header />
      <div className={styles.mainContainer}>
        <Slideshow />
        <Stories />
        <News />
      </div>
      <Footer />
    </main>
  )
}

export default Home
