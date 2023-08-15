import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import team1 from "./asset/team-1.jpg";
import team2 from "./asset/team-2.jpg";
import team3 from "./asset/team-3.jpg";
import team4 from "./asset/team-4.jpg";
import user1 from "./asset/user-1.jpg";
import user2 from "./asset/user-2.jpg";
import user3 from "./asset/user-3.jpg";
import blog1 from "./asset/blog-1.jpg";
import blog2 from "./asset/blog-2.jpg";
import blog3 from "./asset/blog-3.jpg";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { PiAirplaneTiltThin, PiPiggyBank } from "react-icons/pi";
import { MdDisplaySettings } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { LuNewspaper } from "react-icons/lu";
import { LiaPenFancySolid } from "react-icons/lia";
import { FaRegIdCard } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoGooglePlus,
} from "react-icons/bi";
import { BsXbox, BsTelephone } from "react-icons/bs";
import { LuMailOpen } from "react-icons/lu";

function App() {
  return (
    <>
      <div className="navigation">
        <nav
          className="navbar navbar-expand-lg bg-dark fixed-top"
          data-bs-theme="dark"
        >
          <div className="container-fluid container ">
            <a className="navbar-brand  mx-5 my-2 fw-bold fs-4" href="/">
              DORSIN
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item fw-bold">
                  <a
                    className="nav-link px-3 active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="/">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="/">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="/">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="/">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="/">
                    Contact
                  </a>
                </li>
              </ul>

              <button
                className="btn navBtn rounded-5 px-3 py-2 fw-bold me-auto"
                type="submit"
              >
                Try it Free
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div className="section d-flex justify-content-center align-items-center position-relative ">
        <div className="overlay"></div>
        <div className="text-center text-white z-1 ">
          <h1 className=" fw-bold p-3">
            We help startups launch their products
          </h1>
          <p className=" p-4">
            Etiam sed.Interdum consequat proin vestibulum class at.
          </p>
          <p>
            <FaRegCirclePlay className="display-3 text-danger" />
          </p>
        </div>
      </div>

      <div className="services">
        <div className="container text-center p-5  ">
          <h2 className="fw-bold">OUR SERVICES</h2>
          <p className="underline my-4"></p>
          <p className="   text-black-50">
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning and add a value
            for our clients.
          </p>
        </div>

        <div className="container text-center text-black-50 ">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 p-4">
              <IoDiamondOutline className="display-3 text-danger rounded-5 shadow-lg p-2 m-3" />
              <h4 className="text-black">Digital Design</h4>
              <p className="p-3 px-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
            <div className="col-md-4 p-4">
              <MdDisplaySettings className="display-3 text-danger rounded-5 shadow-lg p-2 m-3" />

              <h4 className="text-black">Unlimited Colors</h4>
              <p className="p-3 px-4">
                Credibly brand standards compliant users without extensible
                services. Anibh euismod tincidunt ut laoreet.
              </p>
            </div>
            <div className="col-md-4 p-4">
              <PiPiggyBank className="display-3 text-danger rounded-5 shadow-lg p-2 m-3" />
              <h4 className="text-black">Strategy Solutions</h4>
              <p className="p-3 px-4">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean necessary regelialia.
              </p>
            </div>
            <div className="col-md-4 p-4">
              <GiMaterialsScience className="display-3 text-danger rounded-5 shadow-lg p-2 m-3" />
              <h4 className="text-black">Awesome Support</h4>
              <p className="p-3 px-4">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth leave for the far World.
              </p>
            </div>
            <div className="col-md-4 p-4">
              <LuNewspaper className="display-3 text-danger rounded-5 shadow-lg p-2 m-3" />
              <h4 className="text-black">Truly Multipurpose</h4>
              <p className="p-3 px-4">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
            <div className="col-md-4 p-4">
              <PiAirplaneTiltThin className="display-3 text-danger rounded-5 shadow-lg p-2 m-3" />
              <h4 className="text-black">Easy to customize</h4>
              <p className="p-3 px-4">
                Question Marks and devious Semikoli, but the Little Blind Text
                didn’t listen. She packed her seven versalia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="features text-black-50">
        <div className="row container m-auto justify-content-center align-items-center g-2">
          <div className="col-md-6 p-5">
            <h3 className="px-md-5 py-2 text-black">
              A digital web design studio creating modern & engaging online
              experiences
            </h3>
            <p className="px-md-5 py-2">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
            <ul className="px-md-5 py-2">
              <li className="py-2">We put a lot of effort in design.</li>
              <li className="py-2">
                The most important ingredient of successful website.
              </li>
              <li className="py-2">
                Sed ut perspiciatis unde omnis iste natus error sit.
              </li>
              <li className="py-2">Submit Your Organization.</li>
            </ul>
            <div className="px-5">
              <button type="button" className="btn btn-danger px-4 ">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="http://dorsin.react.themesbrand.com/assets/images/online-world.svg"
              alt=""
              width="100%"
            />
          </div>
        </div>
      </div>

      <div className="banner d-flex justify-content-center align-items-center text-center my-5 position-relative">
        <div className="bannerOverlay"></div>
        <div className="container z-1 text-white py-5 ">
          <h2>Build your dream website today</h2>
          <p className="w-75 py-3 m-auto">
            But nothing the copy said could convince her and so it didn’t take
            long until a few insidious Copy Writers ambushed her.
          </p>
          <div className="planBtn p-2 ">
            <button type="button" className="btn btn-light">
              View Plan & Pricing
            </button>
          </div>
        </div>
      </div>

      <div className="pricing my-4">
        <div className="container text-center p-5  ">
          <h2 className="fw-bold">OUR PRICING</h2>
          <p className="underline my-4"></p>
          <p className=" text-black-50">
            Call to action pricing table is really crucial to your for your
            business website. Make your bids stand-out with amazing options.
          </p>
        </div>

        <div className="container m-auto text-center row justify-content-center align-items-center g-2">
          <div className="col-md-4 ">
            <div className="shadow-lg p-5 mx-3">
              <h5>Economy</h5>
              <h2>$9.90</h2>
              <p>Billing Per MONTH</p>
              <p className="border-bottom"></p>
              <p>
                Bandwidth: <span>1GB</span>
              </p>
              <p>
                Onlinespace: <span>50MB</span>
              </p>
              <p>
                Support: <span>No</span>
              </p>
              <p>
                <span>1</span> Domain
              </p>
              <p>
                <span>No</span> Hidden Fees
              </p>
              <button type="button" className="btn btn-danger">
                Join Now
              </button>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="shadow-lg p-5 mx-3">
              <h5>Economy</h5>
              <h2>$9.90</h2>
              <p>Billing Per MONTH</p>
              <p className="border-bottom"></p>
              <p>
                Bandwidth: <span>1GB</span>
              </p>
              <p>
                Onlinespace: <span>50MB</span>
              </p>
              <p>
                Support: <span>No</span>
              </p>
              <p>
                <span>1</span> Domain
              </p>
              <p>
                <span>No</span> Hidden Fees
              </p>
              <button type="button" className="btn btn-danger">
                Join Now
              </button>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="shadow-lg p-5 mx-3">
              <h5>Economy</h5>
              <h2>$9.90</h2>
              <p>Billing Per MONTH</p>
              <p className="border-bottom"></p>
              <p>
                Bandwidth: <span>1GB</span>
              </p>
              <p>
                Onlinespace: <span>50MB</span>
              </p>
              <p>
                Support: <span>No</span>
              </p>
              <p>
                <span>1</span> Domain
              </p>
              <p>
                <span>No</span> Hidden Fees
              </p>
              <button type="button" className="btn btn-danger">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="team">
        <div className="container text-center p-5  ">
          <h2 className="fw-bold">BEHIND THE PEOPLE</h2>
          <p className="underline my-4"></p>
          <p className=" text-black-50">
            It is a long established fact that create category leading brand
            experiences a reader will be distracted by the readable content of a
            page when looking at its layout.
          </p>
        </div>
        <div className="container m-auto text-center row justify-content-center align-items-center g-2">
          <div className="col-md-3 p-3">
            <img src={team1} alt="" className="rounded-4" width="100%" />
            <h5 className="pt-3">Frank Johnson</h5>
            <p className="text-black-50">CEO</p>
            <p className="border-bottom"></p>
          </div>
          <div className="col-md-3 p-3">
            <img src={team2} alt="" className="rounded-4" width="100%" />
            <h5 className="pt-3">Elaine Stclair</h5>
            <p className="text-black-50">DESIGNER</p>
            <p className="border-bottom"></p>
          </div>
          <div className="col-md-3 p-3">
            <img src={team3} alt="" className="rounded-4" width="100%" />
            <h5 className="pt-3">Wanda Arthur</h5>
            <p className="text-black-50">DEVELOPER</p>
            <p className="border-bottom"></p>
          </div>
          <div className="col-md-3 p-3">
            <img src={team4} alt="" className="rounded-4" width="100%" />
            <h5 className="pt-3">Joshua Stemple</h5>
            <p className="text-black-50">MANAGER</p>
            <p className="border-bottom"></p>
          </div>
        </div>
      </div>

      <div className="workprocess my-5 p-5">
        <div className="container text-center py-5  ">
          <h2 className="fw-bold">WORK PROCESS</h2>
          <p className="underline my-4"></p>
          <p className=" text-black-50">
            In an ideal world this website wouldn’t exist, a client would
            acknowledge the importance of having web copy before the Proin vitae
            ipsum vel ex finibus semper design starts.
          </p>
        </div>
        <div class="container m-auto text-center row justify-content-center align-items-center g-2">
          <div class="col-md-3 mx-5">
            <LiaPenFancySolid className="display-3 text-danger rounded-5 shadow-lg p-2 m-3" />

            <h4> Tell us what you need</h4>
            <p className="text-black-50">
              The Big Oxmox advised her not to do so.
            </p>
          </div>
          <div class="col-md-3 mx-5">
            <FaRegIdCard className="display-3 text-danger rounded-5 shadow-lg p-2 m-3" />
            <h4> Get free quotes</h4>
            <p className="text-black-50">Little Blind Text didn’t listen.</p>
          </div>
          <div class="col-md-3 mx-5">
            <FiTarget className="display-3 text-danger rounded-5 shadow-lg p-2 m-3" />
            <h4> Deliver high quality product</h4>
            <p className="text-black-50">When she reached the first hills.</p>
          </div>
          <div className="workBtn p-5">
            <button type="button" class="btn btn-danger">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="comments">
        <div className="container text-center py-5  ">
          <h2 className="fw-bold">WHAT THEY'VE SAID</h2>
          <p className="underline my-4"></p>
          <p className=" text-black-50">
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious pulvinar metus
            molestie sed Semikoli.
          </p>
        </div>
        <div class="container m-auto text-center row justify-content-center align-items-center g-2">
          <div class="col-md-3 p-4 m-3 shadow text-black-50">
            <img src={user1} className="userPics shadow-lg" alt="" />
            <p>
              “I feel confident imposing change on myself. It's a lot more fun
              progressing than looking back. That's why scelerisque pretium
              dolor, sit amet vehicula erat pelleque need throw curve balls.”
            </p>
            <p className="text-black">
              RUBEN REED -<span>Charleston</span>
            </p>
          </div>
          <div class="col-md-3 p-4 m-3 shadow text-black-50">
            <img src={user2} className="userPics shadow-lg" alt="" />
            <p>
              “Our task must be to free ourselves by widening our circle of
              compassion to embrace all living creatures Integer varius lacus
              non magna tempor congue natuasre the whole its beauty.”
            </p>
            <p className="text-black">
              MICHAEL P. HOWLETT -<span>Worcester</span>
            </p>
          </div>
          <div class="col-md-3 p-4 m-3 shadow text-black-50">
            <img src={user3} className="userPics shadow-lg" alt="" />
            <p>
              “I've learned that people will forget what you said, people will
              forget what you did, but people will never aliquam in nunc quis
              tincidunt forget how you vestibulum egestas them feel.”
            </p>
            <p className="text-black">
              THERESA D. SINCLAIR -<span>Lynchburg</span>
            </p>
          </div>
        </div>
      </div>

      <div className="banner2 d-flex justify-content-center align-items-center text-center my-5 position-relative">
        <div className="bannerOverlay"></div>
        <div className="container z-1 text-white py-5 ">
          <h2 className="fw-bold">Let's Get Started</h2>
          <p className="underline my-4"></p>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="planBtn p-2 ">
            <button type="button" className="btn btn-light">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="blog">
        <div className="container text-center p-5  ">
          <h2 className="fw-bold">BLOG</h2>
          <p className="underline my-4"></p>
          <p className=" text-black-50">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean class at a euismod mus ipsum vel
            ex finibus semper luctus quam.
          </p>
        </div>

        <div class="container m-auto row justify-content-center align-items-center g-2">
          <div class="col-md-3">
            <div>
              <img src={blog1} width="100%" alt="" />
              <p className="text-black-50 py-3">UI & UX Design</p>
              <h5> Doing a cross country road trip </h5>
              <p className="text-black-50">
                She packed her seven versalia, put her initial into the belt and
                made herself on the way..
              </p>
              <p>
                <span>Read More </span>
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div>
              <img src={blog2} width="100%" alt="" />
              <p className="text-black-50 py-3">Digital Marketing</p>
              <h5> New exhibition at our Museum </h5>
              <p className="text-black-50">
                Pityful a rethoric question ran over her cheek, then she
                continued her way.
              </p>
              <p>
                <span>Read More </span>
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div>
              <img src={blog3} width="100%" alt="" />
              <p className="text-black-50 py-3">Travelling</p>
              <h5> Why are so many people.. </h5>
              <p className="text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
              <p>
                <span>Read More </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="getInTouch">
        <div className="container text-center p-5  ">
          <h2 className="fw-bold">GET IN TOUCH</h2>
          <p className="underline my-4"></p>
          <p className=" text-black-50">
            We thrive when coming up with innovative ideas but also understand
            that a smart concept should be supported with faucibus sapien odio
            measurable results.
          </p>
        </div>

        <div class="container m-auto row justify-content-center align-items-start g-2">
          <div class="col-md-3">
            <div>
              <p className="fw-bold">Office Address 1:</p>
              <p className="text-black-50">4461 Cedar Street Moro, AR 72368</p>
              <p className="fw-bold">Office Address 2:</p>
              <p className="text-black-50">2467 Swick Hill Street </p>
              <p className="text-black-50">New Orleans, LA 70171</p>
              <p className="fw-bold">Working Hours:</p>
              <p className="text-black-50">9:00AM To 6:00PM</p>
            </div>
          </div>
          <div class="col-md-8">
            <div>
              <div class="row justify-content-center align-items-center g-2">
                <div class="col-md-5 my-3">
                  <input
                    className="w-100 p-3 rounded-3 "
                    placeholder="Your name*"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div class="col-md-5 my-3">
                  <input
                    className="w-100 p-3 rounded-3 "
                    placeholder="Your email*"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="col-md-10  mx-auto">
                <input
                  type="text"
                  className="w-100 p-3 rounded-3"
                  placeholder="Your Subject*"
                  name=""
                  id=""
                />
              </div>
              <div className="col-md-10 mx-auto my-3">
                <textarea
                  name=""
                  id=""
                  className="w-100 p-3 rounded-3"
                  placeholder="Your message*"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className=" col-md-3 ms-auto">
                <button type="button" class="btn btn-danger m-3 ">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social">
        <div className="container d-flex justify-content-around align-items-center">
          <div>
            <BiLogoFacebookCircle className="display-5 text-black-50 rounded-5 border border-dark p-2 m-3" />
            <BiLogoTwitter className="display-5 text-black-50 rounded-5 border border-dark p-2 m-3" />
            <BiLogoLinkedin className="display-5 text-black-50 rounded-5 border border-dark p-2 m-3" />
            <BiLogoGooglePlus className="display-5 text-black-50 rounded-5 border border-dark p-2 m-3" />
            <BsXbox className="display-5 text-black-50 rounded-5 border border-dark p-2 m-3" />
          </div>
          <div>
            <BsTelephone /> +91 123 4556 789
            <LuMailOpen /> Support@info.com
          </div>
        </div>
      </div>

      <div className="footer text-white">
        <div class="container mx-auto row justify-content-center align-items-start g-2">
          <div class="col-md-3 py-5">
            <div>
              <h2 className="pb-3">DORSIN</h2>
              <p className="text-white-50">Home</p>
              <p className="text-white-50">About us</p>
              <p className="text-white-50">Careers</p>
              <p className="text-white-50">Contact us</p>
            </div>
          </div>
          <div class="col-md-3 py-5">
            <div>
              <h2 className="pb-3">Information</h2>
              <p className="text-white-50">Terms & Condition</p>
              <p className="text-white-50">About us</p>
              <p className="text-white-50">Jobs</p>
              <p className="text-white-50">Bookmarks</p>
            </div>
          </div>
          <div class="col-md-3 py-5">
            <div>
              <h2 className="pb-3">Suport</h2>
              <p className="text-white-50">FAQ</p>
              <p className="text-white-50">Contact</p>
              <p className="text-white-50">Discussion</p>
            </div>
          </div>
          <div class="col-md-3 py-5">
            <div>
              <h2 className="pb-3">Subscribe</h2>
              <p className="px-2 text-white-50">
                In an ideal world this text wouldn’t exist, a client would
                acknowledge the importance of having web copy before the design
                starts.
              </p>
              <input
                type="text"
                placeholder="Email"
                className="bg-dark border-0 text-white p-3 w-100"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footerEnd">
        <div className="container">
          <p className="text-white-50 py-3">2019 - 2023 © Dorsin - Themesbrand</p>
        </div>
      </div>
    </>
  );
}

export default App;
