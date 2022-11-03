import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function SelectPosition() {
      return (
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                  <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={10}
                        onChange={() => {}}
                        label="Age">
                        <MenuItem value="">
                              <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
            </FormControl>
      );
}

export default SelectPosition;
