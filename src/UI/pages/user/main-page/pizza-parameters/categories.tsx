import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { setFilterByCategoryId } from '../../../../../redux/slices/business/filtering_params';

function Categories() {
      const filterCategoryId = useSelector((state: RootState) => state.params.filterCategoryId);
      const filterCategoryOptions = useSelector((state: RootState) => state.params.filterCategoryOptions);
      const dispatch = useDispatch();
      return (
            <div className="categories">
                  <ul>
                        {filterCategoryOptions.length > 1 && (
                              <li
                                    onClick={() => dispatch(setFilterByCategoryId(0))}
                                    className={filterCategoryId == 0 ? 'active' : ''}
                                    key={0}>
                                    All
                              </li>
                        )}
                        {filterCategoryOptions.map((value) => {
                              if (value.id) {
                                    return (
                                          <li
                                                onClick={() => dispatch(setFilterByCategoryId(value.id))}
                                                className={filterCategoryId == value.id ? 'active' : ''}
                                                key={value.id}>
                                                {value.categoryTitle}
                                          </li>
                                    );
                              }
                        })}
                  </ul>
            </div>
      );
}

export default React.memo(Categories);
