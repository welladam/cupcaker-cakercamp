/* eslint-disable @typescript-eslint/naming-convention */
import styles from './styles.module.scss'

interface StoryProps {
    storyPic: string
    storyTitle: string
}

const Story = ({storyPic, storyTitle}: StoryProps): JSX.Element => {
    return (
        <div className={styles.storyItem}>
            <div className={styles.storyImage}>
                <a href="#" title={storyTitle} >
                    <img loading="lazy" src={storyPic} height="400" width="665" title={storyTitle} alt={storyTitle} />
                </a>
            </div>
            <div className={styles.storyTitle}>
                <a href="#" title={storyTitle} >
                    {storyTitle}
                </a>
            </div>
        </div>
    )
  }
  
  export { Story }