import React from 'react'

export default function Info() {
    return(
        <div className="info-wrapper">
            <img src="/prof.png" alt="usr-profile" className="info-wrapper--dp" />
            <div className="info-wrapper--profile">
                <h2 className="info-wrapper--profile-name">Arushi</h2>
                <h3 className="info-wrapper--profile-profession">Front-end developer</h3>
                <p className="info-wrapper--profile-website">www.react@arushi.in</p>
            </div>
            <div className="info-wrapper--links">
                <a href="#" className="info-wrapper--links--link info-wrapper--links--email ">
                    <img src="/Mail.png" alt="main-icon" className="info-wrapper--links--email--logo" />
                    <span className="info-wrapper--links--email--placeholder">Email</span>
                </a>
                <a href="#" className="info-wrapper--links--link info-wrapper--links--linkedin">
                    <img src="/linkedin.png" alt="linkedin-icon" className="info-wrapper--links--linkedin--logo" />
                    <span className="info-wrapper--links--linkedin--placeholder">Linkedin</span>
                </a>
            </div>
        </div>
    )
}