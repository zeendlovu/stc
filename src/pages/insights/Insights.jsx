import './insights.scss'

function Insights(){
    return(
        <div className='insights'>
          <div className='insightsContainer'>
                <div className='background'></div>
           
                <div className='heading-title'>
                <div className='title'>
                    <h1>Insights</h1>
                    <p>This is an insights paragraph</p>
                </div> 
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>CCTV</h1>
                    </div>

                    <div className='service'>
                        <h1>Access Control Systems</h1>
                    </div>

                    <div className='service'>
                        <h1>Video Analytics</h1>
                    </div>

                    <div className='service'>
                        <h1>Video Analytics</h1>
                    </div>
                
                </div>  
            </div>                 
        </div>
    )
}

export default Insights;