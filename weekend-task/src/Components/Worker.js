import React, { useRef } from "react";
import { AppBar, TextField, Box } from "@material-ui/core";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updateUser } from "../Reducers/userSlice";

export default function Worker() {
  const currentDate = moment(new Date()).format("YYYY-MM-DD")
  const dispatch = useDispatch()
  const nameRef = useRef()
  const placeRef = useRef()
  const dateRef = useRef()


  const updateEmployee = () => {
    const name = nameRef.current.value
    const place = placeRef.current.value
    const date = dateRef.current.value
    dispatch(updateUser({
      user: {
        name,
        place,
        date
      }
    }))
  }
  return (

    <div style={{ textAlign: 'center' }}>
      <br />
      <br />
      <br />
      <br />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="App">
          <AppBar>
            <div>
              <h1>Worker Shift Form </h1>
            </div>
          </AppBar>
          <div>
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Worker Name"
              variant="outlined"
              onChange={() => updateEmployee()}
              inputRef={nameRef}

            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Worker Place"
              variant="outlined"
              onChange={() => updateEmployee()}
              inputRef={placeRef}
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px", textAlign: 'center' }}
              name="date"
              label="date"
              type="date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              Defaultvalue={currentDate}
              fullWidth
              onChange={() => updateEmployee()}
              inputRef={dateRef}
            />
            <br />
          </div>
        </div>
      </Box>
    </div>
  );
}