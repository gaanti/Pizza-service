import React from "react";
import "./Phone-landing.scss";
import { Carousel } from "react-responsive-carousel";

function PhoneLanding() {
  const image_qty = Math.round(window.screen.width / 80);
  let top_border_images = [];
  for (let i = 0; i < image_qty; i++) {
    top_border_images.push(<img src="https://i.pinimg.com/originals/b7/21/34/b72134112b54864e4948865375ecbb11.gif"
                                alt="https://i.pinimg.com/originals/b7/21/34/b72134112b54864e4948865375ecbb11.gif"
                                id="top_border_image" />);
  }
  return (
    <div className="phone-landing">
      <div className="popo">
        <div className="top_border_images">
          {top_border_images}
        </div>
      </div>
      <Carousel autoPlay={false} dynamicHeight={true} showStatus={false} showThumbs={false} infiniteLoop={true}
                showArrows={false}>
        <div className="DIRECTION_COLUMN_WITHOUT_GAP">
          <h6 className="hot-deals-title">Hot deals</h6>
          <div className="hot-deal">
            <img id="carousel" src="Beef-Suya.jpg" />
            <div className="omg">
              <div>
                Beef-Suya - fire price
              </div>
              <div style={{ display: "inherit" }}>
                <img
                  src="https://media.dominos.ua/menu/product_osg_image_mobile/2020/09/11/cczero.png"
                  alt=""
                  style={{ display: "inherit", textAlign: "left", width: "89px" }}
                />
                Coca cola for free if you order it before 6pm
              </div>
              <button>Order now</button>
            </div>
          </div>
        </div>
        <div className="hot-deal">
          <img id="carousel" src="Beef-Suya.jpg" />
          <div className="omg">
            <div>
              Beef-Suya - fire price
            </div>
            <div style={{ display: "inherit" }}>
              <img
                src="https://media.dominos.ua/menu/product_osg_image_mobile/2020/09/11/cczero.png"
                alt=""
                style={{ display: "inherit", textAlign: "left", width: "89px" }}
              />
              Coca cola for free if you order it before 6pm
            </div>
            <button>Order now</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default PhoneLanding;