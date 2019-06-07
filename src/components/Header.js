import React, { useState } from 'react'
import { Link } from 'gatsby'
import navbarLinks from '../constants/links'
import socialIcons from '../constants/social-icons'
import { FaStream } from 'react-icons/fa'
import NavbarStyles from '../css/navbar.module.css'
import Logo from '../images/logo.svg'

const Header = () => {
    const [isOpen, setNav] = useState(false)
    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }
    return (
        <nav className={NavbarStyles.navbar}>
            <div className={NavbarStyles.navCenter}>
                <div className={NavbarStyles.navHeader}>
                    <img src={Logo} alt="Backroad Logo" />
                    <button
                        type="button"
                        className={NavbarStyles.logoBtn}
                        onClick={() => toggleNav()}
                    >
                        <FaStream className={NavbarStyles.logoIcon} />
                    </button>
                </div>
                <ul
                    className={
                        isOpen
                            ? `${NavbarStyles.navLinks} ${NavbarStyles.showNav}`
                            : `${NavbarStyles.navLinks}`
                    }
                >
                    {navbarLinks.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className={NavbarStyles.navSocialLinks}>
                    {socialIcons.map((item, index) => {
                        return (
                            <a key={index} href={item.url} target="blank">
                                {item.icon}
                            </a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Header
