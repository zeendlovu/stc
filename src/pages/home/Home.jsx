import './home.scss'
import cloud_image from '../../static/images/cloud migration.jpg'
import security from '../../static/images/security.png'
import unified from '../../static/images/unified.jpg'
import cloud from '../../static/images/your cloud.jpg'
import videoAnalytics from '../../static/images/videoAnalytics.jpg'
import phoneSystem from '../../static/images/3CX-Logo.png'
import aws from '../../static/images/aws1.png'
import freshworks from '../../static/images/freshworks-800x450.png'

import { useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const KeepMountedModal = ({ isOpen, onClose, title, content, header1, header2, header3 }) => {
  return (
    <Modal
      keepMounted
      open={isOpen}
      onClose={onClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          <h3>{header1}</h3>
          {content}
        </Typography>
      </Box>
    </Modal>
  );
};

const Home = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  const handleModal1Open = () => setModal1Open(true);
  const handleModal1Close = () => setModal1Open(false);

  const handleModal2Open = () => setModal2Open(true);
  const handleModal2Close = () => setModal2Open(false);

  const handleModal3Open = () => setModal3Open(true);
  const handleModal3Close = () => setModal3Open(false);

  return(
      <div className='home'>
        <div className='homeContainer'>
          <div className='background'></div>

         
          <div className='heading-title'>
            <div className='title'>
              <p>Welcome to Standard Telephones and Cables, Zimbabwe's first advanced AWS Partner</p>
              <h1>Zimbabwe's cloud future</h1>
              <p className='message'>STC is a technology company dedicated to applying technology to reduce costs, 
              improve efficiencies and contribute towards value adding for its clients. Always chasing 
              technology, with over 50 years of existence behind it. STC boasts of experience in telecommunications, 
              including cloud-based enterprise telecommunication solutions, video conferencing, and 
              video analytics (AI), access control and monitoring systems</p>
            </div> 
          </div>

          <div className='services-header'>
            <h1>Your digital journey begins here:</h1>
          </div>
          <div className='services'>
            <div className='service'>
              <img src={cloud_image} alt='cloud' width='100%' height='70%' />
              <Button onClick={handleModal1Open}>Cloud Services</Button>
              <KeepMountedModal
              isOpen={modal1Open}
              onClose={handleModal1Close}
              title="Cloud Services"
              header1= "Migration"
              content="Content for Modal 1 goes here."
              />  
            </div>


            <div className='service'>
            <img src={unified} alt='cloud' width='100%' height='70%' />
            <Button onClick={handleModal2Open}>Communications</Button>
            <KeepMountedModal
            isOpen={modal2Open}
            onClose={handleModal2Close}
            title="Communications"
            content="Content for Modal 2 goes here."/>
            </div>

            <div className='service'>
            <img src={security} alt='cloud' width='100%' height='70%' />
            <Button onClick={handleModal3Open}>Security Services</Button>
          <KeepMountedModal
            isOpen={modal3Open}
            onClose={handleModal3Close}
            title="Security Services"
            content="Content for Modal 3 goes here."/>
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