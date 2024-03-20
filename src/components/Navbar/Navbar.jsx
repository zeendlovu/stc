import './navbar.scss'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../static/images/logo.jpg'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <h3><a href='/'>
            <img src={logo} alt='cloud' width='25%' />
            </a></h3>
			<nav ref={navRef}>
            <div class="dropdown">
                <button class="dropbtn">Cloud Services</button>
                <div class="dropdown-content">
                    <a href="/cloud/migration">AWS Migrations</a>
                    <a href="/cloud/sap">SAP on AWS</a>
                    <a href="/cloud/microsoft">Microsoft Licenses</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Communications</button>
                <div class="dropdown-content">
                    <a href="/communications/samsung">Samsung PABX Systems</a>
                    <a href="/communications/unified-comms">Unified Communications System</a>
                    <a href="/communications/crm">CRM Systems</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Security Solutions</button>
                <div class="dropdown-content">
                    <a href="/security/cctv">CCTV</a>
                    <a href="/security/video-analytics">Video Analytics (AI)</a>
                    <a href="/security/access-control">Access Control System</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Insights</button>
                <div class="dropdown-content">
                    <h4 style={{ color: "#232443", padding: '0px 15px' }}>Use Cases</h4>
                    <a href="/insights/control-tower">AWS Control Tower</a>
                    <a href="/insights/config">AWS Config</a>
                    <a href="/insights/systems-manager">AWS Systems Manager</a>
                    <h4 style={{ color: "#232443", padding: '0px 15px' }}>Case Studies</h4>
                    <a href="/insights/gain">Gain Cash and Carry</a>
                    <a href="/insights/simbisa">Simbisa</a>
                    <a href="/insights/profeeds">Profeeds</a>
                    <a href="/insights/tvsh">TV Sales and Home</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">About Us</button>
                <div class="dropdown-content">
                    <a href="/about/our-story">Our Story</a>
                    <a href="/about/our-management">Our Management</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                <a href="/contact-us">Contact Us</a>
                    </button>
            </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;