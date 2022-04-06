/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";

type ColorProps = {
    color: string;
}
export const Container = styled.div<ColorProps>`
  background-color: ${(props) => props.color};   
  border-radius: 2px;

`;

export const Text = styled.p`
 color: #FFF;
 font-size: 13px;
 text-shadow: #000 1px 1px 0px;
 margin: 2px 5px 2px 5px;
`;
