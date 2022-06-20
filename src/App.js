import ContactMe from "./components/contact_me/ContactMe";
import TalkButton from "./components/Buttons/TalkButton";
import MainBack from "./assets/imgs/mainback.png"
import UpPrint from "./assets/imgs/up-print.png";
import Frame from "./assets/imgs/Frame.png";
import Bar from "./assets/imgs/bar.png";
import StrategrySvg from "./assets/imgs/strategy.svg";
import AuditSvg from "./assets/imgs/audit.svg";
import ResearchSvg from "./assets/imgs/research.svg";
import ActivationSvg from "./assets/imgs/activation.svg";
import DesignSvg from "./assets/imgs/design.svg";
import DevSvg from "./assets/imgs/dev.svg";
import ProductSvg from "./assets/imgs/product.svg";
import RetentionSvg from "./assets/imgs/retention.svg";
import ViralitySvg from "./assets/imgs/virality.svg";
import MobileAppPng from "./assets/imgs/mobile.png";
import ZenlyPng from "./assets/imgs/zenly.png";
import GrowthPng from "./assets/imgs/growth.png";
import FaceBookSvg from "./assets/imgs/facebook.svg";
import TwitterSvg from "./assets/imgs/twitter.svg";
import LinkedinSvg from "./assets/imgs/linkedin.svg";
import MediumSvg from "./assets/imgs/medium.svg";
import './App.css';
import WOW from 'wowjs';
import { useEffect, useState } from "react";

function App() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [isContactMeScreen, setIsContactMeScreen] = useState(true);

  const openModal = () => {
    setIsContactMeScreen(true);
  }

  const closeModal = () => {
    setIsContactMeScreen(false);
  }

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  const handleChange = (e) => {
    setError(false);
    setEmail(e.target.value);
  }

  const subscribe = () => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || !re.test(email)) {
      setError(true);
      return;
    }
    //Send Email to Server====================
  }
  return (
    <div className="App">
      <div className="container-fluid main-container">
        
          <>
            <div className="page-background">
              <img 
                src={MainBack}
                className="mainback"
              />
              <img 
                src={UpPrint}
                className="upprintback"
              />
              <img 
                src={Frame}
                className="frameback"
              />
            </div>
            <div className="page-container">
              <div className="head-screen">
                <h1 className="head-title wow bounceInLeft">
                  Scale better, faster,
                </h1>
                <h1 className="head-title wow bounceInLeft">
                  str
                  <span className="o-letter"></span>
                  nger
                </h1>
                <h5 className="description wow bounceInRight" data-wow-delay="0.3s">Hire the best produc t desiners in no time</h5>
                <div className="button-block">
                  <div className="downloadButtons mx-auto wow bounce" data-wow-delay="2s">
                    <TalkButton
                      text="LET'S TALK"
                    />
                  </div>
                </div>
              </div>
              <div className="page-block">
                <div className="head-description wow bounceInRight" data-wow-delay="0.5s">
                  <h5 className="main-description">
                    Fast-growing startups often face the need for staff augmentation to help
                    them accelerate on product iteration.
                  </h5>
                  <p className="sub-description">
                    Mozza enables them to extend their design department with remote teams of senior product manageers, designers and user researchers coming from the best companies.
                  </p>
                </div>
              </div>
            </div>
            <div className="bar-group">
              <img
                src={Bar}
                className="bar1"
              />
            </div>
            <div className="page-container">
              <section className="approach-section">
                <div className="row">
                  <div className="col-lg-8 col-md-12 mb-4">
                    <div className="block-title">
                      <h4>Approach</h4>
                      <p>Our fresh eyes combined with our senior expertise enable us to deliver value within a few days.</p>
                      <p>We can offer insights on product strategy, help design new features or tackle ad-hoc design projects that require hight quality execution. The process is gighly involved and requires deep collaboration on both sides.</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="approach-content">
                <div className="row">
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div className="tile-wrap wow bounceInDown">
                      <div className="tile tile-left-top">
                        <img src={StrategrySvg}/>
                        <p className="t-title">Strategry & Ideation</p>
                        <p className="t-content">Help you define the right vision for your product</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="tile-wrap wow bounceInDown">
                      <div className="tile">
                        <img src={AuditSvg}/>
                        <p className="t-title">Strategry & Ideation</p>
                        <p className="t-content">Help you define the right vision for your product</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="tile-wrap wow bounceInDown">
                      <div className="tile tile-top-right">
                        <img src={ResearchSvg}/>
                        <p className="t-title">Strategry & Ideation</p>
                        <p className="t-content">Help you define the right vision for your product</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div className="tile-wrap wow bounceInLeft">
                      <div className="tile">
                        <img src={ActivationSvg}/>
                        <p className="t-title">Activation sprint</p>
                        <p className="t-content">Optimize onboarding flows.</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="tile-wrap wow fadeIn">
                      <div className="tile">
                        <img src={ViralitySvg}/>
                        <p className="t-title">Virality sprint</p>
                        <p className="t-content">Implement viral loops to boost your grouwth.</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="tile-wrap wow bounceInRight">
                      <div className="tile">
                        <img src={RetentionSvg}/>
                        <p className="t-title">Retention analysis</p>
                        <p className="t-content">Identify features that make them stay.</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div className="tile-wrap wow bounceInUp">
                      <div className="tile tile-bottom-left">
                        <img src={DesignSvg}/>
                        <p className="t-title">UX & UI design</p>
                        <p className="t-content">Engaging user flows and appealing branding.</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="tile-wrap wow bounceInUp">
                      <div className="tile">
                        <img src={ProductSvg}/>
                        <p className="t-title">Product specifications</p>
                        <p className="t-content">to ensure a quick & proper implementation.</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="tile-wrap wow bounceInUp">
                      <div className="tile tile-bottom-right">
                        <img src={DevSvg}/>
                        <p className="t-title">Handover to dev team</p>
                        <p className="t-content">for a smooth development phase.</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="famous-section">
                <div className="row">
                  <div className="col-lg-8 col-md-8 mb-4">
                    <div className="block-title">
                      <h4>The recipes that made us famous</h4>
                    </div>
                  </div>
                </div>
              </section>
              <section className="famous-content">
                <div className="row">
                  <div className="col-lg-4 col-md-12 mb-4 wow bounceIn">
                    <img src={MobileAppPng}/>
                    <div className="divider"></div>
                    <h4 className="famous-title">How to Survive in the Mindful Era.</h4>
                    <p className="famous-content-text">6 methods to make sure that time is well spent inside your app.</p>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4 wow bounceIn"  data-wow-delay=".3s">
                    <img src={ZenlyPng}/>
                    <div className="divider"></div>
                    <h4 className="famous-title">How Zenly nailed it.</h4>
                    <p className="famous-content-text">What produt method did Zenly use to become the only location sharing app with a 8/ weekly growth rate?</p>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4 wow bounceIn"  data-wow-delay=".6s">
                    <img src={GrowthPng}/>
                    <div className="divider"></div>
                    <h4 className="famous-title">Growth Lessons from Early Snapchat</h4>
                    <p className="famous-content-text">Why starting with a simple and radical product is the first step to success.</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="bottom-section">
              <h2 className="bottom-title wow slideInLeft">Let's talk about your project</h2>
              <TalkButton
                text="CONTACT ME"
                func={openModal}
              />
            </div>
            <div className="page-container footer">
              <div className="footer-wrap">
                <p className="copyright">@ 2017-2020 Company Name Inc </p>
                <div className="social-group">
                  <img src={LinkedinSvg}/>
                  <img src={MediumSvg}/>
                  <img src={TwitterSvg}/>
                  <img src={FaceBookSvg}/>
                </div>
              </div>
            </div>
          </>
         
        {
          isContactMeScreen && 
          <ContactMe
            closeModal={closeModal}
          />
        }
      </div>
    </div>
  );
}

export default App;
