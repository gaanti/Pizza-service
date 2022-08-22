import React from 'react';
import { setCurrentPage } from '../../../redux/slices/slice';
import { useDispatch } from 'react-redux';

function Pagination(props: { overallPagesQuantity: number; currentPage: number }) {
      const dispatch = useDispatch();
      const pagesQty = [];
      for (let i = 0; i < props.overallPagesQuantity; i++) {
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
