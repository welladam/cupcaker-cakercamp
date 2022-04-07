import React from 'react'

import logo from 'app/core/resources/logo.svg'

import styles from './styles.module.scss'
import { Tag } from 'components/atoms'

const Home = (): JSX.Element => {
  return (
    <main>
      <Tag tagType="PS5" tagTitle="PS5"/>
    </main>
  )
}

export default Home
