/* eslint-disable @typescript-eslint/naming-convention */
import styles from './styles.module.scss'

interface LabelProps {
  labelTitle: string
}

const LabelType = ({labelTitle}: LabelProps): JSX.Element => {
  return (
    <a className={styles.labelTag} title={labelTitle}>
      #{labelTitle}
    </a>
  )
}

export { LabelType }