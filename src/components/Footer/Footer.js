import React from 'react';

const Footer = () => {
    return (

        <footer class="grey-background">
            <div class="container">
                <div class="wrapper-f">
                    <div class="adress1">
                        <div class="bottom-adress">
                            <p>Kyiv, Mechnikova str, 14/1</p>
                            <span
                            ><svg
                                class="hidding"
                                width="6"
                                height="7"
                                viewBox="0 0 6 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                    <circle cx="3" cy="3.5" r="3" fill="#B3B3BA" /></svg
                                ></span>

                            <p class="map-f">
                                <a
                                    class="map-link"
                                    href="https://maps.app.goo.gl/8STTPfeqi6zLXdyZ9"
                                    target="_blank"
                                >ON MAP</a
                                >
                            </p>
                        </div>
                    </div>
                    <div class="adress2">
                        <div class="bottom-mail">
                            <ul class="contacts">
                                <li>
                                    <a href="#"
                                    ><svg
                                        class="logo-fb"
                                        width="38"
                                        height="38"
                                        viewBox="0 0 38 38"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                            <g clip-path="url(#clip0_22721_6812)">
                                                <path
                                                    class="vector-blue"
                                                    d="M38 19.1161C38 8.55857 29.4934 0 19 0C8.50658 0 0 8.55857 0 19.1161C0 28.6575 6.94803 36.5659 16.0312 38V24.6419H11.207V19.1161H16.0312V14.9046C16.0312 10.1136 18.8678 7.46723 23.2078 7.46723C25.2866 7.46723 27.4609 7.84059 27.4609 7.84059V12.545H25.0651C22.7048 12.545 21.9688 14.0185 21.9688 15.5302V19.1161H27.2383L26.3959 24.6419H21.9688V38C31.052 36.5659 38 28.6575 38 19.1161Z"
                                                    fill="#24A3FF"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_22721_6812">
                                                    <rect width="38" height="38" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <li class="phone-link">
                                    <span
                                    ><svg
                                        class="hidding"
                                        width="6"
                                        height="7"
                                        viewBox="0 0 6 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                            <circle cx="3" cy="3.5" r="3" fill="#B3B3BA" /></svg
                                        ></span>
                                    <a class="phone" href="tel:0800211927">0800 211 927</a>
                                    <span
                                    ><svg
                                        class="hidding"
                                        width="6"
                                        height="7"
                                        viewBox="0 0 6 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                            <circle cx="3" cy="3.5" r="3" fill="#B3B3BA" /></svg
                                        ></span>
                                </li>
                                <li>
                                    <a class="mail-text" href="mailto:contact@forstudy.space"
                                    >contact@forstudy.space</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="adress3"><p>© 2021 HLEGAL Law company, LLC</p></div>
                </div>
            </div>
        </footer>

    );
}
export default Footer;