import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setFilterByCategory } from '../../../redux/slices/filtering_params';

function Categories() {
  const filterByCategory = useSelector((state: RootState) => state.params.filterCategory);
  const dispatch = useDispatch();
  const categories = ['All', 'Meat', 'Vegetarian', 'Grille', 'Spicy'];
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => {
          return (
            <li
              onClick={() => dispatch(setFilterByCategory(value))}
              className={filterByCategory === value ? 'active' : ''}
              key={index}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
