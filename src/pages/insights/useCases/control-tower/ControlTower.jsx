import './controltower.scss'
import {caseStudies, headers, useCases} from './data.js'
import aws_use_case from '../../../../static/images/aws_use_case.png'
import controlTower from '../../../../static/images/control tower.png'

function ControlTower(){

const useCase = useCases.map(useCase => 
                <div className='header'>
                    <h1>{useCase.header}</h1>
                    <h3>{useCase.sub_header}</h3>
                    <p>{useCase.paragraph}</p>
                </div> )

const caseStudy = caseStudies.map(caseStudy => 
                    <div className='header'>
                        <h1>{caseStudy.header}</h1>
                        <h3>{caseStudy.sub_header}</h3>
                        <p>{caseStudy.paragraph}</p>
                    </div>)

const header = headers.map(header =>
    <div className='header'>
                        <h1>{header.header}</h1>
                        <p>{header.paragraph}</p>
                    </div>)

    return(
        <div className='controlTower'>
          <div className='controlTowerContainer'>
                <div className='background'>
                <img src={aws_use_case} alt='cloud' width='100%' />
                </div>
                <div className='heading-title'>
                <div className='title'>
                    <h1>AWS Control Tower</h1>
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
                        <img src={controlTower} alt='' width="60%" height="60%" />   
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

export default ControlTower;