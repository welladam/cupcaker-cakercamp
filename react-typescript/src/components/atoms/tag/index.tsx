/* eslint-disable @typescript-eslint/naming-convention */
import styles from './styles.module.scss'

interface TagProps {
  tagType: string,
  tagTitle: string
}

const Tag = ({ tagType, tagTitle }: TagProps): JSX.Element => {
  return (
    <div className={styles[tagType]}>
      { tagTitle }
    </div>
  )
}

export { Tag }
