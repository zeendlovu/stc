import './systemsManager.scss'
import {caseStudies, headers, useCases} from './data.js'
import aws_use_case from '../../../../static/images/aws_use_case.png'
import sM from '../../../../static/images/sm-how-it-works.png'

function SystemsManager(){

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
        <div className='systemsManager'>
          <div className='systemsManagerContainer'>
                <div className='background'>
                <img src={aws_use_case} alt='cloud' width='100%' />
                </div>
                <div className='heading-title'>
                <div className='title'>
                    <h1>AWS Systems Manager</h1>
                </div> 
                </div>

                <div className='services'>
                    {header}
                    
                    <div className='heading'>
                        <h1>Use Cases</h1>
                    </div>
                    {useCase}
                    
                    <div className='header'>
                        <h2>How Does It Work?</h2>
                        <img src={sM} alt='' width="100%" height="100%" />   
                    </div>

                    <div className='heading'>
                        <h1>Case Studies - AWS Systems Manager</h1>
                    </div>
                    {caseStudy}
                </div>

            </div>                 
        </div>
    )
}

export default SystemsManager;