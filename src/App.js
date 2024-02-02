
import './App.css';
import { IoIosMail, IoMdStar, IoMdStarHalf, IoIosArrowRoundForward, IoIosQuote ,IoIosArrowForward,IoIosArrowBack} from "react-icons/io";
import { FaCertificate, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaAngleDown, FaChalkboardTeacher } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

import { PiStudentFill, PiPencilSimpleLineFill, PiChalkboardTeacherFill, PiEnvelopeOpenFill, PiQuotesFill } from "react-icons/pi";
import { FaChildren } from "react-icons/fa6";
import { HiSun } from "react-icons/hi";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel, index, ExampleCarouselImage } from 'react-bootstrap';




import {
  FaRegCopyright,
  FaHandPointRight,
  FaUniversity,
} from "react-icons/fa";



import img1 from './image/logo.svg';
import img0 from './image/creative-logo-white.svg'
import img9 from './image/i1.jpg';



import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



import logo from './image/logo.svg';
import slider from './image/slider.webp';
import offered1 from './image/offered1.webp';
import offered2 from './image/offered2.webp';
import offered3 from './image/offered3.webp';
import offered4 from './image/offered4.webp';
import offered5 from './image/offered5.jpeg';
import offered6 from './image/offered6.jpeg';

import sli1 from './image/sli1.webp';
import sli2 from './image/sli2.webp';
import sli3 from './image/sli3.webp';

import about from './image/about.jpeg';

import k11 from './image/11.png';
import k22 from './image/22.png';
import k33 from './image/33.png';
import k44 from './image/44.png';

import happy1 from './image/happy1.jpeg';
import happy2 from './image/happy2.png';
import happyper from './image/happyper.jpeg';
import i11 from './image/111.png';
import i22 from './image/222.png';
import i33 from './image/333.png';
import i55 from './image/555.png';
import i44 from './image/444.png';
import i66 from './image/666.png';

import r1 from './image/r1.png';
import r2 from './image/r2.png';
import r3 from './image/r3.png';
import r4 from './image/r4.png';
import r5 from './image/r5.png';
import r6 from './image/r6.png';
import lastlogo from './image/lastlogo.svg';

// import { FaHandPointRight } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";



var hader = ["Home", "Courses", "Activities", "Blog", "Known Us", "Get In Touch", "Student Zone"];


var offered = [
  { img: require('./image/offered1.webp'), name: 'full Stack' },
  { img: require('./image/offered2.webp'), name: 'Data science' },
  { img: require('./image/offered3.webp'), name: 'React native' },
  { img: require('./image/offered4.webp'), name: 'Game development' },
  { img: require('./image/offered5.jpeg'), name: 'C++' },
  { img: require('./image/offered6.jpeg'), name: 'Node js' }
]

var slider1 = [require('./image/sli1.webp'), require('./image/sli2.webp'), require('./image/sli3.webp')]

var student = [
  { img: require('./image/11.png'), num: '14000+', text: 'HAPPY STUDENTS' },
  { img: require('./image/22.png'), num: '10+', text: 'CERTIFICATION APPROVAL' },
  { img: require('./image/33.png'), num: '70+', text: 'CERTIFIED TEACHERS' },
  { img: require('./image/44.png'), num: '9000+', text: 'STUDENTS PLACED' },
]
var read_our = [
  { img: require('./image/111.png'), heading: "Industry Experts As Trainers", des: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
  { img: require('./image/222.png'), heading: "Latest Curriculum", des: "We Provides latest curriculuuch a way that Students will get full knowledge within a short time." },
  { img: require('./image/333.png'), heading: "Latest Technology", des: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today." },
  { img: require('./image/444.png'), heading: "Interview Assistance", des: "At the end of each training,our tible technical questions technical questions you may be asked." },
  { img: require('./image/555.png'), heading: "Free Upgradation", des: "We will be provided free upgradation for any newer version of the course you have." },
  { img: require('./image/666.png'), heading: "Lifetime Support", des: "We will provide you lifetime support on aaaavfsll the courses you learned from us." }
]

var slider2 = [require('./image/r1.png'), require('./image/r2.png'), require('./image/r3.png'), require('./image/r4.png'), require('./image/r5.png'), require('./image/r6.png'),]

var demand=['Best C++ Programming Langtitute','Advance Angular js training institute in surat','game design course in katargam','game design course in katargam','Web design training institute in katargam','Web design training institute in katargam','Android app development institute','Web design training institute in katargam','solidworks training institute in Mota Varachha','react js training institute in surat','Web design training institute in varachha','Creo parametrics training institute in varachha','Live game development training institute','Live game development training institute','Best nodejs training institute']





function App() {
  const newLocal = "img-part d-f a-i-c j-c-s-b";
  return (
    <div>
      <div className="topinfo">
        <div className="container">
          <div className="headr d-flex">
            <div className="leftinfo d-flex">
              <i><IoIosMail></IoIosMail></i><a>info@cdmi.in</a>
              <i><FaCertificate></FaCertificate></i><a>Verify certificate</a>

            </div>
            <div className="ceninfo"><a>HAVE ANY QUESTION ? +91 90333 16003</a></div>
            <div className="rightinfo d-flex">
              <li><a><FaFacebook></FaFacebook></a></li>
              <li><a><FaTwitter></FaTwitter></a></li>
              <li><a><TiSocialGooglePlus></TiSocialGooglePlus></a></li>
              <li><a><FaLinkedin></FaLinkedin></a></li>
              <li><a><FaInstagram></FaInstagram></a></li>
              <li><a><FaYoutube ></FaYoutube></a></li>
              <li><a><FaWhatsapp ></FaWhatsapp></a></li>
            </div>
          </div>
        </div>
      </div>

      <header >
        <div className="container d-flex">
          <div className="logo">

            <img src={img1}></img>


          </div>
          <div className="menu">
            <ul className='main-menu d-flex'>


              {
                hader.map((ele, ind) => {
                  return (
                    <li className='hader-arr' kry={ind}>{ele}</li>
                  )
                })
              }


              {/* <li><a href=''>Home</a></li>
              <li><a href=''>Courses<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Activities<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Blog</a></li>
              <li><a href=''>Known Us<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Get In Touch<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Student Zone<FaAngleDown className='menu_icon'></FaAngleDown></a></li> */}

            </ul>
          </div>
        </div>
      </header>

      {/* slider start */}

      <div className='slider'>
        {/* <img src={img2}></img> */}



       
        <OwlCarousel className='owl-theme' items={1} autoplay autoplayTimeout={2000} loop margin={10} nav dots={false}>
                {
                    slider1.map((ele) => {
                        return (
                            <div class='item'>
                                <img src={ele}></img>
                            </div>
                        )
                    })
                }
          
        </OwlCarousel>;



      </div>


      {/* slider end */}

      {/* CREATIVE COURSE satrt  */}

      <div className='pd-y container course'>
        <p className='course-head'>Creative Courses
          <div className='line'></div>
        </p>
        <h1>Offered Courses</h1>
<div className='d_flex offered-div2'>

{
    offered.map((ele, ind) => {
        return (
            // <li key={ind}>{ele}</li>
            <div key={ind}>
                <img src={ele.img}></img>
                <h2>{ele.name}</h2>
                <div className='d_flex offered-bottom'>
                    <div>
                        <i><IoMdStar></IoMdStar></i>
                        <i><IoMdStar></IoMdStar></i>
                        <i><IoMdStar></IoMdStar></i>
                        <i><IoMdStar></IoMdStar></i>
                        <i><IoMdStarHalf ></IoMdStarHalf ></i>
                    </div>
                    <button><a>Know more..!</a></button>
                </div>
            </div>


        )

    })
}


</div>

        <button className='btn-all-courses'><a href=''>View All Categories<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
      </div>
      {/* CREATIVE COURSE end */}

      {/* about us start */}
      <div className="pd-y d-flex about-content">
        <div className='about'>
          <div className='content'>
            <p className='about-head'>About Us
              <div className='line'></div>
            </p>
            <h6>IT Career in Surat, moving towards the better Tomorrow!</h6>
            <p className='detail'> Creative Design & Multimedia Institute(CDMI)  is a reputed training
              institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All
              types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market
              in 2014 with the goal to help students, working professionals and other interested candidates get that dream job
              or open that desired freelance business in some of the most popular Computer / IT fields.  Our aim is to ease the
              hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
            </p>
            <button className='about-btn'><a href=''>Enroll Now...! → </a></button>
          </div>
        </div>
        <div className='about-img'>
          <img src={img9}></img>
        </div>
      </div>
      {/* about us end */}



     


       {/* KEYBOARD SECTION START */}

       <div className='keyboard speacery'>
                <div className='container2 d_flex'>

                    {
                        student.map((ele, ind) => {
                            return (
                                <div>
                                    <img src={ele.img}></img>
                                    <h1>{ele.num}+</h1>
                                    <h4>{ele.text}</h4>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            {/* KEYBOARD SECTION END */}

            {/* HAPPY STUDENT SECTION START */}
            <div className='container spacery d_flex happy'>
                <div className='happy-left'>
                    <p className='about-p'>HAPPY STUDENT
                        <div className='about-div'></div>
                    </p>
                    <h1>ALUMNI SPEAK</h1>
                    <div className='d_flex happy-flex'>
                        <i className='h-quotes'><PiQuotesFill></PiQuotesFill></i>
                        <div className='h-flex-right'>
                            <i><IoIosArrowBack ></IoIosArrowBack></i>
                            <i><IoIosArrowForward ></IoIosArrowForward></i>
                        </div>
                    </div>
                    <p>web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to.</p>
                    <div className='d_flex happy-bottom'>
                        <div className='happy-b1'>
                            <img src={happyper}></img>
                        </div>
                        <div className='happy-b2'>
                            <h4>ANSH VEKARIYA</h4>
                            <h3 style={{ fontStyle: 'italic', color: 'grey', fontSize: '18px' }}><font style={{ color: 'orange', fontStyle: 'italic' }}>full stack devloper</font>@Artbees solution</h3>
                        </div>
                    </div>
                </div>
                <div className='happy-right'>
                    <img src={happy1} className='happy1'></img>
                    <img src={happy2} className='happy2'></img>
                </div>
            </div>
            {/* HAPPY STUDENT SECTION END */}


      {/* COUNTING END */}

<div className='read-bg spacery'>
                <div className='pd-y container read'>
                    <p className='read-head'>Read Our Difference
                        <div className='line'></div>
                    </p>
                    <h1>Why Choose Creative</h1>

                    <div className='d_flex flex_wrap read-img'>
                        {
                            read_our.map((ele, ind) => {
                                return (
                                    <div className='read-1 read1'>
                                        <img src={ele.img}></img>

                                        <h3>{ele.heading}</h3>
                                        <p>{ele.des}</p>
                                    </div>
                                )
                            })

                        }


                    </div>

                </div>
            </div>


            
            {/*STUDENT PLACEMENT SECTION START */}
            <div className='student-place spacery container'>
                <p className='student-place-p'>STUDENT PLACEMENT
                    <div className='student-place-div'></div>
                </p>
                <h1>OUR RECRUITMENT PARTNERS</h1>

                <OwlCarousel className='owl-theme slider2' items={6} className='slider2' autoplay autoplayTimeout={2000} loop margin={10} nav dots={false}>
                    {
                        slider2.map((ele) => {
                            return (
                                <div class='item'>
                                    <img src={ele}></img>
                                </div>
                            )
                        })
                    }
                </OwlCarousel>

              

                <h2>Our Demanded Course -</h2>
                <div className='flex_wrap ancore'>
                    {
                        demand.map((ele,ind)=>{
                            return(
                                <a href=''>{ele}</a>
                            )
                        })
                    }
                 
                </div>
                <h3>Show More</h3>
            </div>
            {/*STUDENT PLACEMENT SECTION END */}


{/* 
      <div className="main-part-10">
        <div className="container" style={{ padding: "75px 0" }}>
          <div className="line1 t-a-c">
            <span className="sm-li4">STUDENT PLACEMENT</span>
            <h1 style={{ padding: "15px 0" }}>OUR RECRUITMENT PARTNERS</h1>
          </div>
          <div className="line2 d-f j-c-s-b" style={{ padding: "15px 0" }}>
            <div className="box">
              <a href="">
                <img src={c1} alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src={c2} alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src={c3} alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src={c4} alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src={c5} alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src={c6} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-part-11">
        <div className="container">
          <div className="part1">
            <h2>Our Demanded Course -</h2>
          </div>
          <div className="part2">
            <a href="">Wordpress Training Institute In Mota Varachha </a>
            <a href="">Advance Java Training Institute In Surat </a>
            <a href="">Nodejs Training Institute In Varachha </a>
            <a href="">Web Development Training In Varachha</a>
            <a href="">Best Animation Training Institute </a>
            <a href="">Flutter Training In Surat </a>
            <a href="">Wordpress Training Course</a>
            <a href="">Illustrator Training Institute In Varachha </a>
            <a href="">Advance Java Training Institute </a>
            <a href="">Computer Training Institute In Katargam </a>
            <a href="">Photoshop Training Institute In Katargam </a>
            <a href="">Coreldraw Training Institute In Varachha</a>
            <a href="">Solidworks Mechanical Training Course </a>
            <br />
            <div className="re">Show More</div>
          </div>
        </div>
      </div> */}
      <footer style={{ backgroundColor: "#072054" }}>
        <div className="main-part-12">
          <div className="container d-f">
            <div className="part1">
              <div className="img" width={"100%"}>
                <img src={img0} alt="" width={"55%"} />
              </div>
              <div className="des" style={{ padding: '10px 25px 10px 0', textAlign: 'justify', lineHeight: '1.5' }}>
                Creative Design and Multimedia Institute is leading computer
                training institute in surat. We offers government approved
                computer training courses in Surat.
              </div>
              <h3 className="co-go" style={{ padding: '10px 0' }}><a className='ya'>FOLLOW US ON</a></h3>
              <div className="social-icon">
                <a href="" style={{ padding: "4px" }}>
                  <FaFacebook />
                </a>
                <a href="" style={{ padding: "4px" }}>
                  <FaTwitter />
                </a>
                <a href="" style={{ padding: "4px" }}>
                  <TiSocialGooglePlus />
                </a>
                <a href="" style={{ padding: "4px" }}>
                  <FaLinkedin />
                </a>
                <a href="" style={{ padding: "4px" }}>
                  <FaInstagram />
                </a>
                <a href="" style={{ padding: "4px" }}>
                  <FaYoutube />
                </a>
                <a href="" style={{ padding: "4px" }}>
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <div className="part2">
              <h3>FEATURE LINKS</h3>
              <ul style={{ padding: '15px 0' }}>
                <li><a href=""><FaHandPointRight className="m-l" />About Us</a></li>
                <li><a href=""><FaHandPointRight className="m-l" />Blogs</a></li>
                <li><a href=""><FaHandPointRight className="m-l" />Join Us</a></li>
                <li><a href=""><FaHandPointRight className="m-l" />Company Login</a></li>
                <li><a href=""><FaHandPointRight className="m-l" />Certificate Verification</a></li>
              </ul>
            </div>
            <div className="part3">
              <h3>CONTACT US</h3>
              <span style={{ padding: '15px 0', display: 'inline-block' }}><a href="" className="co-go ya">HEAD OFFICE - YOGICHOWK</a></span>
              <p style={{ lineHeight: '1.5' }}>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
              <p>Mo :<a href="" className="co-go ya"> +90333 16003</a></p>
              <span style={{ padding: '15px 0 5px 0', display: 'inline-block' }}><a href="" className="co-go ya">OTHER BRANCHES</a></span>
              <ul>
                <li><a href=""><FaUniversity className="m-l" />Katargam</a></li>
                <li><a href=""><FaUniversity className="m-l" />Mota Varachha</a></li>
                <li><a href=""><FaUniversity className="m-l" />Adajan</a></li>
                <li><a href=""><FaUniversity className="m-l" />Navsari</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="container d-f a-i-c"
          style={{ backgroundColor: "#072044", padding: "25px 0" }}
        >
          <FaRegCopyright style={{ padding: "2px", marginRight: "3px" }} />
          <span>
            {" "}
            2023 All Rights Reserved by Creative Design & Multimedia Institute.
          </span>
        </div>
      </footer>




    </div>
  )
}
export default App;
