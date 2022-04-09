import styles from './styles.module.scss'
import { Tag,  LabelType } from 'components/atoms'

export const NewsLine = () : JSX.Element => {
    const news = {
        "title": "Sonic the Hedgehog 2 gerou US$ 25,5 milhões em seu final de semana internacional",
        "description": "Um aumento de 2% em comparação com a estreia do primeiro filme",
        "author": "Elta_Dickens12",
        "createdAt": "2022-04-05T09:00:46.272Z",
        "comments": 44,
        "tags": [
        "Games",
        "Entretenimento"
        ],
        "type": "Cinema",
        "image": "https://static.gamevicio.com/imagens_up/big/71/sonic-the-hedgehog-2-gerou-us-25-5-milhoes-em-seu-final-de-semana-internacional-070121.jpg",
        "id": "1"
    }

    return (
        <div className={ styles.newsItem }>
            <div className={ styles.newsItemImage }>
                <div className={ styles.niItemType }>
                    <LabelType labelTitle="Games"/>
                </div>
                <a title={ news.title } >
                    <img id="img-lz-32402_8615" alt={news.title} width="360px" height="217px" src={ news.image } />
                </a>
            </div>
            <div className={ styles.newsItemContent }>
                <div className={ styles.nicTitle }>
                    <h3> <a title={ news.title } > { news.title } </a> </h3>
                </div>
                <div className={ styles.nicMessage }>
                    <a title={ news.title } > { news.description } </a>
                </div>
                <div className={ styles.nicDetail }>
                    {news.tags.map((el) => (
                        < Tag tagTitle={el}/>
                    ))}
                    <div className={ styles.nicInfo }>
                        <span className={ styles.userSpan }>Por <strong>{ news.author }</strong></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

