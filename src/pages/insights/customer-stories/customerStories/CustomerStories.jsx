import './customerStories.scss'


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
    width: '50%',
    height: '50%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const KeepMountedModal = ({ isOpen, onClose, title, content, header1}) => {


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

function CustomerStories(){
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [modal3Open, setModal3Open] = useState(false);
    const [modal4Open, setModal4Open] = useState(false);

    const handleModal1Open = () => setModal1Open(true);
    const handleModal1Close = () => setModal1Open(false);

    const handleModal2Open = () => setModal2Open(true);
    const handleModal2Close = () => setModal2Open(false);

    const handleModal3Open = () => setModal3Open(true);
    const handleModal3Close = () => setModal3Open(false);

    const handleModal4Open = () => setModal4Open(true);
    const handleModal4Close = () => setModal4Open(false);


    return(
        <div className='management'>
          <div className='managementContainer'>
                <div className='background'>
                </div>
           
                <div className='heading-title'>
                <div className='title'>
                    <h1>Customer Stories</h1>
                    <p>Learn how our services are helping customers</p>
                </div> 
                </div>

                <div className='services'>
                        <KeepMountedModal
                        isOpen={modal1Open}
                        onClose={handleModal1Close}
                        title="LUKE NGWERUME"
                        header1= "Chairman and Managing Director of STC"
                        content="Luke Ngwerume is a graduate of MBA from the University of Cape Town Business School. He is a retired CEO of Old Mutual, which is the largest integrated financial services group in Zimbabwe. He has an investment background and is an experienced business leader in Zimbabwe. Currently, he serves as the Chairman and Managing Director of STC since October 2012. Additionally, he is an Independent Non-Executive Chairman on the Axia Board and its subsidiaries."
                        />
                        <Button onClick={handleModal1Open}>
                        <div className='service'>
                        <h1>Luke Ngwerume</h1>
                        <p>Chairman and Managing Director of STC</p>
                        
                        <div className='overlay'>
                            <h1>Luke Ngwerume</h1>
                            <p>Chairman and Managing Director of STC</p>
                        </div>
                        
                    </div>
                        </Button>
                    
                        <KeepMountedModal
                        isOpen={modal2Open}
                        onClose={handleModal2Close}
                        title="DEARLOVE KASAMBIRA"
                        header1="Business Development Partner"
                        content= "Dearlove Kasambira holds a Master's degree in Business Administration from the University of Zimbabwe, a Bachelor's degree in Systems Engineering from Texila American University, as well as a Diploma in Management for Executives and a Diploma in Applied Information Technology from UZ. In addition, he also holds AWS Cloud Practitioner Certification, Solutions Architect Associate Certification, and Solutions Architect Professional Certification. Currently, he serves as the Business Development Partner at STC and has more than 15 years of work experience."
                        />

                        <Button onClick={handleModal2Open}>
                            <div className='service'>
                                <h1>Dearlove Kasambira</h1>
                                <p>Business Development Partner</p>
                                <div className='overlay'>
                                    <h1>Dearlove Kasambira</h1>
                                    <p>Business Development Partner</p>
                                </div>
                            </div>
                        </Button>
                    
                        <KeepMountedModal
                            isOpen={modal3Open}
                            onClose={handleModal3Close}
                            title="CLAYDEN MANDEYA"
                            header1="Finance and Administration Manager"
                            content= "Clayden Mandeya holds a Chartered Institute of Secretaries and Administrators (CIS) certification. In addition, he has AWS certificates in Cloud Practitioner Essentials, Business Professional, Foundation, Cost Management, and Cloud Economics. He has over 32 years of work experience and currently serves as the Finance and Administration Manager at STC."
                        />

                        <Button onClick={handleModal3Open}>
                        <div className='service'>
                            <h1>Clayden Mandeya</h1>
                            <p>Finance and Administration Manager</p>
                            <div className='overlay'>
                                <h1>Clayden Mandeya</h1>
                                <p>Finance and Administration Manager</p>
                            </div>
                        </div>
                        </Button>
                    
                        <KeepMountedModal
                            isOpen={modal4Open}
                            onClose={handleModal4Close}
                            title="RANGA NYAMADZAWO"
                            header1="Senior Solutions Architect"
                            content= "Ranga Nyamadzawo is a highly qualified individual with an MSC in Computer Science from the University of East London (UK), as well as a Bachelor of Science Honours degree in Computer Science from NUST. He has also earned several certifications, including AWS Cloud Practitioner Certification, Solutions Architect Associate Certification, Developer Associate Certification, CYSOPS Associate Certification, DEVOPS Professional Certification, and Solutions Architect Professional Certification. Ranga is currently working as the Chief Technology Officer at STC, and has 6 years of experience in the field.."
                        />
                        <Button onClick={handleModal4Open}>
                            <div className='service'>
                                <h1>Ranga Nyamadzawo</h1>
                                <p>Senior Solutions Architect</p>
                                <div className='overlay'>
                                    <h1>Ranga Nyamadzawo</h1>
                                    <p>Senior Solutions Architect</p>
                                </div>
                            </div>
                        </Button>
                    
                
                </div>  
            </div>                 
        </div>
    )
}

export default CustomerStories;