import React, { useEffect, useState } from 'react'
import { fullEquipmentList } from '../db/db'
import TextField from "@material-ui/core/TextField";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NewItem from './NewItem';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { updateEquipment } from '../Reducers/equipmentSlice';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const rows = fullEquipmentList.map(({ name, fullQuantity }) => {
  return { name, fullQuantity, currentQuantity: 0 }
})

export default function EquipmentList() {
  const [items, setItems] = useState(rows)
  const dispatch = useDispatch()
  const updateEquipmentList = () => {
    let itemsArray = [].slice.call(document.getElementsByClassName('item'))
    let missingArray = [].slice.call(document.getElementsByClassName('missing'))
    itemsArray = itemsArray.map((item, i) => {
      let { firstChild: { value } } = item.firstChild
      value = Number(value)
      const { name } = items[i]
      return { value, name }
    })
    missingArray.forEach((item, i) => item.textContent = items[i].fullQuantity - itemsArray[i].value)
    dispatch(updateEquipment(itemsArray))
  }
  const deleteItem = (name) => {
    setItems(items.filter((item) => item.name !== name))
  }
  useEffect(() => updateEquipmentList(), [items])
  return (
    <>
      <TableContainer component={Paper}>
        <h1 style={{ textAlign: 'center' }}>Equipments</h1>
        <Table sx={{ minWidth: 400 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Equipment</StyledTableCell>
              <StyledTableCell align="center">Full&nbsp;quantity</StyledTableCell>
              <StyledTableCell align="center">Current&nbsp;quantity</StyledTableCell>
              <StyledTableCell align="center">Missing</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, i) => (<StyledTableRow key={item.name} >
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="center">{item.fullQuantity}</StyledTableCell>
              <StyledTableCell align="center">
                <TextField
                  className='item'
                  onBlur={(e) => {
                    if (!e.target.value)
                      e.target.value = 0
                    if (e.target.value > item.fullQuantity)
                      e.target.value = item.fullQuantity
                    updateEquipmentList()
                  }}
                  onChange={() => updateEquipmentList()}
                  variant="outlined"
                  color="primary"
                  type="number"
                  style={{ maxWidth: 70 }}
                  defaultValue={item.currentQuantity}
                />
              </StyledTableCell>
              <StyledTableCell align="center" className='missing'>{item.fullQuantity}</StyledTableCell>
              <StyledTableCell align="center" ><Button onClick={() => deleteItem(item.name)} disabled={i < 7}><DeleteIcon /></Button></StyledTableCell>
            </StyledTableRow>))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <NewItem setItems={setItems} items={items} />
    </>
  );
}
