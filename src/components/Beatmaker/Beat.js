import  styled  from "styled-components";

export const Beat = styled.div`
    height: 50px;
    width : 50px;
    background-color: ${({theme}) => theme.colors.beats};
    margin-right: 10px;
    :hover{
        box-shadow: 5px 5px;
    }
`

export const InstSel = styled.div`
    background-color: blueviolet;
`





export const BL = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    `;


export const BeatGroup = styled.div`
    display: flex;
    margin: auto;
    height: calc(100vh - 4rem);
    width: 100vw;
    //align-items: center;
    justify-content: center;
    flex-direction: column;

` 