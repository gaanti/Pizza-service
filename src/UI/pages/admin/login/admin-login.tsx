import React from 'react';
import './admin-login.scss';
import { Button, Container, TextField } from '@material-ui/core';
import { Stack } from '@mui/material';
import SelectPosition from './select-position';

function AdminLogin() {
      //http://localhost:3000/application-administration
      return (
            <div className="CENTRED_ITEM login-form-wrapper">
                  <div />
                  <div className="DIRECTION_COLUMN login-form-block">
                        <h1>Hello, mate</h1>
                        <SelectPosition />
                        <Container maxWidth={'sm'}>
                              <TextField required id="outlined-required" label="Login" variant="outlined" fullWidth />
                              <TextField required id="outlined-required" label="Password" variant="outlined" fullWidth />
                              <TextField required id="outlined-required" label="Google 2A" variant="outlined" fullWidth />
                              <Button variant="contained" color={'secondary'} fullWidth>
                                    Let me in
                              </Button>
                        </Container>
                  </div>
                  <div />
            </div>
      );
}

export default AdminLogin;
