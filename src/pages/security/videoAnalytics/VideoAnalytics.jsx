import './videoAnalytics.scss'
import videoAnalytics from '../../../static/images/videoAnalytics1.jpg'

function VideoAnalytics(){
    return(
        <div className='videoAnalytics'>
          <div className='videoContainer'>
                <div className='background'>
                <img src={videoAnalytics} alt='cloud' width='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>Video Analytics (AI)</h1>
                        <p>We believe the future of security should be designed around you. Our aim is to deliver 
                            leading solutions that you can trust, that add value and that are quick and easy to use and install.</p>
                    </div> 
                </div>

                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                            <h3>Video Analytics at the edge</h3>
                                <p>Video Analytics (AI) is an important enabler of any strategy to substantially improve levels of security, as well as offering
                                     clear business advantages beyond security. It acts as the ‘brains’ of a security system, using metadata to add sense and
                                      structure to captured video footage. It makes it possible to make smarter business decisions, reduce costs and increase 
                                      efficiency with a return on investment that can be measured through tangible business results. With Video Analytics, 
                                      our focus is always on making video surveillance more relevant to you. So our solutions also come with a range of advanced
                                       features</p>
                        </div>
                    </div>
                </div>
                <div className='head'>
                    <h1>AxxonNext Video Analytics Features</h1>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>People Counting</h1>
                        <p>People Counting enables operator to view in real-time the number of people entering and existing an
                             establishment. It also makes it possible to create heat map of the premises, which indicates the most 
                             foot trafficked sections.</p>                
                    </div>

                    <div className='service'>
                    <h1>Face Recognition</h1>
                            <p>This is a software module that automatically detects and captures the image of an individual and runs it through the database. 
                                It can analyze age, gender, race amongst other features of an individual and access is either granted or denied automatically. 
                                It is well suited for public spaces, infrastructure sites with critical access control needs, retail outlets and gambling 
                                establishments.</p> 
                    </div>

                    <div className='service'>
                    <h1>License Plate Recognition</h1>
                            <p>The system reads and stores license plates of passing vehicles into the VMS database for investigative 
                                use, data analysis, mapping, access control and sharing with various agencies.</p>
                    </div>         

                    <div className='service'>
                            <h1>Social Distancing</h1>
                            <p>Various situations may require the application of social distancing measures. Keeping a minimum distance is especially 
                                important to prevent COVID-19, keeping space between you and others is one of the best tools we have to avoid being exposed 
                                to this virus.Measures in places such as customs, supermarkets, shopping malls, passport control checkpoints, police stations 
                                etc. When a permissible distance is being violated, the AxxonSoft AI-powered Social Distancing Detection tool sends an alarm 
                                to the operator, ensuring they won’t miss issues that require immediate attention.</p>
                            
                    </div>
                    <div className='service'>
                        <h1>Object Tracker</h1>
                            <p>This is an embedded video analytic optimized for detecting and monitoring the movement of vehicles, people and unattended objects 
                                in different environments. Axxon Next analytics can be used in tracking an object or individuals in a video by getting the 
                                coordinates of the object present in each frame. The Axxon Next object tracker runs on most IP cameras and triggers an 
                                alarm when an object has been left unattended for a long period.</p>
                    </div> 
                    <div className='service'>
                           <h1>Queue Length Analysis</h1> 
                           <p>By applying artificial intelligence video analytics, Axxon can detect people standing in front of the camera, and provide 
                            the precise location of each person with an accuracy of 5-10 cm. If you need to analyze the line at the security checkpoint 
                            inside an airport, or if you need to monitor the queue at the cashier of a grocery store, you just have to install cameras 
                            in that space. Almost any CCTV camera can work, as long as the quality of the images is good enough and the video can be 
                            accessed by the server where Axxon can run.</p>
                    </div>
                    <div className='service'>
                           <h1>Motion Detection</h1> 
                           <p>This is the capability of the surveillance system to detect motion and capture the events. Motion detection is usually a 
                            software-based monitoring algorithm which, when it detects motions will signal the surveillance camera to begin capturing 
                            the event. Also called activity detection. An advanced motion detection surveillance system can analyze the type of motion 
                            to see if it warrants an alarm.</p>
                    </div>               
                    <div className='service'>
                           <h1>Loitering</h1> 
                           <p>Axxon Next loitering detection tracks moving objects such as people and vehicles, and triggers an alarm if they have been in 
                            a predefined area for too long. The video-based application, which runs on a network camera, can help prevent crime such as 
                            vandalism and break-ins. The application is ideal for low-traffic areas and after business hours on semi-public properties such 
                            as office parking lots and schoolyards, as well as near fences. It relies on time-based triggers, so you get far fewer unwarranted
                             alarms than with other, more conventional applications.</p>
                    </div>  
                    <div className='service'>
                           <h1>Fire Detection</h1> 
                           <p>Unlike many detection technologies, video analytics do not need to make physical contact with smoke or dust. They immediately 
                            ‘see’ the danger when and where it originates. That’s why it’s so fast and reliable. Axxon Next video analytics make i
                            t possible to detect smoke and other dangers in critical environments in a very early stage.</p>
                    </div>  
                </div>  
            </div>                 
        </div>
    )
}

export default VideoAnalytics;