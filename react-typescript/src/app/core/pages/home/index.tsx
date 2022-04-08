import React from 'react'
//import logo from 'app/core/resources/logo.svg'
import styles from './styles.module.scss'
import { Header, Footer } from 'components/atoms'

import { Tag,  LabelType} from 'components/atoms'
import { Stories } from 'components/molecules/storiesLine'

const Home = (): JSX.Element => {
  return (
    <main>
      <Header />
      <Stories />
      <Footer />
    </main>
  )
}

export default Home
