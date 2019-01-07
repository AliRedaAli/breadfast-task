import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Appbar from './Components/Appbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from './Components/Pages/List';
import Details from './Components/Pages/Details';
import { withStyles } from '@material-ui/core/styles';
import CartDrawer from './Components/Partials/CartDrawer';

const styles = {
  AppContainer: {
    marginTop: 25,
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <CssBaseline />
        <Router>
          <Fragment>
            <Appbar/>
            <CartDrawer/>
            <Grid
              className={classes.AppContainer}
              container
              direction="row"
              justify="center"
              alignItems="center">

                <Grid 
                  item 
                  xs={8}>
                                    
                    <Route exact  path="/" component={List} />

                    <Route path="/product/:id" component={Details} />
                                    
                  </Grid>
                
                </Grid>
            
            
          </Fragment>
        </Router>        
      </Fragment>      
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
