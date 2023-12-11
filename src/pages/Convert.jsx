import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/system";
import Alert from "@mui/material/Alert";
import FormHelperText from "@mui/material/FormHelperText";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const TemperatureConverter = () => {
  const [showMessage, setShowMessage] = useState(true); // State to control message display
  const [readMessage, setReadMessage] = useState(false); // State to track if message is read
  const handleClose = () => {
    setShowMessage(false);
  };

  const [tempInput, setTempInput] = useState("");
  const [tempUnit, setTempUnit] = useState("fahrenheit");
  const [tempOutput, setTempOutput] = useState("");
  const [endAdornmentText, setEndAdornmentText] = useState("°F");

  const [lengthInput, setLengthInput] = useState("");
  const [lengthUnit, setLengthUnit] = useState("meter");
  const [lengthOutput, setLengthOutput] = useState("");
  const [lengthEndAdornmentText, setLengthEndAdornmentText] = useState("Meter");

  const convertLength = () => {
    if (!lengthInput) {
      setLengthOutput("");
      return;
    }

    if (lengthUnit === "meter") {
      const outputValue = lengthInput * 3.281;
      setLengthOutput(`${outputValue} Feet`);
      setLengthEndAdornmentText("Feet");
    } else if (lengthUnit === "feet") {
      const outputValue = lengthInput / 3.281;
      setLengthOutput(`${outputValue} Meters`);
      setLengthEndAdornmentText("Meters");
    }
  };

  const handleLengthInputChange = (e) => {
    const value = e.target.value;
    setLengthInput(value);
  };

  const handleLengthUnitChange = () => {
    setLengthUnit((prevUnit) => (prevUnit === "meter" ? "feet" : "meter"));
    setLengthEndAdornmentText((prevText) =>
      prevText === "Meters" ? "Feet" : "Meters"
    );
  };

  useEffect(() => {
    convertLength();
    setLengthEndAdornmentText(lengthUnit === "meter" ? "Meter" : "Feet");
  }, [lengthInput, lengthUnit]);

  const convertTemperature = () => {
    if (!tempInput) {
      setTempOutput("");
      return;
    }

    if (tempUnit === "fahrenheit") {
      const outputValue = (tempInput - 32) / 1.8;
      setTempOutput(`${outputValue} °C`);
      setEndAdornmentText("°C");
    } else if (tempUnit === "celsius") {
      const outputValue = tempInput * 1.8 + 32;
      setTempOutput(`${outputValue}°F`);
      setEndAdornmentText("°F");
    }
  };

  const handleTempInputChange = (e) => {
    const value = e.target.value;
    setTempInput(value);
  };

  const handleTempUnitChange = () => {
    setTempUnit((prevUnit) =>
      prevUnit === "fahrenheit" ? "celsius" : "fahrenheit"
    );
    setEndAdornmentText((prevText) => (prevText === "°F" ? "°C" : "°F"));
  };

  useEffect(() => {
    convertTemperature();
    setEndAdornmentText(tempUnit === "fahrenheit" ? "°F" : "°C");
  }, [tempInput, tempUnit]);

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Temperature & Length Conversion</h1>
        <form className="w-full flex flex-col gap-7 mt-14">
          <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
            {showMessage && (
              <Alert severity="info">
                The default settings are Faranheit to Celsius & Meter to Feet!
              </Alert>
            )}
            <br />
            {showMessage && (
              <Alert severity="success" onClose={handleClose}>
                Make sure to use the two buttons to switch — have a good day!
              </Alert>
            )}
            <FormControl variant="standard" sx={{ m: 1, mt: 1, width: "25ch" }}>
              <MaterialUISwitch
                sx={{ m: 1, mb: 3 }}
                defaultChecked={tempUnit === "celsius"}
                onChange={handleTempUnitChange}
              />
              <Input
                id="temp-adornment-weight"
                type="number"
                value={tempInput}
                onChange={handleTempInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    {endAdornmentText}
                  </InputAdornment>
                }
                aria-describedby="temp-weight-helper-text"
                inputProps={{
                  "aria-label": "temperature",
                }}
              />
              <FormHelperText id="temp-weight-helper-text">
                Temperature
              </FormHelperText>
            </FormControl>
            <br />
            Output: <output id="output1">{tempOutput}</output>
          </div>
          <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
            <FormControl variant="standard" sx={{ m: 1, mt: 1, width: "25ch" }}>
              <MaterialUISwitch
                sx={{ m: 1, mb: 3 }}
                defaultChecked={lengthUnit === "feet"}
                onChange={handleLengthUnitChange}
              />
              <Input
                id="length-adornment-weight"
                type="number"
                value={lengthInput}
                onChange={handleLengthInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    {lengthEndAdornmentText}
                  </InputAdornment>
                }
                aria-describedby="length-weight-helper-text"
                inputProps={{
                  "aria-label": "length",
                }}
              />
              <FormHelperText id="length-weight-helper-text">
                Length
              </FormHelperText>
            </FormControl>
            <br />
            Output: <output id="output2">{lengthOutput}</output>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TemperatureConverter;
