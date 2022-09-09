import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/store';
import { setCurrentPage } from '../../../redux/slices/pizzas';

function Pagination() {
      const total_pages_qty = useSelector((state: RootState) => state.pizzas.total_pages_qty);
      const current_page_index = useSelector((state: RootState) => state.pizzas.current_page_index);

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

export default Pagination;
