import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import DoughParams from "../doughParams";

function Configure(props: {
      setConfigureTab: React.Dispatch<React.SetStateAction<boolean>>;
      configureTab: boolean;
      imageSRC: string;
      title: string;
      setDoughRadius: React.Dispatch<React.SetStateAction<number>>;
      setDoughWidth: React.Dispatch<React.SetStateAction<string>>;
      doughWidth:string;
      doughRadius:number;
}) {
      return (
            <div className="pizza-block__configure_window DIRECTION_COLUMN">
                  <div className="DIRECTION_COLUMN">
                        <div className="DIRECTION_ROW">
                              <div>
                                    <h4>{props.title}</h4>
                                    <img src={props.imageSRC} style={{ width: '140px', height: '140px' }} />
                              </div>
                              <div className="pizza-block__selector">
                                    <DoughParams setDoughRadius={props.setDoughRadius}
                                                 setDoughWidth={props.setDoughWidth}
                                                 doughRadius={props.doughRadius}
                                                 doughWidth={props.doughWidth}/>
                              </div>
                        </div>
                        <div>Ingredients:</div>
                  </div>
                  <div
                        className="button button-black-white pizza-block__configure_button CENTRED_ITEM"
                        onClick={() => props.setConfigureTab(!props.configureTab)}>
                        Close
                  </div>
            </div>
      );
}

export default Configure;
