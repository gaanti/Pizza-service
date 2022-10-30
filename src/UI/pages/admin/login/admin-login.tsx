import React from 'react';
import './admin-login.scss';

function AdminLogin() {
      //http://localhost:3000/application-administration
      return (
            <div className="CENTRED_ITEM login-form-wrapper">
                  <div />
                  <div className="DIRECTION_COLUMN login-form-block">
                        <h1>Hello, mate</h1>
                        <label htmlFor="login">Login</label>
                        <input type="text" className="input black-input" id="login" />
                        <label htmlFor="password">password</label>
                        <input type="text" className="input black-input" id="password" />
                        <label htmlFor="Google 2A">Google 2A</label>
                        <input type="text" className="input black-input" id="Google 2A" />
                  </div>
                  <div />
            </div>
      );
}

export default AdminLogin;
