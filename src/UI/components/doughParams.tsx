import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function DoughParams(props: {
      setDoughRadius: React.Dispatch<React.SetStateAction<number>>;
      setDoughWidth: React.Dispatch<React.SetStateAction<string>>;
      doughWidth: string;
      doughRadius: number;
}) {
      const dough_radius = useSelector((state: RootState) => state.pizzas.dough_radius);
      const dough_widths = useSelector((state: RootState) => state.pizzas.dough_widths);
      return (
            <div>
                  <ul>
                        {dough_widths.map((e) => {
                              return (
                                    <li
                                          className={e.doughWidthTitle === props.doughWidth ? 'active' : ''}
                                          onClick={() => props.setDoughWidth(e.doughWidthTitle)}
                                          key={e.id}>
                                          {e.doughWidthTitle}
                                    </li>
                              );
                        })}
                  </ul>
                  <ul>
                        {dough_radius.map((e) => {
                              return (
                                    <li
                                          className={e.radius === props.doughRadius ? 'active' : ''}
                                          onClick={() => props.setDoughRadius(e.radius)}
                                          key={e.radius}>
                                          {e.radius} см.
                                    </li>
                              );
                        })}
                  </ul>
            </div>
      );
}

export default DoughParams;
