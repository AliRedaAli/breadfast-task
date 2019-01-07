import React, { Component, Fragment } from 'react'
import { loadState } from "../../localstorage";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from '@material-ui/core';

const styles = {
  card: {
  },
  media: {
    height: 300,
    backgroundSize:'contain'
  },
};

class Details extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       product:null,
       qty:1
    }
  }
  
  componentWillMount(){
    let localstorageState = loadState();
    if(localstorageState){
      this.setState({
        product: localstorageState.products.find((product)=>{
          return product.id == this.props.match.params.id
        })
      })  
    }
  }
  
  handleChange = event => {
    if(event.target.value > 0){
      this.setState({ qty: event.target.value });
    }
  };

  render() {
    const { classes } = this.props;
    const {product} = this.state;
    return (
      <Fragment>
        <Grid 
          container 
          justify="flex-start"
          spacing={24}>

            <Grid item xs={1} md={6}>

              <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={product.images}
                    title="Contemplative Reptile"
                  />
              </Card>
            
            </Grid>
            <Grid item xs={1} md={6}>
              <Typography component="h1" variant="h2" gutterBottom>
                {product.name}
              </Typography>
              <Typography component="p" variant="p" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat leo ut velit convallis lobortis.
              </Typography>
              <Typography component="h5" variant="h5" gutterBottom>
                Price: {Number(product.price).toFixed(2).toLocaleString()} EGP
              </Typography>
              <Grid container direction='row' alignItems='center'>
                <Grid item xs='6'>
                  <TextField
                    id="outlined-number"
                    label="QTY"
                    value={this.state.qty}
                    onChange={this.handleChange}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs='6'>
                  <Button variant="contained" color='primary'>
                    Add To Cart
                  </Button>
              </Grid>
              </Grid>
            </Grid>
        </Grid>
      </Fragment>
    )
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);