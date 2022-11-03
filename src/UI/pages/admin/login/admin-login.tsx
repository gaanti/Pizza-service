import React, { useEffect, useState } from 'react';
import './admin-login.scss';
import { Button, Container, TextField } from '@material-ui/core';
import { useLoginMutation } from '../../../../redux/services/login';
import { useSelector } from 'react-redux';
import { authTokenSelect, setToken } from '../../../../redux/slices/business/login';
import { useAppDispatch } from '../../../../redux/store';

function AdminLogin() {
      const loginToken = useSelector(authTokenSelect);
      const dispatch = useAppDispatch();
      const [doLoginAction, { isError, data, error, status }] = useLoginMutation();
      const [loginForm, setLoginForm] = useState({
            email: '',
            password: ''
            /* admin@test.com
             * test123 */
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
      const doLoginRequest = async () => {
            doLoginAction(loginForm);
      };
      useEffect(() => {
            if (status == 'fulfilled' && data && !isError) {
                  dispatch(setToken(data.token));
            } else if (error) {
                  console.log(error);
            }
      }, [status]);
      return (
            <div className="CENTRED_ITEM login-form-wrapper">
                  <div />
                  <div className="DIRECTION_COLUMN login-form-block">
                        <h1>Hello, mate</h1>
                        <h1>{loginToken.slice(0, 14)}...</h1>
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
                              <Button type={'submit'} variant="contained" color={'secondary'} fullWidth onClick={() => doLoginRequest()}>
                                    Let me in
                              </Button>
                        </Container>
                  </div>
                  <div />
            </div>
      );
}

export default AdminLogin;
