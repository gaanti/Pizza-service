import React, { useState } from 'react';

function OrderDate(props: { DeliveryOrPickup: string; getDate: string; setGetDate: React.Dispatch<React.SetStateAction<string>> }) {
  const DeliveryOrPickup = props.DeliveryOrPickup;
  const d = new Date();

  const tempDay = d.getDate();
  const tempMonth = d.getMonth();
  const tempYear = d.getFullYear();

  const maxDay = tempDay + 7 < 10 ? `0${tempDay + 7}` : tempDay + 7;
  const minDay = tempDay < 10 ? `0${tempDay}` : tempDay;

  const minMonth = tempMonth < 10 ? `0${tempMonth}` : tempMonth;
  const maxMonth = tempMonth + 1 < 10 ? `0${tempMonth + 1}` : tempMonth + 1;

  const minDate = `${tempYear}-${minMonth}-${minDay}T00:00`;
  const maxDate = `${tempYear}-${maxMonth}-${maxDay}T00:00`;

  return (
    <label className="input">
      <input
        className="input__field"
        id="Contact_method"
        type="datetime-local"
        onChange={(e) => props.setGetDate(e.target.value)}
        value={props.getDate}
        min={minDate}
        max={maxDate}
      />
      <div className="input__label">
        {DeliveryOrPickup
          ? DeliveryOrPickup === 'Delivery'
            ? 'Delivery'
            : DeliveryOrPickup === 'Pickup'
              ? 'Pickup'
              : ''
          : ''}{' '}
        date
      </div>
    </label>
  );
}

export default React.memo(OrderDate);
