import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { AiFillInstagram, AiFillPhone, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsTelegram } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { MdAlternateEmail } from 'react-icons/md';
import React from 'react';

const footerPoints0 = [
      {
            title: 'Media',
            points: [
                  <div>
                        <AiFillTwitterCircle /> Read our news
                  </div>,
                  <div>
                        <AiFillInstagram /> Check how we are cook
                  </div>,
                  <div>
                        <BsFacebook /> Impress yourself
                  </div>
            ]
      },
      {
            title: 'Working hours',
            points: [
                  <div className="footer-work-time">
                        <div className="FLEX">
                              <BiTimeFive />
                              <div>Monday - Thursday</div>
                        </div>
                        <div> 9.00 - 23.00</div>
                  </div>,
                  <div className="footer-work-time">
                        <div className="FLEX">
                              <BiTimeFive />
                              <div>Friday</div>
                        </div>
                        <div> 9.00 - 1.30</div>
                  </div>,
                  <div className="footer-work-time">
                        <div className="FLEX">
                              <BiTimeFive />
                              <div>Saturday</div>
                        </div>
                        <div> 10.00 - 1.30</div>
                  </div>,
                  <div className="footer-work-time">
                        <div className="FLEX">
                              <BiTimeFive />
                              <div>Sunday</div>
                        </div>
                        <div> 10.00 - 23.00</div>
                  </div>
            ]
      },
      {
            title: 'Address',
            points: [
                  <div className="footer-work-time">
                        <div>Country</div>
                        <div>Ukraine</div>
                  </div>,
                  <div className="footer-work-time">
                        <div>Oblast</div>
                        <div>Lviv</div>
                  </div>,
                  <div className="footer-work-time">
                        <div>City</div>
                        <div>Lviv</div>
                  </div>,
                  <div className="footer-work-time">
                        <div>Street</div>
                        <div>'Impressive design №48'</div>
                  </div>
            ]
      },
      {
            title: 'Contact',
            points: [
                  <div className="DIRECTION_ROW">
                        <AiFillPhone />
                        <div>+380-99-377-4647</div>
                  </div>,
                  <div className="DIRECTION_ROW">
                        <BsTelegram />
                        <div>@Anton_Gaskevich</div>
                  </div>,
                  <div className="DIRECTION_ROW">
                        <MdAlternateEmail />
                        <div>gaskevich06@gmail.com</div>
                  </div>
            ]
      }
];
const initialState = {
      navigatedItem: '',
      footerPoints: footerPoints0,
      footerPointsTitles: [...footerPoints0.map((item) => item.title)],
      visibility: true
};

export const footerSlice = createSlice({
      name: 'footer',
      initialState,
      reducers: {
            setNavigatedItemSelector: (state, action: PayloadAction<string>) => {
                  state.navigatedItem = action.payload;
            },
            setSwitchVisibility: (state, action: PayloadAction<string>) => {
                  state.visibility = !state.visibility;
            },
            setVisibility: (state, action: PayloadAction<boolean>) => {
                  state.visibility = action.payload;
            }
      }
});

export const navigatedItemSelector = (state: RootState) => state.footer.navigatedItem;
export const footerPointsSelector = (state: RootState) => state.footer.footerPoints;
export const footerPointsTitlesSelector = (state: RootState) => state.footer.footerPointsTitles;
export const footerVisibilitySelector = (state: RootState) => state.footer.visibility;
export const { setNavigatedItemSelector, setSwitchVisibility, setVisibility } = footerSlice.actions;

export default footerSlice.reducer;
