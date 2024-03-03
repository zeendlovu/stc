import './navbar.scss'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
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
                    <a href="/insights/control-tower">Case Studies</a>
                    <a href="/insights/config">Use Cases</a>
                    <a href="/insights/systems-manager">Our Customers</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">About Us</button>
                <div class="dropdown-content">
                    <a href="/about/story">Our Story</a>
                    <a href="/about/management">Our Management</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Contact Us</button>
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