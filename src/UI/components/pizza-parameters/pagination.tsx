import {  useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/store';
import { fetchPizzas, setCurrentPage } from '../../../redux/slices/pizza';


function Pagination( ) {
      const total_pageas_qty = useSelector((state: RootState) => state.pizza.total_pageas_qty);
      const current_page_index = useSelector((state: RootState) => state.pizza.current_page_index);

      const dispatch = useAppDispatch();

      const pagesQty = [];
      for (let i = 0; i < total_pageas_qty; i++) {
            pagesQty.push(i + 1);
      }

      const rp = (index:number) => {
            dispatch(setCurrentPage(index))
            dispatch(fetchPizzas({ sortBy:null, filterByCategory:null, currentPage:null, filterTitle:null } ))
      }


      return (
            <ul className="content__pages">
                  {pagesQty.map((e, index) => {
                        return (
                              <li
                                    className={
                                          'button button--outline button--circle ' +
                                          (current_page_index === index ? 'content__pages-active-page' : '')
                                    }
                                    onClick={() => {
                                          rp(index)
                                    }}>
                                    {e}
                              </li>
                        );
                  })}
            </ul>
      );
}

export default Pagination;
