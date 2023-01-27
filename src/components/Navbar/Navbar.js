import { Pnav, Menu, MenuLink } from './Primary.styled.js'
import {Link} from 'react-router-dom'

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