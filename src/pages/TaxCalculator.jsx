import React, { useState, useEffect } from "react";
import TaxBracketTable from "./TaxBracketTable"; // Import your TaxBracketTable component here
import Chip from "@mui/material/Chip"; // Import Chip component from Material-UI
import DoneIcon from "@mui/icons-material/Done"; // Import the Done icon from Material-UI
import Button from "@mui/material/Button";
import NthFactorial from "./nthfactorial";
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";


const TaxCalculator = ({ handleFocus, handleBlur }) => {
  const [salary, setSalary] = useState("");
  const [taxAmount, setTaxAmount] = useState("₱0.00"); // Initialize with ₱0.00
  const [showPopup, setShowPopup] = useState(true); // Initially show the popup

  useEffect(() => {
    handleFocus(); // Initially trigger animation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateTax = () => {
    const parsedSalary = parseFloat(salary);
    if (!isNaN(parsedSalary)) {
      if (parsedSalary < 250000) {
        setTaxAmount("₱0.00");
      } else if (parsedSalary >= 250000 && parsedSalary < 400000) {
        setTaxAmount(`₱${((parsedSalary - 250000) * 0.2).toFixed(2)}`);
      } else if (parsedSalary >= 400000 && parsedSalary < 800000) {
        setTaxAmount(`₱${(30000 + (parsedSalary - 400000) * 0.25).toFixed(2)}`);
      } else if (parsedSalary >= 800000 && parsedSalary < 2000000) {
        setTaxAmount(`₱${(130000 + (parsedSalary - 800000) * 0.3).toFixed(2)}`);
      } else if (parsedSalary >= 2000000 && parsedSalary < 8000000) {
        setTaxAmount(
          `₱${(490000 + (parsedSalary - 2000000) * 0.32).toFixed(2)}`
        );
      } else if (parsedSalary >= 8000000) {
        setTaxAmount(
          `₱${(2410000 + (parsedSalary - 8000000) * 0.35).toFixed(2)}`
        );
      }
      handleFocus(); // Trigger animation on tax calculation
    } else {
      setTaxAmount("₱"); // Clear tax amount if salary is not a valid number
    }
  };

  const handleSalaryChange = (e) => {
    const input = e.target.value;
    const numericInput = input.replace(/[^\d]/g, ""); // Remove non-numeric characters
    setSalary(numericInput);
  };

  const handleBlurAndCalculate = () => {
    handleBlur(); // Call handleBlur to reset animation
    calculateTax(); // Calculate tax on blur
  };

  const togglePopup = () => {
    setShowPopup(!showPopup); // Toggle popup visibility
  };

  return (
    <div>
      {showPopup && (
        <div className="popup">
          <TaxBracketTable />

          <br />
          <Chip
            label={<span style={{ fontWeight: "bold" }}>Understood</span>}
            color="success"
            onClick={togglePopup}
            onDelete={togglePopup}
            deleteIcon={<DoneIcon />} // Use Done icon as delete icon
            onDeleteClick={togglePopup} // Optional: Only needed for accessibility
          />
        </div>
      )}

      {!showPopup && (
        <div>
          <label className="text-black-500 font-semibold">
            Input Salary:
            <input
              type="text" // Change type to text to allow prepending the peso sign
              name="salary"
              value={`₱${salary}`} // Display a single peso sign along with the salary
              placeholder="Input your value"
              onChange={handleSalaryChange}
              onFocus={handleFocus}
              onBlur={handleBlurAndCalculate}
              className="input"
            />
          </label>
          <label className="text-black-500 font-semibold">Income Tax: </label>
          <br />
          <Button
            variant="outlined"
            color="success"
            style={{ fontWeight: "bold" }}
          >
            {taxAmount}
          </Button>
          <br /> <br />
          <button className="btn" onClick={calculateTax}>
            Calculate Tax
          </button>
          <br />
          <br />
          <h1 className="head-text">Nth Factorial</h1>
          <NthFactorial />
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;
