import "./Header.css"
import { Link } from 'react-router-dom'
import { FcHome, FcContacts } from "react-icons/fc";
import { SiLinkedin } from 'react-icons/si'
import { TiContacts } from 'react-icons/ti'


export default function Header() {

    return (

        <div className="headerPort">

            <div className="linksPortHeader">
                <Link to="/">
                    <FcHome className="home" size={40} />
                </Link>

                <a href="https://www.linkedin.com/in/lucas-maia-front-end/" target="_blank">
                    <SiLinkedin size={40} color="#FFF" />
                </a>

                {/* <Link>
                    <TiContacts id="#contato" size={40} color="#FFF" />
                </Link> */}
            </div>

        </div>

    )


}