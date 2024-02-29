import './footer.scss'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className='left-mid'>
                    <h2 className='title'>Standard Telephones and Cables</h2>
                    <p className=''>STC is a technology company dedicated to applying technology to reduce costs, improve 
                    efficiencies and contribute towards value adding for its clients.</p>
                </div>
                <div className='mid'>
                    <h2>Our Services</h2>
                    <ul>
                        <li>Amazon Web Services (AWS)</li>
                        <li>3CX Unified Communications</li>
                        <li>Freshwork CRM</li>
                        <li>CCTV and Access Control</li>
                        <li>Video Analytics (AI)</li>
                    </ul>
                </div>
                <div className='right'>
                <h2>Office in Harare</h2>
                    <ul>
                        <li>714 Steven Drive Msasa, Harare</li>
                        <li>(+263) 8688-002-260</li>
                        <li>(+263) 242-486-781-5</li>
                        <li><a href="mailto:sales@stc.co.zw">sales@stc.co.zw</a></li>
                        <li><a href="mailto:sales@stc.co.zw">marketing@stc.co.zw</a></li>
                    </ul>
                </div>
            </div>
            <div className='bottomFooter'>
                <div className='copyright'>
                    <p>Copyright 2024, Standard Telephones and Cables. All rights reserved.</p>
                </div>
                
                <div className='icons'>
                    <h3><FontAwesomeIcon icon={faTwitter} /></h3>
                    <h3><FontAwesomeIcon icon={faFacebook} /></h3>
                    <h3><FontAwesomeIcon icon={faLinkedin} /></h3>
                </div>
            </div>           
        </div>
    );
}

export default Footer;