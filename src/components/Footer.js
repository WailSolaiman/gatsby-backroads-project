import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import footerLinks from '../constants/links'
import SocialIcons from '../constants/social-icons'
import FooterStyles from '../css/footer.module.css'

const Footer = () => {
    return (
        <footer className={FooterStyles.footer}>
            <div className={FooterStyles.links}>
                {footerLinks.map((item, index) => {
                    return (
                        <AniLink fade key={index} to={item.path}>
                            {item.text}
                        </AniLink>
                    )
                })}
            </div>
            <div className={FooterStyles.icons}>
                {SocialIcons.map((item, index) => {
                    return (
                        <a key={index} href={item.url} target="blank">
                            {item.icon}
                        </a>
                    )
                })}
            </div>
            <div className={FooterStyles.copyright}>
                copyright &copy; Wail Solaiman - {new Date().getFullYear()}
                all rights reserved
            </div>
        </footer>
    )
}

export default Footer
