import React from 'react'
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function Equipment(row) {
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
    return (
        <div>
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
                <StyledTableCell align="center" ><Button><DeleteIcon /></Button></StyledTableCell>
            </StyledTableRow>
        </div>
    )
}
