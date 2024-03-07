import './crm.scss'
import crm from '../../../static/images/crm.png'


function Crm(){
    return(
        <div className='crm'>
          <div className='crmContainer'>
                <div className='background'>
                <img src={crm} alt='cloud' width='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>CRM Services</h1>
                        <p>Deliver the best omnichannel customer service. At STC we offer one platform with 
                            everything you need to serve customers and grow your business.</p>
                    </div> 
                </div>

                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                            <h3>Experience the power of efficiency with Freshdesk</h3>
                                <p>Freshdesk is built to make customer engagement accessible to businesses of all sizes, so you can deliver an 
                                    effortless customer experience at scale without the cost and complexity of legacy software. It allows you to 
                                    engage customers across every touchpoint with a 360-degree view of the customer—across e-mail, phone, 
                                    chat, social media, and more. You can also automate and streamline complex workflows and answer 
                                    customer queries with no-code bots for faster resolutions and happier customers. Our aim is to make
                                     it easy for your customers to reach you!</p>
                        </div>
                    </div>
                </div>
                <div className='head'>
                    <h1>Products Features</h1>
                </div>

                <div className='head'>
                    <h2>Ticketing Made Easy</h2>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h3>Agent Collision Detection</h3>
                        <p>Ensure that multiple agents don’t wind up working on the same ticket by accident.</p>                
                    </div>

                    <div className='service'>
                            <h3>Ticket Field Suggest</h3>
                            <p>Automatically suggest ticket fields to categorize, prioritize and route incoming tickets.</p>
                                
                    </div> 

                    <div className='service'>
                            <h3>SLA Management</h3>
                            <p>Set deadlines for ticket response and resolution based on different business hours or categories.</p>         
                    </div> 

                    <div className='service'>
                            <h3>Thank you detector</h3>
                            <p>Prevent reopening of tickets when customers respond with a thank you</p>         
                    </div> 
                    <div className='service'>
                            <h3>Canned Responses</h3>
                            <p>Provide quick, consistent responses to common questions by creating pre-formatted replies.</p>         
                    </div> 
                </div>

                <div className='head'>
                    <h2>Collaboration</h2>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h3>Team Huddle</h3>
                        <p>Discuss specific parts of tickets with experts from across your company to figure out the best solutions.</p>                
                    </div>

                    <div className='service'>
                            <h3>Shared Ownership</h3>
                            <p>Share ownership of tickets with other teams without losing visibility into progress being made on the issue.</p>
                                
                    </div> 

                    <div className='service'>
                            <h3>Linked Tickets</h3>
                            <p>Link related tickets together to keep track of widespread issues and deliver consistent responses.</p>         
                    </div> 

                    <div className='service'>
                            <h3>Parent-child ticketing</h3>
                            <p>Resolve complex, multi-stage issues faster by splitting them into smaller child tickets.</p>         
                    </div> 

                </div>

                <div className='head'>
                    <h2>Omni Channel Communication</h2>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h3>Email</h3>
                        <p>Convert support emails into trackable tickets in your helpdesk that you can manage and resolve.</p>                
                    </div>

                    <div className='service'>
                            <h3>Phone</h3>
                            <p>Set up a fully functional call center and record and track calls by converting them into tickets.</p>
                                
                    </div> 

                    <div className='service'>
                            <h3>Phone</h3>
                            <p>Engage, support, and retain customers through live chat.</p>         
                    </div> 

                    <div className='service'>
                            <h3>Social Media</h3>
                            <p>Integrate your company’s Facebook page and Twitter handles and manage them from within the helpdesk.</p>         
                    </div> 
                    <div className='service'>
                            <h3>Website</h3>
                            <p>Let customers raise tickets from your website and display related knowledge base articles as they type.</p>         
                    </div> 
                    <div className='service'>
                            <h3>WhatsApp</h3>
                            <p>Engage your customers instantly through WhatsApp and resolve their queries faster.</p>         
                    </div> 
                </div>  

                <div className='head'>
                    <h2>Filed Service Management</h2>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h3>Service Tasks</h3>
                        <p>Create service tasks for tickets that need a field team response and track its status to completion.</p>                
                    </div>

                    <div className='service'>
                            <h3>Service Groups</h3>
                            <p>Create field technician groups based on location, priority and other factors to reduce waiting time and boost first-time fix rates.</p>
                                
                    </div> 

                    <div className='service'>
                            <h3>Scheduling Dashboard</h3>
                            <p>Drag and drop appointments, assign tasks and get a bird’s eye view of your field team workload.</p>         
                    </div> 

                    <div className='service'>
                            <h3>Mobile field service</h3>
                            <p>Enable field technicians to pick up service tasks, update information and resolve issues on the go.</p>         
                    </div> 
                    <div className='service'>
                            <h3>time tracking</h3>
                            <p>Automatically track time spent working in the field with the mobile app and log your billable hours.</p>         
                    </div> 
                </div>  

                <div className='head'>
                    <h2>Helpdesk Automation</h2>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h3>Ticket Dispatch</h3>
                        <p>Automatically assign tickets to agents and groups based on keywords, requester or properties.</p>                
                    </div>

                    <div className='service'>
                            <h3>Time-triggered dispatch</h3>
                            <p>Execute maintenance activities on tickets based on the time lapsed since an event happened.</p>
                                
                    </div> 

                    <div className='service'>
                            <h3>Intelligent Ticket Assignment</h3>
                            <p>Assign tickets to agents based on their current workload, skill or using the round robin method.</p>         
                    </div> 

                    <div className='service'>
                            <h3>Event-triggered automation</h3>
                            <p>Implement one or more actions on specific tickets as soon as an event happens.</p>         
                    </div> 
                    <div className='service'>
                            <h3>Automatic email notification</h3>
                            <p>Notify customers and agents automatically about the changes happening in their ticket.</p>         
                    </div> 
                    <div className='service'>
                            <h3>Omniroute</h3>
                            <p>Auto-assigns emails, chats and calls to your agents based on their available bandwidth to support customers faster.</p>         
                    </div> 
                </div>  

                <div className='head'>
                    <h2>Self Service Customer Portal</h2>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h3>Curated Reports</h3>
                        <p>Understand how different agents and groups are performing based on various helpdesk metrics.</p>                
                    </div>

                    <div className='service'>
                            <h3>Customer Satisfaction ratings</h3>
                            <p>Gauge how customers feel about your support using customer satisfaction reports.</p>
                                
                    </div> 

                    <div className='service'>
                            <h3>Dashboard</h3>
                            <p>Monitor your helpdesk using real-time data about tickets, trends and groups.</p>         
                    </div> 

                    <div className='service'>
                            <h3>Custom Reports</h3>
                            <p>Build reports from scratch and customize them to suit your requirements.</p>         
                    </div> 
                    <div className='service'>
                            <h3>Feedback Mechanism</h3>
                            <p>Writers will be notified automatically about feedback on their articles so they can implement them</p>         
                    </div> 
                    <div className='service'>
                            <h3>Automatically suggest solutions</h3>
                            <p>Allow relevant solutions to pop up for customers and save time for your agents and customers.</p>         
                    </div> 
                </div>

            </div>                 
        </div>
    )
}

export default Crm;