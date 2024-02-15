import './footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className='left-mid'>
                    <h1 className='title'>Left Mid Container</h1>
                    <p className=''></p>
                </div>
                <div className='mid'>
                    <h1>Mid Container</h1>
                </div>
                <div className='right'>
                    <h1>Right Container</h1>
                </div>
            </div>
            <div className='bottomFooter'>
                <div className='copyright'>
                    <p>Standard Telephones and Cables | 2024</p>
                </div>
                
                <div className='icons'>
                    <h3>A</h3>
                    <h3>B</h3>
                    <h3>C</h3>
                </div>
            </div>           
        </div>
    );
}

export default Footer;