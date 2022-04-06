import * as C from './styles';

type Text = {
 text: string;
}
const LabelType = ({text}:Text): JSX.Element  => {
    return (
        <C.Container>
            <C.Text>{text} </C.Text>
        </C.Container>
    );
}
export default LabelType;