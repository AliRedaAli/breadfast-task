import React, { Component, Fragment } from 'react';
import Product from '../Partials/Product';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {FetchProducts} from '../../Actions/productActions';
import Loading from '../Partials/Loading';
class List extends Component {
  
  componentWillMount(){
    this.props.FetchProducts();  
  }

  render(){
    const products = this.props.products.map((product) => (
        <Product key={product.id} product={product}/>
    ));
    return (
      <Fragment>
        <Loading isLoading={this.props.products.length <= 0}/>
        <Grid 
          container 
          justify="flex-start"
          spacing={24}>
          {products}
        </Grid>
      </Fragment>
    );
  }

}

const mapStateToProps = (state)=>({
  products:state.products
})

export default connect(mapStateToProps,{FetchProducts})(List)