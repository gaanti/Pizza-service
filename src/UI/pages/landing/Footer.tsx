import React from "react";
import "./Footer.scss";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { AiFillInstagram, AiFillPhone, AiFillTwitterCircle } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div>
        <div>Media</div>
        <hr />
        <div>
          <div><AiFillTwitterCircle /> Read our news</div>
          <div><AiFillInstagram /> Check how we are cook</div>
          <div><BsFacebook /> Impress yourself</div>
        </div>
      </div>
      <div>
        <div>Working hours</div>
        <hr />
        <div className="footer-work-time">
          <div className="FLEX"><BiTimeFive />
            <div>Monday - Thursday</div>
          </div>
          <div> 9.00 - 23.00</div>
        </div>
        <div className="footer-work-time">
          <div className="FLEX"><BiTimeFive />
            <div>Friday</div>
          </div>
          <div> 9.00 - 1.30</div>
        </div>
        <div className="footer-work-time">
          <div className="FLEX"><BiTimeFive />
            <div>Saturday</div>
          </div>
          <div> 10.00 - 1.30</div>
        </div>
        <div className="footer-work-time">
          <div className="FLEX"><BiTimeFive />
            <div>Sunday</div>
          </div>
          <div> 10.00 - 23.00</div>
        </div>
      </div>
      <div>
        <div>Our address</div>
        <hr />
        <div className="footer-work-time">
          <div>Country</div>
          <div>Ukraine</div></div>
        <div className="footer-work-time">
          <div>Oblast</div>
          <div>Lviv</div></div>
        <div className="footer-work-time">
          <div>City</div>
          <div>Lviv</div></div>
        <div className="footer-work-time">
          <div>Street</div>
          <div>'Impressive design №48'</div></div>
      </div>
      <div>
        <div>Contact us</div>
        <hr/>
        <div className="DIRECTION_ROW">
          <AiFillPhone />
          <div>+380-99-377-4647</div>
        </div>
        <div className="DIRECTION_ROW">
          <BsTelegram />
          <div>@Anton_Gaskevich</div>
        </div>
        <div className="DIRECTION_ROW">
          <MdAlternateEmail />
          <div>gaskevich06@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;