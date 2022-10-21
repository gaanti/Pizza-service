import React from 'react';

function OrderDetailsButtonGroup() {
      return (
            <div className="button-group">
                  {/*<button onClick={() => useCreateAnOrderQuery({})}>TEST RTK_Query</button>*/}

                  <button>Send</button>
                  <button type="reset">Reset</button>
            </div>
      );
}

export default React.memo(OrderDetailsButtonGroup);