import React, { Component } from "react";
import { connect } from "react-redux";
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
  renderQuestions() {
    const { classes } = this.props;
    return this.props.questions.map((question, i) => {
      return (
        <Paper key={i} className={classes.content} elevation={0}>
          {question.title}
        </Paper>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.renderQuestions()}
        <Paper className={classes.content} elevation={0}>
          <AddQuestion />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { questions: state.questions };
};

export default connect(mapStateToProps)(withStyles(styles)(Questions));
