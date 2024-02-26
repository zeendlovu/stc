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
                    <a href="/#">AWS Migrations</a>
                    <a href="/#">SAP on AWS</a>
                    <a href="/#">Microsoft Licenses</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Communications</button>
                <div class="dropdown-content">
                    <a href="/#">Samsung PABX Systems</a>
                    <a href="/#">Unified Communications System</a>
                    <a href="/#">CRM Systems</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Security Solutions</button>
                <div class="dropdown-content">
                    <a href="/#">CCTV</a>
                    <a href="/#">Video Analytics (AI)</a>
                    <a href="/#">Alarm Systems</a>
                    <a href="/#">Access Control System</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">Insights</button>
                <div class="dropdown-content">
                    <a href="/#">Case Studies</a>
                    <a href="/#">Use Cases</a>
                    <a href="/#">Our Customers</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">About Us</button>
                <div class="dropdown-content">
                    <a href="/#">Our Story</a>
                    <a href="/#">Our Management</a>
                </div>
            </div>
            
                <a href="/#">Contact Us</a>
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