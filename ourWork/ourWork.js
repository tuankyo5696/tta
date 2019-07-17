import React,{useState} from 'react'
import './_ourWork.scss'

const ourWork = props => {
    const [activeCarousel, setActive] = useState('');
    const [activeConferences, setClassConferences] = useState('active')
    const [activeProductLaunchers, setClassProductLaunchers] = useState('')
    const [activeIncentives, setClassIncentives] = useState('');
    const [activeHealthCare, setClassHealthCare] = useState('');
    const [activeCongresses, setClassCongresses] = useState('');
    const [activeCommunication, setClassCommunication] = useState('');
    const [activeCelebrations, setClassCelebrations] = useState('');
    const [activeTraining, setClassTraining] = useState('');

    const showConferences = () => {
        setActive(
            <div className="carosuel-item" >
            <div>
                <h2>Conferences</h2>
                <p>
                    Whether your audience comprises dozens of doctors, 
                        hundreds of vloggers or thousands of sales executives, 
                        we bring nearly 30 years of know-how to executing complex, 
                        multi-agency programmes and creating a smooth and successful
                         delegate experience.
                </p>
            </div>
        </div>
        )
        setClassConferences('active')
        setClassProductLaunchers('');
        setClassIncentives('');
        setClassHealthCare('');
        setClassCommunication('');
        setClassCelebrations('');
        setClassCongresses('');
        setClassTraining('');
    }

    const showProductLanchers = () => {
        setActive(
            <div className="carosuel-item" >
            <div>
                <h2>Product Launches</h2>
                <p>
					When you bring the next big thing to market, brand impact, visibility and education are all part of the mix. Whatever format your product launch – roadshow, pop-up shop, conference or party – we’ll ensure it informs and inspires your audience, and brings your message to life.
                </p>
            </div>
        </div>
        )
        setClassConferences('')
        setClassProductLaunchers('active');
        setClassIncentives('');
        setClassHealthCare('');
        setClassCommunication('');
        setClassCelebrations('');
        setClassCongresses('');
        setClassTraining('');
    }
    const showIncentives = () => {
        setActive(
            <div className="carosuel-item" >
            <div>
                <h2>Incentives</h2>
                <p>
                Whether you’re looking for a ‘money can’t buy’ experience to recognise your top performers, or a team bonding event in a far-flung destination, we’ll devise and deliver a branded incentive programme to take every guest on a thrilling, rewarding and unforgettable journey.
                </p>
            </div>
            </div>
        )
        setClassConferences('')
        setClassProductLaunchers('');
        setClassIncentives('active');
        setClassHealthCare('');
        setClassCommunication('');
        setClassCelebrations('');
        setClassCongresses('');
        setClassTraining('');
    }
    const showHealthCare = () => {
        setActive(
            <div className="carosuel-item" >
            <div>
                <h2>Healthcare Events</h2>
                <p>
                The ability to meet the exacting demands of the healthcare and pharmaceutical industries is in our DNA. So whether we’re orchestrating an investigator event, advisory board or international congresses, you’re assured of compliance and confidentiality as well as quality.
                </p>
            </div>
            </div>
        )
        setClassConferences('')
        setClassProductLaunchers('');
        setClassIncentives('');
        setClassHealthCare('active');
        setClassCommunication('');
        setClassCelebrations('');
        setClassCongresses('');
        setClassTraining('');
    }
    const showCommunication = () => {
        setActive(
            <div className="carosuel-item" >
            <div>
                <h2>Brand Engagement and Communications</h2>
                <p>
                    Your event is one element of the wider communications mix, so as well as creating an amazing live experience that delivers on your brand objectives, we’ll also support effective customer communications before, during and after the event. We’ll ensure you get maximum participant engagement and a strong foundation for future campaigns. 
                </p>
            </div>
            </div>
        )
        setClassConferences('')
        setClassProductLaunchers('');
        setClassIncentives('');
        setClassHealthCare('');
        setClassCommunication('active');
        setClassCelebrations('');
        setClassCongresses('');
        setClassTraining('');
    }    

    const showCelebrations = () => {
        setActive(
            <div className="carosuel-item" >
            <div>
                <h2>Healthcare Events</h2>
                <p>
                The ability to meet the exacting demands of the healthcare and pharmaceutical industries is in our DNA. So whether we’re orchestrating an investigator event, advisory board or international congresses, you’re assured of compliance and confidentiality as well as quality.
                </p>
            </div>
            </div>
        )
        setClassConferences('')
        setClassProductLaunchers('');
        setClassIncentives('');
        setClassHealthCare('');
        setClassCommunication('');
        setClassCelebrations('active');
        setClassCongresses('');
        setClassTraining('');
    }
    const showCongresses = () => {
        setActive(
            <div className="carosuel-item" >
            <div>
                <h2>Congresses and Trade Shows</h2>
                <p>
                Organising all the moving pieces of a multifaceted congress programme involves working with numerous stakeholders to tight deadlines. Our unmatched experience and logistical proficiency will ensure your complex programme runs with deceptive simplicity.
                </p>
            </div>
            </div>
        )
        setClassConferences('')
        setClassProductLaunchers('');
        setClassIncentives('');
        setClassHealthCare('');
        setClassCommunication('');
        setClassCelebrations('');
        setClassCongresses('active');
        setClassTraining('');
    }
    const showTraining = () => {
        setActive(
            <div className="carosuel-item" >
            <div>
                <h2>Training and Change Management</h2>
                <p>
				Whether you’re sharing good news, thanking loyal customers or highlighting a worthy cause, we’ll work as an extension of your own team to make all your guests feel like VIPs.  We create dynamic events and activities that will assure every guest a spectacular journey, and leave them brimming with positive brand associations long after the day itself.
                </p>
            </div>
            </div>
        )
        setClassConferences('')
        setClassProductLaunchers('');
        setClassIncentives('');
        setClassHealthCare('');
        setClassCommunication('');
        setClassCelebrations('');
        setClassCongresses('');
        setClassTraining('active');
    }
    return (
        <div className="container-fluid body">
    <div className="row" >
      <div id="introText" className="col-sm-12 col-md-8 Padding">
        <h1> Our <strong>work</strong></h1>
        <p>
        TTA’s origins lie in specialist event management for healthcare and pharmaceutical clients. Today, our skills, talents and three decades of experience are relied upon by all manner of national and global corporates, associations and non-profits. But the hallmarks of success are universal: to create profound impact for you, your organisation and your participants through human connection. 
        <br />
          <br />
        While we’re happy to deliver one-off events, our success has been built on forging long-term, rewarding partnerships with our clients. And once you’ve enjoyed the TTA experience first-hand, we’re confident you’ll join them. 
        </p>
        <i className="fal fa-podium"></i>
      </div>
            <div id="introPic" className="col-sm-12 col-md-4"></div>
       
        </div>
        <hr className = "shadow1"></hr>
        <div id="eventTypeWrapper" className="row" >
            <div className="col-sm-12" id="eventTypes">
                <div className="container-fluid">
                    <div className="row">
                        <div id="eventType0" className={`event col-12 col-sm-6 col-lg-3 ${activeConferences}`} onClick = {showConferences}>
                            <i className="fal fa-podium"></i>
                            <p>Conferences</p>
                        </div>
                        <div id="eventType1" className={`event col-12 col-sm-6 col-lg-3 ${activeProductLaunchers}`} onClick = {showProductLanchers}>
                            <i className="fal fa-rocket"></i>
                            <p>Product Launches</p>
                        </div>
                        <div id="eventType2" className={`event col-12 col-sm-6 col-lg-3 ${activeIncentives}`} onClick={showIncentives}>
                            <i className="fal fa-trophy"></i>
                            <p>Incentive</p>
                        </div>
                        <div id="eventType3" className={`event col-12 col-sm-6 col-lg-3 ${activeHealthCare}`}onClick={showHealthCare}>
                            <i className="fal fa-heartbeat"></i>
                            <p>Healthcare Events</p>
                        </div>
                        <div id="eventType4" className={`event col-12 col-sm-6 col-lg-3 ${activeCongresses}`} onClick={showCongresses}>
                            <i className="fas fa-users-class"></i>
                            <p>Congresses and Trade Shows</p>
                        </div>
                        <div id="eventType5" className={`event col-12 col-sm-6 col-lg-3 ${activeCommunication}`} onClick ={showCommunication}>
                            <i className="fal fa-comments-alt"></i>
                            <p>Brand Engagement and Communications</p>
                        </div>
                        <div id="eventType6" className={`event col-12 col-sm-6 col-lg-3 ${activeCelebrations}`} onClick ={showCelebrations}>
                            <i className="fas fa-glass-cheers"></i>
                            <p>Celebrations and Hospitality</p>
                        </div>
                        <div id="eventType7" className={`event col-12 col-sm-6 col-lg-3 ${activeTraining}`} onClick ={showTraining}>
                            <i className="fas fa-cogs"></i>
                            <p>Training and Change Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="eventDescriptionsWrapper" className="row">
            <div className="col-sm-12 Padding">
                <div id="eventDescriptions" className="carosuel slide">
                    <div className="carosuel-inner">
                        {activeCarousel}
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>

   
    )
}
    

export default ourWork;