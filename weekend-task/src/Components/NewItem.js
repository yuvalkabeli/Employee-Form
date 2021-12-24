import React, { useRef } from "react";
import SaveIcon from "@material-ui/icons/Save";
import { Typography, TextField, Button, Box } from "@material-ui/core";

export default function NewItem() {

  const addItemForm = useRef()
  const addProduct = () => {
    // addItemForm().previousSibling().append
  }
  return (
    <div ref={addItemForm} style={{ textAlign: 'center' }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>Add new item</h2>
        <div className="App">
          <div>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Items name"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Full quantity"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Current quantity"
              variant="outlined"
            />
            <br />
            <Button
              onClick={() => alert(2)}
              startIcon={<SaveIcon />}
              variant="contained"
              color="primary"
              size='large'
            >
              Add Item
            </Button>
          </div>
        </div>
      </Box>
      <br />

    </div>
  )
}
