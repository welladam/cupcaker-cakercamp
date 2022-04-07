import React from 'react'

import logo from 'app/core/resources/logo.svg'

import styles from './styles.module.scss'
import { Stories } from 'components/molecules/storiesLine'

const Home = (): JSX.Element => {
  return (
    <main>
      <Stories />
    </main>
  )
}

export default Home
