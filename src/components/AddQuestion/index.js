import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { addQuestion } from "../../actions/";

const styles = theme => ({
  dialog: {
    minWidth: "80%"
  }
});

class AddQuestion extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = () => {
    this.props.addQuestion("New Question");
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    console.log(this.state);
    console.log(this.props);

    return (
      <div>
        <Button
          variant="outlined"
          size="large"
          className={classes.margin}
          onClick={this.handleClickOpen}
        >
          Add a Question
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth={"sm"}
          fullWidth={true}
        >
          <DialogTitle id="form-dialog-title">Add a Question</DialogTitle>
          <DialogContent>
            <DialogContentText>Add the question below</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Question"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSave} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { questions: state.questions };
};

const mapDispatchToProps = dispatch => ({
  addQuestion: value => dispatch(addQuestion(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddQuestion));
