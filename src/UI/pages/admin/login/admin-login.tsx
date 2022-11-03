import React, { useRef, useState } from 'react';
import './admin-login.scss';
import { Button, Container, TextField } from '@material-ui/core';
import { useLoginMutation } from '../../../../redux/services/login';

//http://w
function AdminLogin() {
      const [doLoginAction, { isLoading, isError }] = useLoginMutation();
      const [loginForm, setLoginForm] = useState({
            email: '',
            password: ''
      });
      const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setLoginForm({
                  ...loginForm,
                  email: event.target.value
            });
      };
      const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setLoginForm({
                  ...loginForm,
                  password: event.target.value
            });
      };
      console.log(isLoading);
      console.log(isError);
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
      };
      return (
            <div className="CENTRED_ITEM login-form-wrapper">
                  <div />
                  <div className="DIRECTION_COLUMN login-form-block">
                        <h1>Hello, mate</h1>
                        <form action={''} method={'POST'} onSubmit={handleSubmit}>
                              <Container maxWidth={'sm'}>
                                    <TextField
                                          required
                                          name="Email"
                                          label="Email"
                                          variant="outlined"
                                          fullWidth
                                          value={loginForm.email}
                                          onChange={handleEmailChange}
                                    />
                                    <TextField
                                          required
                                          name="Password"
                                          label="Password"
                                          variant="outlined"
                                          fullWidth
                                          value={loginForm.password}
                                          onChange={handlePasswordChange}
                                    />
                                    <TextField required name="Google 2A" label="Google 2A" variant="outlined" fullWidth />
                                    <Button type={'submit'} variant="contained" color={'secondary'} fullWidth>
                                          Let me in
                                    </Button>
                              </Container>
                        </form>
                  </div>
                  <div />
            </div>
      );
}

export default AdminLogin;
