import React, { forwardRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteringParams, setSort, setSortDirection } from '../../../../redux/slices/business/filtering_params';
import useToggle from '../../../../hooks/toggleHook';

const SortPOPUP = forwardRef(
      (
            props: { setOpen: React.Dispatch<React.SetStateAction<boolean>>; togleSortDirection: any; sortBy: string },
            reference: React.ForwardedRef<unknown>
      ) => {
            const SORT_BY_OPTIONS = ['popularity', 'price', 'title'];
            const dispatch = useDispatch();
            useEffect(() => {
                  const click = (event: any) => {
                        // @ts-ignore
                        if (!event.composedPath().includes(reference.current)) {
                              props.setOpen(false);
                        }
                  };
                  document.body.addEventListener('click', click);
                  return () => document.body.removeEventListener('click', click);
            }, []);
            return (
                  <div className="sort__popup">
                        <ul>
                              {SORT_BY_OPTIONS.map((option) => {
                                    return (
                                          <li
                                                className={props.sortBy === option ? 'active' : ''}
                                                onClick={() => {
                                                      props.togleSortDirection(option);
                                                      dispatch(setSort(option));
                                                }}
                                                key={option}>
                                                {option}
                                          </li>
                                    );
                              })}
                        </ul>
                  </div>
            );
      }
);

function Sort() {
      const { sortBy } = useSelector(filteringParams);
      const dispatch = useDispatch();
      const [open, setOpen] = useState(false);
      const [direction, toggleDirection] = useToggle('increase', 'decrease');
      const sortDirection = direction === 'increase' ? { rotate: 'z 0deg' } : { rotate: 'z 180deg' };
      const togleSortDirection = (e: any) => {
            if (sortBy === e) {
                  toggleDirection();
                  dispatch(setSortDirection(direction));
            }
      };
      const openPopUp = () => {
            setOpen(!open);
      };
      const ref = React.createRef<HTMLDivElement>();

      return (
            <div className="sort" ref={ref}>
                  <div className="sort__label">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={sortDirection}>
                              <path
                                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                    fill="#FF4900FF"
                              />
                        </svg>
                        <b>Sort by</b>
                        {!open && (
                              <span
                                    onClick={() => {
                                          openPopUp();
                                    }}>
                                    {sortBy}
                              </span>
                        )}
                  </div>
                  {open && <SortPOPUP setOpen={setOpen} togleSortDirection={togleSortDirection} sortBy={sortBy} ref={ref} />}
            </div>
      );
}

export default React.memo(Sort);
