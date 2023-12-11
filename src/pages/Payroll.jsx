import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Alert,
  AlertTitle
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  "&.MuiTableCell-head": {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  "&.MuiTableCell-body": {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Payroll = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [daysWorked, setDaysWorked] = useState(0);
  const [dailyRate, setDailyRate] = useState(0);
  const [deductionAmount, setDeductionAmount] = useState(0);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const changeImage = (index) => {
    const newImageUrl = prompt("Enter the new image URL:");
    if (newImageUrl !== null && newImageUrl !== "") {
      const updatedEmployees = [...employees];
      updatedEmployees[index].imageUrl = newImageUrl;
      setEmployees(updatedEmployees);
    }
  };

  const addEmployee = () => {
    const newEmployee = {
      name,
      daysWorked: parseInt(daysWorked),
      dailyRate: parseFloat(dailyRate),
      deductionAmount: parseFloat(deductionAmount),
      grossPay: parseInt(daysWorked) * parseFloat(dailyRate),
      netPay: parseInt(daysWorked) * parseFloat(dailyRate) - parseFloat(deductionAmount),
      imageUrl: "https://einercial.com/wp-content/uploads/2018/04/Facebook-no-profile-picture-icon-620x389.jpg", // Update or add the imageUrl as needed
    };
    setEmployees([...employees, newEmployee]);
    clearInputs();
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const clearInputs = () => {
    setName("");
    setDaysWorked(0);
    setDailyRate(0);
    setDeductionAmount(0);
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        Welcome to{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Payroll Calculator{" "}
        </span>
        👋
      </h1>
      <div className="py-5 flex flex-col">
        <div>
          <TextField
            fullWidth
            label="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            size="small"
            style={{ marginBottom: "10px", maxWidth: "400px" }}
          />{" "}
        </div>
        <div>
          <TextField
            fullWidth
            label="Days Worked"
            type="number"
            value={daysWorked}
            onChange={(e) => setDaysWorked(e.target.value)}
            variant="outlined"
            size="small"
            style={{ marginBottom: "10px", maxWidth: "400px" }}
          />
        </div>
        <div>
          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            style={{ marginBottom: "10px", maxWidth: "400px" }}
          >
            <InputLabel htmlFor="outlined-adornment-daily-rate">
              Daily Rate
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-daily-rate"
              type="number"
              value={dailyRate}
              onChange={(e) => setDailyRate(e.target.value)}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Daily Rate"
            />
          </FormControl>
          <div></div>
          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            style={{ marginBottom: "10px", maxWidth: "400px" }}
          >
            <InputLabel htmlFor="outlined-adornment-deduction">
              Deduction Amount
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-deduction"
              type="number"
              value={deductionAmount}
              onChange={(e) => setDeductionAmount(e.target.value)}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Deduction Amount"
            />
          </FormControl>
        </div>
        <br />
        <div>
          <button className="btn" onClick={addEmployee}>
            Add Employee
          </button>
        </div>
        <br />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>No.</StyledTableCell>
                <StyledTableCell>Employee Name</StyledTableCell>
                <StyledTableCell>Days Worked</StyledTableCell>
                <StyledTableCell>Daily Rate</StyledTableCell>
                <StyledTableCell>Gross Pay</StyledTableCell>
                <StyledTableCell>Deduction Amount</StyledTableCell>
                <StyledTableCell>Net Pay</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((emp, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell>{emp.name}</StyledTableCell>
                  <StyledTableCell>{emp.daysWorked}</StyledTableCell>
                  <StyledTableCell>{emp.dailyRate}</StyledTableCell>
                  <StyledTableCell>{emp.grossPay}</StyledTableCell>
                  <StyledTableCell>{emp.deductionAmount}</StyledTableCell>
                  <StyledTableCell>{emp.netPay}</StyledTableCell>
                  <StyledTableCell>
                    <button className="btn" onClick={() => deleteEmployee(index)}>
                      Delete
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <h3 className="subhead-text">Employees Profile</h3>
      <div className="mt-16 flex flex-wrap gap-12">
        {employees.map((emp, index) => (
          <div
            className="block-container w-20 h-20 relative"
            key={index}
            onClick={() => changeImage(index)}
            style={{ position: "relative" }}
          >
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={emp.imageUrl}
                alt={emp.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div
              className="employee-info absolute top-0 left-0 bg-white p-0.5 rounded-md z-20"
              style={{ fontSize: "0.6rem", top: "-10px" }}
            >
              <span>{emp.name}</span>
            </div>
          </div>
        ))}
      </div>
      <br />
      <Alert severity="info" open={alertOpen} onClose={handleCloseAlert}>
      <AlertTitle><strong>Info</strong></AlertTitle>
      <strong>You can change the image by clicking the box —</strong> <strong>check it out!</strong>
        {alertMessage}
      </Alert>
    </section>
  );
};

export default Payroll;