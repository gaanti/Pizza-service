import React from 'react';
import { setCurrentPage } from '../../../redux/slices/slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

function Pagination(props: { currentPage: number }) {
      const total_pageas_qty = useSelector((state: RootState) => state.pizza.total_pageas_qty);
      const dispatch = useDispatch();

      const pagesQty = [];
      for (let i = 0; i < total_pageas_qty; i++) {
            pagesQty.push(i + 1);
      }
      return (
            <ul className="content__pages">
                  {pagesQty.map((e, index) => {
                        return (
                              <li
                                    className={
                                          'button button--outline button--circle ' +
                                          (props.currentPage === index ? 'content__pages-active-page' : '')
                                    }
                                    onClick={() => {
                                          dispatch(setCurrentPage(index));
                                    }}>
                                    {e}
                              </li>
                        );
                  })}
            </ul>
      );
}

export default Pagination;
