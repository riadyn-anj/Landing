import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(range, tax) {
  return { range, tax };
}

const rows = [
  createData('₱0 - ₱250,000', '₱0'),
  createData('₱250,000 - ₱00,000', '₱250,000'),
  createData('₱400,000 - ₱800,000', '₱400,000'),
  createData('₱800,000 - ₱2,000,000', '₱800,000'),
  createData('₱2,000,000 - ₱8,000,000', '₱2,000,000'),
  createData('₱8,000,000 and above', ''),
];

export default function TaxBracketTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 0 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Income Range</StyledTableCell>
            <StyledTableCell align="right">Income Tax</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.range}
              </StyledTableCell>
              <StyledTableCell align="right">{row.tax}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
