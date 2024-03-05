import './management.scss'
import about from '../../../static/images/about.jpg'

function Management(){
    return(
        <div className='management'>
          <div className='managementContainer'>
                <div className='background'>
                <img src={about} alt='cloud' width='100%' />
                </div>
           
                <div className='heading-title'>
                <div className='title'>
                    <h1>Our Team</h1>
                    <p>Meet the leadership team who are building Zimbabwe's digital future.</p>
                </div> 
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>Luke Ngwerume</h1>
                        <p>Chairman and Managing Director of STC</p>
                        <div className='overlay'>
                            <h1>Luke Ngwerume</h1>
                            <p>Chairman and Managing Director of STC</p>
                        </div>
                        
                    </div>

                    <div className='service'>
                            <h1>Dearlove Kasambira</h1>
                            <p>Business Development Partner</p>
                        <div className='overlay'>
                            <h1>Dearlove Kasambira</h1>
                            <p>Business Development Partner</p>
                        </div>
                    </div>

                    <div className='service'>
                            <h1>Clayden Mandeya</h1>
                            <p>Finance and Administration Manager</p>
                        <div className='overlay'>
                            <h1>Clayden Mandeya</h1>
                            <p>Finance and Administration Manager</p>
                        </div>
                    </div>

                    <div className='service'>
                        <h1>Ranga Nyamadzawo</h1>
                        <p>Senior Solutions Architect</p>
                    <div className='overlay'>
                        <h1>Ranga Nyamadzawo</h1>
                        <p>Senior Solutions Architect</p>
                    </div>
                </div>
                
                </div>  
            </div>                 
        </div>
    )
}

export default Management;