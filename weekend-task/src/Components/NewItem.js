import React, { useRef } from "react";
import SaveIcon from "@material-ui/icons/Save";
import { Typography, TextField, Button, Box } from "@material-ui/core";

export default function NewItem({ setItems, items }) {

  const nameRef = useRef()
  const fullQuantityRef = useRef()
  const currentQuantityRef = useRef()
  const addProduct = () => {
    let name = nameRef.current.value
    let fullQuantity = fullQuantityRef.current.value
    let currentQuantity = currentQuantityRef.current.value
    if (!name || !fullQuantity || !currentQuantity) return alert('wrong')
    if (items.find((item) => item.name === name)) return alert('name taken')
    setItems([...items, { name, fullQuantity, currentQuantity }])
    nameRef.current.value = ''
    fullQuantityRef.current.value = ''
    currentQuantityRef.current.value = ''
  }
  return (
    <div style={{ textAlign: 'center' }}>
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
              inputRef={nameRef}
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="number"
              label="Full quantity"
              variant="outlined"
              inputRef={fullQuantityRef}
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="number"
              label="Current quantity"
              variant="outlined"
              inputRef={currentQuantityRef}
            />
            <br />
            <Button
              onClick={() => addProduct()}
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
