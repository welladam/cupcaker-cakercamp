import React from 'react'
//import logo from 'app/core/resources/logo.svg'
import styles from './styles.module.scss'

import { Tag,  LabelType} from 'components/atoms'


const Home = (): JSX.Element => {
  return (
    <main>

      <Tag tagTitle="Switch"/>

      <LabelType labelTitle='Games'/>

    </main>
  )
}

export default Home
