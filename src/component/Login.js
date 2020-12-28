import React, { useState } from "react";

//Redux Connect
import { connect } from "react-redux";

//Axios
import axios from "axios";

//React Router Dom
import { useHistory } from "react-router-dom";

//Material UI
import {
  Button,
  TextField,
  FormControl,
  MenuItem,
  Select,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    background: "#ff4066",
    borderRadius: 8,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 45,
    textTransform: "none",
    fontWeight: 600,
    width: 300,
    marginTop: 30,

    "&:hover": {
      background: "#c400a0",
    },
  },
  textField: {
    width: 300,
  },

  font: {
    color: "#ff4066",
    fontWeight: "bold",
  },
  placeholder: {
    color: "#757575",
  },
}));

const mapDispatchToProps = (dispatch) => {
  return {
    setTemp: (action) => dispatch(action),
  };
};

function Login(props) {
  const [cityName, setCityName] = useState("");
  const [apiKey] = useState("ff9f895b2e884d6680530135202710");

  const classes = useStyles();

  let history = useHistory();

  //API CALL / ON SUBMIT
  const api_call = async (e) => {
    e.preventDefault();
    const openWeather_ApiKey = "53de08b7a7ff9dbc9df4ea3a801b1bd2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeather_ApiKey}&units=metric`;
    const request = axios.get(url);
    const response = await request;

    const weatherInfo = {
      location: response.data.name,
      data_tempearature: response.data.main,
    };

    //JSON  format of the API response
    const JsonFormat = JSON.stringify(response);
    console.log("Temperature in Celcius:", weatherInfo.data_tempearature.temp);
    console.log("JSON format", JsonFormat);
    history.push("/results");

    const action = {
      type: "SET_TEMP",
      payload: weatherInfo.data_tempearature.temp,
    };

    props.setTemp(action);
  };

  return (
    <Box
      display="flex"
      height={600}
      alignItems="center"
      justifyContent="center"
    >
      <form noValidate autoComplete="off">
        <p className={classes.font}>Your API Key</p>
        <TextField className={classes.textField} defaultValue={apiKey} />
        <br />
        <br />
        <p className={classes.font}>City Name</p>
        <FormControl required className={classes.textField}>
          <Select
            value={cityName}
            displayEmpty
            onChange={(e) => setCityName(e.target.value)}
            renderValue={
              cityName !== ""
                ? undefined
                : () => <div className={classes.placeholder}>City name...</div>
            }
          >
            <MenuItem value="" disabled>
              City Name...
            </MenuItem>
            <MenuItem value="Kuala Lumpur">Kuala Lumpur</MenuItem>
            <MenuItem value="Singapore">Singapore</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button className={classes.button} onClick={api_call}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default connect(null, mapDispatchToProps)(Login);
