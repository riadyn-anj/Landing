import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


// New NumberInput component
const NumberInput = ({ value, onChange }) => (
  <label className="text-black-500 font-semibold">
    Input a number:
    <input
      type="number"
      value={value}
      onChange={onChange}
      className="input"
    />
  </label>
);

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const NthFactorialTable = () => {
  const [userInput, setUserInput] = useState("");
  const [nFactorial, setNFactorial] = useState("");
  const [sum, setSum] = useState("");
  const [average, setAverage] = useState("");

  const calculateFactorial = () => {
    let x = parseInt(userInput);
    let product = 1;

    for (let i = 1; i <= x; i++) {
      product *= i;
    }
    setNFactorial(product);
  };

  const calculateSum = () => {
    let x = parseInt(userInput);
    let sum = 0;

    for (let i = 1; i <= x; i++) {
      sum += i;
    }
    setSum(sum);
  };

  const calculateAverage = () => {
    let x = parseInt(userInput);
    let sum = 0;
    let average;

    for (let i = 1; i <= x; i++) {
      sum += i;
    }
    average = sum / x;
    setAverage(average);
  };

  const updateOutput = () => {
    calculateFactorial();
    calculateSum();
    calculateAverage();
  };

  return (
    <div>
      {/* Replaced the input with the new NumberInput component */}
      <NumberInput value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Calculation</StyledTableCell>
              <StyledTableCell align="right">Result</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                N Factorial:
              </StyledTableCell>
              <StyledTableCell align="right">{nFactorial}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Sum:
              </StyledTableCell>
              <StyledTableCell align="right">{sum}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Average:
              </StyledTableCell>
              <StyledTableCell align="right">{average}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <button className="btn" type="submit" onClick={updateOutput}>
        Submit
      </button>
    </div>
  );
};

export default NthFactorialTable;
