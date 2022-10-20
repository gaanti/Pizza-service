import React, { useState } from "react";

function OrderDate(props:{DeliveryOrPickup:string}) {
  const DeliveryOrPickup = props.DeliveryOrPickup
  const d = new Date();

  const tempDay = d.getDate();
  const tempMonth = d.getMonth();

  const maxDay = tempDay + 7 < 10 ? `0${tempDay + 7}` : tempDay + 7;
  const minDay = tempDay < 10 ? `0${tempDay}` : tempDay;

  const minMonth = tempMonth < 10 ? `0${tempMonth}` : tempMonth;
  const maxMonth = tempMonth + 1 < 10 ? `0${tempMonth + 1}` : tempMonth + 1;

  const hours = d.getHours() < 10 ? `0${d.getHours() + 1}` : d.getHours() + 1;
  const minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();

  const now = `2022-${minMonth}-${minDay}T${hours}:${minutes}`;

  const minDate = `2022-${minMonth}-${minDay}T00:00`;
  const maxDate = `2022-${maxMonth}-${maxDay}T00:00`;
  const [getDate, setGetDate] = useState(now);

  return (
    <label className="input">
      <input
        className="input__field"
        id="Contact_method"
        type="datetime-local"
        onChange={(e) => setGetDate(e.target.value)}
        value={getDate}
        min={minDate}
        max={maxDate}
      />
      <div className="input__label">
        {DeliveryOrPickup
          ? DeliveryOrPickup === "Delivery"
            ? "Delivery"
            : DeliveryOrPickup === "Pickup"
              ? "Pickup"
              : ""
          : ""}{" "}
        date
      </div>
    </label>
  );
}

export default React.memo(OrderDate);