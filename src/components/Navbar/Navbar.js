import { Pnav, Menu, MenuLink } from './Navbar.styled.js'

const Navbar = () => {
    return ( 
        <Pnav>
            <Menu>
                <MenuLink to = "/dev">dev</MenuLink>
            </Menu>
            <Menu>
                <MenuLink to = "/myBeats">myBeats</MenuLink>
            </Menu>
            
        </Pnav>
     );
}
 
export default Navbar;