/* eslint-disable @typescript-eslint/naming-convention */
import styles from './styles.module.scss'
import { Tags, setTag } from 'components/enums/tag-types'

interface TagProps {
  tagTitle: string
}

const Tag = ({ tagTitle }: TagProps): JSX.Element => {
  const type = setTag(tagTitle as Tags)
  return (
    <div className={styles.tagName} style={{backgroundColor: type?.color || '#ef6c00'}} >
      { type?.name || tagTitle }
    </div>
  )
}

export { Tag }