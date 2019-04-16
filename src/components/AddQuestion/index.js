import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { addQuestion } from "../../actions/";

const styles = theme => ({
  dialog: {
    minWidth: "80%"
  }
});

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    open: false,
    title: "",
    options: []
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      title: this.state.title
    };

    this.props.addQuestion(data);

    this.setState({ open: false });
  };

  handleTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  render() {
    const { classes } = this.props;
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
          <form onSubmit={this.handleSubmit}>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Question"
                name="title"
                fullWidth
                value={this.state.name}
                onChange={this.handleTitle}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => ({
  addQuestion: value => dispatch(addQuestion(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddQuestion));
