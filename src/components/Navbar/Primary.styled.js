import styled from "styled-components";
import {Link} from 'react-router-dom'
export const Pnav = styled.nav`
    background-color:rgba(232, 210, 166, 1);
    display: flex;
    height: 4rem;
    width: 100%;
    box-sizing: border-box;
    margin: 0%;
    justify-content: flex-end;
`
export const MenuLink = styled(Link)`
 color: black;
 text-decoration: none;
 font-weight: 400;
`;

export const Menu = styled.div`
    margin: auto 30px ;
       
    
`;


