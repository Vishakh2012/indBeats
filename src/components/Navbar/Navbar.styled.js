import styled from "styled-components";
import {Link} from 'react-router-dom'
export const Pnav = styled.nav`
    background-color:${({theme}) => theme.colors.header};
    display: flex;
    height: 4rem;
    width: 100%;
    box-sizing: border-box;
    margin: 0 0 10px 0;
    justify-content: flex-end;
    
    :hover {box-shadow: 10px 10px;}
`
export const MenuLink = styled(Link)`
 color: black;
 text-decoration: none;
 font-weight: 400;
 :hover{font-size: 30px;
        }

`;

export const Menu = styled.div`
    margin: auto 30px ;
       
    
`;


