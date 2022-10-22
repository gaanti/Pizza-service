import React from 'react';

function ContactPersonField(props: { contactPerson: string; setContactPerson: (contact: string) => void }) {
      return (
            <label className="input">
                  <input
                        className="input__field"
                        type="text"
                        placeholder="Anton Gaskevich"
                        spellCheck="false"
                        value={props.contactPerson}
                        onChange={(e) => props.setContactPerson(e.target.value)}
                  />
                  <div className="input__label">Contact person</div>
            </label>
      );
}

export default React.memo(ContactPersonField);
