import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../redux/store';
import { current_page_indexSelect, setCurrentPage, total_pages_qtySelect } from '../../../../redux/slices/business/pizzas';
import React from 'react';

function Pagination() {
      const total_pages_qty = useSelector(total_pages_qtySelect);
      const current_page_index = useSelector(current_page_indexSelect);

      const dispatch = useAppDispatch();

      const pagesQty = [];
      for (let i = 0; i < total_pages_qty; i++) {
            pagesQty.push(i + 1);
      }

      const onClick = (index: number) => {
            dispatch(setCurrentPage(index));
      };

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
                                          onClick(index);
                                    }}
                                    key={index}>
                                    {e}
                              </li>
                        );
                  })}
            </ul>
      );
}

export default React.memo(Pagination);
