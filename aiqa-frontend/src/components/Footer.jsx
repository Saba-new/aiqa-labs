import React from 'react'
import { Row, Col, Image } from 'antd'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"
import rightArrow from "../assets/rightArrow.png"

function Footer() {
    return (
        <div className='footer-container'>
            <Row>
                <Col className='footer-class-1' xl={12} md={12} lg={12} xs={24} sm={24}>
                    <div style={{ fontSize: "18px" }}>Discover how our solutions and products
                        deliver exceptional value.</div>
                    <div style={{ margin: "10px 0px", textDecorationLine: "underline", fontSize: "18px", display: "inline-flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                        Work with us <img width={15} src={rightArrow} alt="Right arrow icon" />
                    </div>

                    <div className='footer-inner-class-1'>
                        ©2024 AIQA · Pastry policy · "Do we peek at you?" policy
                    </div>
                </Col>
                <Col className='footer-class-2' xl={12} md={12} lg={12} xs={24} sm={24}>
                    <div className='footer-inner'>
                        <div className="footer-column">
                            <Link to="/services">Services</Link>
                            <Link to="/industries">Industries</Link>
                            <Link to="/platform">Platform</Link>
                        </div>
                        <div className="footer-column">
                            <Link to="/about">About</Link>
                            <Link to="/careers">Careers</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="footer-column">
                            <a href="linkedin">LinkedIn</a>
                            <a href="facebook">Facebook</a>
                            <a href="instagram">Instagram</a>
                        </div>
                    </div>

                    <div className='footer-inner-class-2'>
                        <Image width={130} src={Logo} preview={false} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer

