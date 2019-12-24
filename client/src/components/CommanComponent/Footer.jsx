import React from 'react'

export default function Footer() {
    return (
        <footer>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 mb-2 mb-md-0 text-center text-md-left d-flex align-items-center justify-content-center justify-content-md-start">
                    Peerbits
                    <p className="m-0 ml-2"> © 2019</p>
                </div>
                <div className="col-md-6 text-md-right">
                    <ul className="list-inline m-0">
                        <li className="list-inline-item"><a href="#about-us">About Us</a></li>
                        <li className="list-inline-item"><a href="#contact-us">Contact Us</a></li>
                        <li className="list-inline-item"><a href="#help-support">Help & Support</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}
