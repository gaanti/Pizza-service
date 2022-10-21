import React from 'react';
import './Footer.scss';
import { useSelector } from 'react-redux';
import { footerPointsSelector, navigatedItemSelector } from '../../../redux/slices/UI/footer';

function Footer() {
      const footerPoints1 = useSelector(footerPointsSelector);
      const ingredientsSelect1 = useSelector(navigatedItemSelector);
      return (
            <div className="footer">
                  {footerPoints1.map((ftp, index) => {
                        return (
                              <div className={`${ingredientsSelect1 === ftp.title ? 'yourTargetElement' : ''}`}
                              key={ftp.title}>
                                    <div id={`${ftp.title}`}>{ftp.title}</div>
                                    <hr />
                                    <div>
                                          {footerPoints1[index].points.map((item, pointIndex) => {
                                                return <div key={index + pointIndex}>{item}</div>;
                                          })}
                                    </div>
                              </div>
                        );
                  })}
            </div>
      );
}

export default Footer;
