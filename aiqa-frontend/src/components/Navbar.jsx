import React, { useState, useEffect } from 'react';
import { Image, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from "../assets/logo.png";

function Header() {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className='header-bg'>
            <div className='header-inner' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
                <MenuOutlined style={{marginRight : 20}} className='mobile-only' onClick={toggleDrawer} />
                <Link to='/'><Image width={130} src={Logo} alt="Company Logo" preview={false} /></Link>
                <div className='header-links desktop-only'>
                    
                    <Link to='/platform' className="header-link">Platform</Link>
                    <Link to='/services' className="header-link">Services</Link>
                    <Link to='/industries' className="header-link">Industries</Link>
                    <Link to='/about' className="header-link">About</Link>
                </div>
            </div>

            <div className='desktop-only' style={{ textAlign: 'right', padding: '0 16px' }}>
                <button className='get-started-button-1' onClick={() => navigate("/contact")}>
                    Get Started
                </button>
            </div>
            <Drawer
                title="Menu"
                placement="left"
                onClose={toggleDrawer}
                open={drawerVisible}
            >
                <div className="drawer-links">
                    <Link to='/platform' onClick={toggleDrawer}>Platform</Link>
                    <Link to='/services' onClick={toggleDrawer}>Services</Link>
                    <Link to='/industries' onClick={toggleDrawer}>Industries</Link>
                    <Link to='/about' onClick={toggleDrawer}>About</Link>
                </div>
            </Drawer>
        </div>
    );
}

export default Header;
