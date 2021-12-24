import React from 'react'
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

function createData(name, fullQuantity, currentQuantity, missing) {
  return { name, fullQuantity, currentQuantity, missing };
}

const rows = fullEquipmentList.map((item) => createData(item.name, item.fullQuantity, '', ''))

export default function EquipmentList(setEquipment) {
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
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.fullQuantity}</StyledTableCell>
                <StyledTableCell align="center">{row.currentQuantity}
                  <TextField
                    onFocus={() => console.log('in')}
                    onBlur={() => console.log('out')}
                    variant="outlined"
                    color="primary"
                    type="text"
                    style={{ maxWidth: 70 }}
                    value='0'
                  />
                </StyledTableCell>
                <StyledTableCell align="center">{row.missing}</StyledTableCell>
                {/* <StyledTableCell align="center" ><Button><DeleteIcon /></Button></StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <NewItem />
    </>
  );
}
