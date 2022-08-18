import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setFilter} from "../redux/slices/filter";

function Categories() {
    const filterBy = useSelector((state: RootState) => state.filter.filterBy)
    const dispatch = useDispatch()
    const categories = ["All", "Meat", "Vegetarian", "Grille", "Spicy"]
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div className="categories">
            <ul>
                {categories.map((value, index) => {
                    return (
                        <li onClick={() => dispatch(setFilter(value))} className={filterBy === value ? "active" : ""}>
                            {value}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Categories;