import './home.scss'
import cloud_image from '../../static/images/cloud migration.jpg'
import security from '../../static/images/security.png'
import unified from '../../static/images/unified.jpg'
import cloud from '../../static/images/your cloud.jpg'
import videoAnalytics from '../../static/images/videoAnalytics.jpg'
import phoneSystem from '../../static/images/3CX-Logo.png'
import aws from '../../static/images/aws1.png'
import freshworks from '../../static/images/freshworks-800x450.png'


const Home = () => {
  return(
      <div className='home'>
        <div className='homeContainer'>
          <div className='background'></div>

         
          <div className='heading-title'>
            <div className='title'>
              <p>Welcome to Standard Telephones and Cables, Zimbabwe's first advanced AWS Partner</p>
            </div> 
          </div>

          {/*
          <div className='homepage-header'>
            <h1>Zimbabwe's cloud future</h1>
            <p>STC is a technology company dedicated to applying technology to reduce costs, 
              improve efficiencies and contribute towards value adding for its clients. Always chasing 
              technology, with over 50 years of existence behind it. STC boasts of experience in telecommunications, 
              including cloud-based enterprise telecommunication solutions, video conferencing, and 
              video analytics (AI), access control and monitoring systems</p>
          </div> */ }

          <div className='services-header'>
            <h1>Your cloud journey Begins here:</h1>
          </div>
          <div className='services'>
            <div className='service'>
              <img src={cloud_image} alt='cloud' width='100%' height='70%' />
              <h3>Cloud Services</h3>
            </div>
            <div className='service'>
            <img src={unified} alt='cloud' width='100%' height='70%' />
            <h3>Unified Communications</h3>
            </div>
            <div className='service'>
            <img src={security} alt='cloud' width='100%' height='70%' />
            <h3>Security Services</h3>
            </div>
          </div>

        <div className='content-element'>
          <div className='left'>
          <img src={ cloud } alt='cloud' width='100%' height='100%' />
          </div>
          <div className='right'>
            <h1>Your Cloud, Your Way</h1>
            <p>Whether your business is early in its journey or well on its way to digital transformation, our cloud solutions 
              and technologies help charter a path to success. Whether you’re migrating legacy or building new cloud-native 
              applications, reap the benefits of having STC manage your infrastructure. Our fully managed infrastructure frees 
              up your developers by eliminating cumbersome tasks. Strategic partnerships with leading open source-centric companies 
              in data management and analytics allow us to tightly integrate an array of services into the cloud, making it easy 
              for enterprise customers to build and use apps in the public cloud. Whether you need an extra hand or hands-on 
              support, our technology teams can help you plan, develop and launch the solutions that drive your most important
               business goals.</p>
          </div>
        </div>

            <div className='service-header'>
            <h1>Our Offerings</h1>
            </div>
        <div className='content-elements'>
          <div className='element'>
          <img src={aws} alt='cloud' width='100%' height='100%' />
          </div>
          <div className='element'>
            <img src={phoneSystem} alt='cloud' width='100%' height='100%' />
          </div>
          <div className='element'>
            <img src={videoAnalytics} alt='cloud' width='100%' height='100%' />
          </div>
          <div className='element'>
          <img src={freshworks} alt='cloud' width='100%' height='100%' />
          </div>
        </div>

        </div>   
                    
      </div>

  )
}

export default Home;