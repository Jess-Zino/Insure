import sidePic from "./images/bg-pattern-intro-left-desktop.svg";
import rightSidePic from "./images/bg-pattern-intro-right-desktop.svg";
import bannerPic from "./images/image-intro-desktop.jpg";
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
      <Navbar/>
        <div className='banner'>
            <div className='left'>
          
            <h1>Humanizing <br />your insurance.</h1>
            <p>
            Get your life insurance coverage easier and faster. We blend our expertise 
and technology to help you find the plan that&apos;s right for you. Ensure you 
and your loved ones are protected.
            </p>
            <button>View Plans</button>
            <img src={sidePic} className="leftFloater" />
</div>
            <div className='right'>
            <img src={bannerPic} className="bannerPix"/>
                <img src={rightSidePic} className="rightFloater"/>
               
            </div>
        </div>
    </header>
  )
} 

export default Header