import meterphatse from "../assets/img/meterphatse.png";
import metermygrupr from "../assets/img/metermygrupr.png";

import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Internships/Experience</h2>
                        <p>I am a skilled MERN stack developer with hands-on experience building scalable web applications. I have worked on real-world projects, including an event management platform for Phatse and a gate management app for My Groupr, leveraging technologies like React, Node.js, MongoDB, and Express. My expertise includes developing fully responsive, interactive UIs, optimizing backend APIs, and deploying applications for seamless user experiences<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meterphatse} alt="Image" />
                                <h2>Phatse</h2>
                                <h7>Event Management Site</h7>
                            </div>
                            <div className="item">
                                <img src={metermygrupr} alt="Image" />
                                <h5>MyGrupr</h5>
                                <h7>Gate management mobile application</h7>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Several </h5>
                                <h7>freelance projects</h7>

                            </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
