import React from 'react'

import styles from './styles.module.scss'

interface ITagsProps {
  label: string
  className: string
}

const Tag = (props: ITagsProps): JSX.Element => {
  return <div className={styles[props.className]}>{props.label}</div>
}

export { Tag }
