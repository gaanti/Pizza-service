import React, { useState } from 'react';

function useToggle(first: any, second: any) {
      const [value, setValue] = useState(first);
      const notSetValue = value == first ? second : first;
      const toggle = React.useCallback(() => {
            setValue(notSetValue);
      }, [notSetValue]);
      return [value, toggle];
}

export default useToggle;
