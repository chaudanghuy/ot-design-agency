
import React, { Component } from "react";
import Logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider } from '@coreui/react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FRONTEND_URL = process.env.REACT_APP_FRONT;

const Header = (props) => {

    let navigate = useNavigate();

    const { isLoggedIn, setIsLoggedIn, name, setName, email, setEmail } = props;

    const handleLogout = () => {
        setIsLoggedIn(false);
        setName(null);
        setEmail(null);
        navigate('/');
        toast.success('You have successfully logged out.');
    }

    return (
        <div id="header_wrapper">
            <div id="header">
                <div id="navigator" className="main clearfix">
                    <input type="checkbox" id="navTrigger" />
                    <div id="logo">
                        <a href={FRONTEND_URL}>
                            <img className="logo-1" src={Logo} alt="Logo" />
                        </a>
                    </div>
                    <div id="menu">
                        <ul className="clearfix">
                            {" "}
                            <li>
                                <a href="/" className="">
                                    <span data-hover="trang chủ">home</span>
                                </a>
                            </li>
                            <CDropdown dark as="li" variant="nav-item">
                                <CDropdownToggle color="dark">
                                    <span data-hover="dự án">project</span>
                                </CDropdownToggle>
                                <CDropdownMenu className="clearfix">
                                    <CDropdownItem href="/project/completed">
                                        <span data-hover="đã hoàn thành">completed</span>
                                    </CDropdownItem>
                                    <CDropdownItem href="/project/coming-soon">
                                        <span data-hover="đang triển khai">coming soon</span>
                                    </CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                            <li>
                                <a href="/about-us" className="">
                                    <span data-hover="giới thiệu">about us</span>
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="">
                                    <span data-hover="liên hệ">contact</span>
                                </a>
                            </li>
                            {isLoggedIn && (
                                <CDropdown dark as="li" variant="nav-item">
                                    <CDropdownToggle color="dark">
                                        <span data-hover="admin">Admin</span>
                                    </CDropdownToggle>
                                    <CDropdownMenu className="clearfix">
                                        <CDropdownItem href="/admin/posts">
                                            <span data-hover="bài viết">Article</span>
                                        </CDropdownItem>
                                        <CDropdownItem href="/admin/pages">
                                            <span data-hover="trang">Pages</span>
                                        </CDropdownItem>
                                        <CDropdownItem href="/admin/contacts">
                                            <span data-hover="Tin nhắn">Contacts</span>
                                        </CDropdownItem>
                                        <CDropdownItem href="/admin/settings">
                                            <span data-hover="Cài đặt">Settings</span>
                                        </CDropdownItem>
                                        <CDropdownItem href="/admin/seo">
                                            <span data-hover="SEO">SEO</span>
                                        </CDropdownItem>
                                        <CDropdownItem onClick={handleLogout}>
                                            <span data-hover="Thoát">Logout</span>
                                        </CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            )}
                        </ul>
                        <ul className="socials">
                            <li>
                                <a
                                    href="https://www.facebook.com/w2dstudio/"
                                    target="_blank"
                                    rel="nofollow noopenner"
                                >
                                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/w2dstudio/"
                                    target="_blank"
                                    rel="nofollow noopenner"
                                >
                                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="mobile_menu">
                        <label htmlFor="navTrigger" className="hamburger" />
                        <ul className="clearfix">
                            {" "}
                            <li>
                                <a href="" className="">
                                    <span data-hover="trang chủ">home</span>
                                </a>
                            </li>
                            <li>
                                <a href="./project-3" className="unclickable more">
                                    <span data-hover="dự án">project</span>
                                </a>
                                <ul className="clearfix">
                                    {" "}
                                    <li>
                                        <a href="./completed-4" className="">
                                            <span data-hover="đã hoàn thành">completed</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./coming-soon-5" className="">
                                            <span data-hover="đang triển khai">coming soon</span>
                                        </a>
                                    </li>
                                </ul>{" "}
                            </li>
                            <li>
                                <a href="./about-us-6" className="">
                                    <span data-hover="giới thiệu">about us</span>
                                </a>
                            </li>
                            <li>
                                <a href="./contact-7" className="">
                                    <span data-hover="liên hệ">contact</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="socials">
                            <li>
                                <a
                                    href="https://www.facebook.com/w2dstudio/"
                                    target="_blank"
                                    rel="nofollow noopenner"
                                >
                                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/w2dstudio/"
                                    target="_blank"
                                    rel="nofollow noopenner"
                                >
                                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;