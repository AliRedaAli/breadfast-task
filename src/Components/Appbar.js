import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};

class Appbar extends Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Breadfast Task
            </Typography>
            <Button size="small" color="inherit">
              Products List
            </Button>
            <Button size="small" color="inherit">View Cart</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Appbar);
