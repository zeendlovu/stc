import './config.scss'
import {caseStudies, headers, useCases} from './data.js'

function Config(){

const useCase = useCases.map(useCase => 
                <div className='header'>
                    <h1>{useCase.header}</h1>
                    <h3>{useCase.sub_header}</h3>
                    <p>{useCase.paragraph}</p>
                </div> )

const caseStudy = caseStudies.map(caseStudy => 
                <div className='header'>
                    <div className='header'>
                        <h1>{caseStudy.header}</h1>
                        <h3>{caseStudy.sub_header}</h3>
                        <p>{caseStudy.paragraph}</p>
                    </div>
                </div> )

const header = headers.map(header =>
    <div className='header'>
                        <h1>{header.header}</h1>
                        <p>{header.paragraph}</p>
                    </div>)

    return(
        <div className='security'>
          <div className='securityContainer'>
                <div className='background'></div>
                <div className='heading-title'>
                <div className='title'>
                    <h1>AWS Config</h1>
                </div> 
                </div>

                <div className='services'>
                    {header}
                    
                    <div className='heading'>
                        <h1>Use Cases</h1>
                    </div>
                    {useCase}
                    
                    <div className='header'>
                        <h1>How Does It Work?</h1>
                        <img src='../../../public/images/config.png' alt='' width="500px" height="500" />   
                    </div>

                    <div className='heading'>
                        <h1>Case Studies - AWS Config</h1>
                    </div>
                    {caseStudy}
                </div>

            </div>                 
        </div>
    )
}

export default Config;