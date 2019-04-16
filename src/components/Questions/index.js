import React, { Component } from "react";
// import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import AddQuestion from "../AddQuestion";

const styles = theme => ({
  root: {
    width: "98%"
  },
  content: {
    marginTop: "1%",
    padding: theme.spacing.unit * 4
  }
});

class Questions extends Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.content} elevation={0}>
          <p> Question 1</p>
        </Paper>

        <Paper className={classes.content} elevation={0}>
          <p> Question 2</p>
        </Paper>
        <Paper className={classes.content} elevation={0}>
          <AddQuestion />
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(Questions);
