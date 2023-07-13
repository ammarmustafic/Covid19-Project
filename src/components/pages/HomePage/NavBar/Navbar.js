import { NavLink } from "react-router-dom";
import { NavBar } from "./navbarcss";
import { Covidimg } from "./navbarcss";
import { Li } from "./navbarcss";

const Header = () =>{
    return(
        <NavBar>
            <Covidimg src="https://cornwallglass.co.uk/wp-content/uploads/2020/08/Covid-19-Coronavirus-logo.jpg"></Covidimg>
            <ul style={{display:"flex",listStyleType:"none"}}>
                <Li>Covid Stats</Li>
                <Li>Country Stats</Li>
                <Li>About Us</Li>
            </ul>
        </NavBar>
    )
}
export default Header;