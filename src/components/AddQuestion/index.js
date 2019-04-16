import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";

import { addQuestion } from "../../actions/";

const styles = theme => ({
  dialog: {
    minWidth: "80%"
  },
  answerMargin: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  answerButtonMargin: {
    marginTop: "2%"
  },
  errorDialog: {
    backgroundColor: "#ff8a80",
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  }
});

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.handleOptionsTextChange = this.handleOptionsTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    open: false,
    error: false,
    errorText: "",
    title: "",
    options: [{ text: "" }, { text: "" }]
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      error: false
    });
    this.setState({ open: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      error: false
    });

    if (this.state.title.length === 0) {
      this.setState({
        error: true,
        errorText: "Please enter the Question"
      });
      return;
    }

    if (this.state.options.length < 2) {
      this.setState({
        error: true,
        errorText: "Please enter atleast 2 options"
      });
      return;
    }

    const errors = this.state.options.filter(
      option => option.text.length === 0
    );
    if (errors.length > 0) {
      this.setState({
        error: true,
        errorText: "Please enter all options"
      });
      return;
    }

    const newQuestionData = {
      title: this.state.title,
      options: this.state.options
    };

    this.props.addQuestion(newQuestionData);

    this.setState({
      open: false,
      error: false,
      errorText: "",
      title: "",
      options: [{ text: "" }, { text: "" }]
    });
  };

  handleTitleChange(event) {
    this.setState({
      error: false
    });
    this.setState({
      title: event.target.value
    });
  }

  handleOptionsTextChange = id => event => {
    this.setState({
      error: false
    });
    const newOptions = this.state.options.map((option, i) => {
      if (id !== i) return option;
      return { ...option, text: event.target.value };
    });

    this.setState({ options: newOptions });
  };

  handleAddOption = () => {
    this.setState({
      error: false
    });
    this.setState({
      options: this.state.options.concat([{ text: "" }])
    });
  };

  handleRemoveOption = id => () => {
    this.setState({
      error: false
    });
    this.setState({
      options: this.state.options.filter((option, optionId) => id !== optionId)
    });
  };

  renderError() {
    const { classes } = this.props;
    if (this.state.error) {
      return (
        <DialogContent className={classes.errorDialog}>
          <p className={classes.error}>{this.state.errorText}</p>
        </DialogContent>
      );
    }
    return;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="outlined"
          className={classes.margin}
          size="large"
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
              <DialogContentText>Question</DialogContentText>
              <Input
                autoFocus
                margin="dense"
                id="name"
                label="Question Text"
                name="title"
                fullWidth
                value={this.state.name}
                onChange={this.handleTitleChange}
              />
            </DialogContent>
            <DialogContent>
              <DialogContentText>Answers</DialogContentText>
              {this.state.options.map((option, i) => (
                <div key={i}>
                  <Input
                    autoFocus
                    className={classes.answerMargin}
                    margin="dense"
                    placeholder={`Answer  #${i + 1}`}
                    value={option.text}
                    fullWidth
                    onChange={this.handleOptionsTextChange(i)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={this.handleRemoveOption(i)}
                          aria-label="Delete"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>
              ))}
              <Button
                variant="contained"
                onClick={this.handleAddOption}
                color="primary"
                disabled={this.state.options.length > 4 ? true : false}
                className={classes.answerButtonMargin}
              >
                Add New Answer
              </Button>
            </DialogContent>
            {this.renderError()}

            <DialogActions>
              <Button onClick={this.handleClose} color="secondary">
                Cancel
              </Button>
              <Button variant="contained" type="submit" color="primary">
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
