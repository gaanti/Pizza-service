import React from 'react';
import './header-point.tsx.scss';
import { useDispatch } from 'react-redux';
import { setNavigatedItemSelector, setVisibility } from '../../../redux/slices/UI/footer';

function HeaderPoint(props: { children: any }) {
      const dispatch = useDispatch();
      return (
            <div
                  className="header-point header-point-to-footer"
                  onClick={() => {
                        dispatch(setNavigatedItemSelector(props.children));
                        dispatch(setVisibility(true));
                  }}>
                  {props.children}
            </div>
      );
}

export default HeaderPoint;
