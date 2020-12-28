import React from "react";
import { connect } from "react-redux";

//Material UI
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  font: {
    color: "#ff4066",
    fontWeight: "bold",
    fontSize: 20,
  },
  tempFont: {
    fontSize: 20,
    overflowWrap: "break-word",
    borderBottom: "1px solid grey",
    paddingBottom: 15,
    width: 300,
  },
}));

const mapStateToProps = (state) => {
  return {
    temperature: state.temperature,
  };
};

function Results(props) {
  const classes = useStyles();

  const celcius = props.temperature;
  const farenheit = props.temperature * 1.8 + 32;

  return (
    <Box
      display="flex"
      height={600}
      alignItems="center"
      justifyContent="center"
    >
      <div>
        <p className={classes.font}>Celcius</p>
        <p className={classes.tempFont}>{parseFloat(celcius).toPrecision(3)}</p>
        <br />
        <p className={classes.font}>Farenheit</p>
        <p className={classes.tempFont}>
          {parseFloat(farenheit).toPrecision(3)}
        </p>
      </div>
    </Box>
  );
}

export default connect(mapStateToProps)(Results);
