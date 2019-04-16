import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { loadAction } from "../../actions/actions";
import Questions from "../Questions";

const styles = theme => ({
  root: {
    height: "100vh"
  },
  grow: {
    flexGrow: 1
  },
  main: {
    backgroundColor: "#d1dbe8",
    flexGrow: 1,
    paddingTop: 75
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#2196f3"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Custom Questions
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.root}>
          <Grid container justify="center" className={classes.main}>
            <Questions />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ loadAction }) => ({
  loadAction
});

const mapDispatchToProps = dispatch => ({
  loadAction: () => dispatch(loadAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
