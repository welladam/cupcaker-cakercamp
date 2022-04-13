/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { LabelType } from 'components/atoms'
import styles from './styles.module.scss'
import './styles.css'

interface dataInterface {
    title: string
    description: string
    image: string
    type: string
    id: string
}

export interface carouselProps {
    items?: dataInterface[]
}

export const Slideshow = ({items =[
    {title: 'CI Games confirma lançamento de Lords of the Fallen 2 para 2023', description:'Com lançamento apenas para a nova geração de consoles, o jogo usará do Unreal Engine 5 como motor gráfico', image: 'https://static.gamevicio.com/imagens_up/big/71/ci-games-confirma-lancamento-de-lords-of-the-fallen-2-para-2023-070367.jpg', type: 'Games', id: '1' },
    {title: 'Alemães podem adquirir um Xbox Series S por € 19,99 se entregarem um PS4 como parte do pagamento', description:'Já se imaginou comprando um Xbox Series S por apenas R$ 102,49?', image: 'https://static.gamevicio.com/imagens_up/big/71/alemaes-podem-adquirir-um-xbox-series-s-por-19-99-se-entregarem-um-ps4-como-parte-do-pagamento-070412.png', type: 'Games', id: '2' },
    {title: '“Estamos trabalhando em expansões”, garante desenvolvedor de Cyberpunk 2077', description:'Diretor de Quests indica que conteúdo extra está sendo produzido', image: 'https://static.gamevicio.com/imagens_up/big/71/estamos-trabalhando-em-expansoes-garante-desenvolvedor-de-cyberpunk-2077-070365.jpg', type: 'Games', id: '3' },
    {title: 'Desenvolvedor sugere que God of War: Ragnarok já está pronto', description:'A data de lançamento pode estar próxima de ser divulgada.', image: 'https://static.gamevicio.com/imagens_up/big/66/god-of-war-ragnarok-no-pc-cory-barlog-diz-que-a-resposta-para-isso-cabera-a-sony-065736.webp', type: 'Games', id: '4' },
    {title: 'Battlefield 2042 chega no fundo do poço e atinge menos de 1K de jogadores simultâneos no Steam', description:'O jogo literalmente morreu...', image: 'https://static.gamevicio.com/imagens_up/big/71/battlefield-2042-chega-no-fundo-do-poco-e-atinge-menos-de-1k-de-jogadores-simultaneos-no-steam-070415.jpg', type: 'Games', id: '5' }
]} : carouselProps) : JSX.Element => {

    const setSlides = (): JSX.Element[] => {
        return items.map(el =>
            <SplideSlide className={styles.slideItem}>
                <a className={styles.slideImg} title={el.title}>
                    <img src={el.image} title={el.title} alt={el.title} width="665px" height="400px" />
                </a>
                <div className={styles.labelType}>
                    <LabelType labelTitle={el.type} />
                </div>
                <div className={styles.slideMessage}>
                    <a className={styles.slideMessageTitle} title={el.title}> {el.title} </a>
                    <a className={styles.slideMessageMsg} title={el.title}> {el.description} </a>
                </div>
            </SplideSlide>    
        )
    }

    return (
        <Splide options={{type: 'fade', rewind: true, autoplay: true, interval:5000}} className={styles.slideContainer}>
            {setSlides()}
        </Splide>
    )
}