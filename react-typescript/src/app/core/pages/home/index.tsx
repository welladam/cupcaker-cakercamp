import React from 'react'

import { Tag } from 'components/atoms'
import { LabelGames } from 'components/atoms'

/* import styles from './styles.module.scss'*/

const Home = (): JSX.Element => {
  return (
    <main>
      <header>
        <Tag label="PC" className="PC" />
        
        <LabelGames />
      </header>
    </main>
  )
}

export default Home
