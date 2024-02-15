import './home.scss'

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

          <div className='services-header'></div>
          <div className='services'>
            <div className='service'>

            </div>
            <div className='service'>

            </div>
            <div className='service'>

            </div>
          </div>

        <div className='content-element'>
          <div className='left'>

          </div>
          <div className='right'>

          </div>
        </div>

        <div className='content-elements'>
          <div className='element'>
            <h2>AWS</h2>
          </div>
          <div className='element'>
            <h2>3CX</h2>
          </div>
          <div className='element'>
            <h2>Video Analytics</h2>
          </div>
          <div className='element'>
            <h2>Freshworks CRM</h2>
          </div>
        </div>

        </div>   
                    
      </div>

  )
}

export default Home;