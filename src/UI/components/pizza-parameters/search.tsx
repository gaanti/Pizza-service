import React, { useCallback } from 'react';
import '../../../styles/components/_search.scss';
import { useDispatch } from 'react-redux';
import { setFilterByTitle } from '../../../redux/slices/slice';
import debounce from 'lodash.debounce';

function Search() {
      const dispatch = useDispatch();

      const testDBNC = useCallback(
            debounce((e) => {
                  dispatch(setFilterByTitle(e));
            }, 1000),
            []
      );
      /*styled from _search.scss*/
      return (
            <>
                  <input placeholder="Find by title" onChange={(val) => testDBNC(val.target.value)} />
            </>
      );
}

export default Search;