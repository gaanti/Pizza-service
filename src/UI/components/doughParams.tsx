import React, {memo} from 'react';
import { useSelector } from 'react-redux';
import { dough_radiusSelect, dough_widthsSelect } from '../../redux/slices/pizzas';

function DoughParams(props: {
      setDoughRadius: React.Dispatch<React.SetStateAction<number>>;
      setDoughWidth: React.Dispatch<React.SetStateAction<string>>;
      doughWidth: string;
      doughRadius: number;
}) {
      const dough_radius = useSelector(dough_radiusSelect);
      const dough_widths = useSelector(dough_widthsSelect);

      return (
            <div className="pizza-block__selector">
                  <ul>
                        <div style={{ display: 'inline-block', width: 'auto' }}>Dough width</div>{' '}
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
                        <div style={{ display: 'inline-block', width: 'auto' }}>Dough rad.</div>{' '}
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

export default memo(DoughParams);
