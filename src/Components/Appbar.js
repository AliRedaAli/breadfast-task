import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  cartIcon:{
    color:"#f5f5f5"
  },
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  }

});

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
            <Button size="small" component={Link} to="/" color="inherit">
              Products List
            </Button>

            <IconButton aria-label="Cart" className={classes.cartIcon}>
            <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

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
