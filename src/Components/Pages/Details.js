import React, { Component, Fragment } from 'react'
import { loadState } from "../../localstorage";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    width: 450,
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
       product:null
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
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={this.state.product.images}
              title="Contemplative Reptile"
            />
        </Card>
      </Fragment>
    )
  }
}
Details.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);