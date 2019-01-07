import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import { toggleDrawer,removeCart } from "../../Actions/cartActions";
import Drawer from '@material-ui/core/Drawer';
import { List, Divider, ListItem, ListItemText, Grid, Typography, IconButton, Button, Fab  } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';

class CartDrawer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         totalPrice:0
      }
    }
    
    toggleCart = () =>{
        this.props.toggleDrawer()
    }
    
    removeCart = (id) =>{
        this.props.removeCart(id)
    }

    render() {
        const cartList = (
            <div>
              <List>
                {this.props.cart.map((product) => (
                    <Fragment key={product.id}>
                        <ListItem>
                            <Grid container direction="row">
                                <Grid item xs={4}>
                                    <img alt="" width="100px" src={product.images} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography component="p" variant="caption" >
                                        {product.name}
                                    </Typography>
                                    <ListItemText primary={Number(product.price).toFixed(2).toLocaleString() + ' x ' + product.qty} />
                                </Grid>
                                <Grid item xs={1}>
                                    <ListItemText primary={parseInt(product.qty) * parseInt(product.price)} />
                                </Grid>
                                <Grid item xs={1}>
                                    <Fab onClick={()=>{this.removeCart(product.id)}} size="small" color="secondary" aria-label="Remove">
                                        <RemoveIcon />
                                    </Fab>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <Divider />
                    </Fragment>
                ))}
              </List>
            </div>
          );
          const cartTotal = (
            <List>
            <ListItem>
                <Grid container direction="row">
                    <Grid item xs={6}>
                        <Typography component="h3" variant="h5">
                            Total:
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    {
                        this.props.cart.reduce((total,product)=>(
                            total + parseFloat(product.price) * parseInt(product.qty)
                        ),0)
                    }
                    </Grid>
                </Grid>
            </ListItem>

            </List>
          )
          const emptyCart = (
            <Fragment>
                <Grid container direction="column" justify="center">
                    <Grid item xs={12}>
                        <ShoppingCartIcon style={{fontSize:200 , color:"#eeeeee"}}/>
                    </Grid>
                    <Grid item xs={12} ali>
                        <Typography  align="center" component="h3" variant="title">
                            Cart is Empty
                        </Typography>
                    </Grid>

                </Grid>
            </Fragment>
          )

          const cart = () => {
              if(this.props.cart.length){
                  return (
                    <Fragment>
                        {cartList}
                        {cartTotal}
                    </Fragment>
                  )
              }else{
                  return (
                    <div style={{padding:10}}>

                      {emptyCart}
                    </div>
                  )
              }
          }
          return (
            <Drawer anchor="right" open={this.props.cartOpened} onClose={this.toggleCart}>
                {cart()}
            </Drawer>
        )
    }
}

const mapStateToProps = (state)=>({
    cartOpened:state.cartOpened,
    cart:state.cart
})
export default connect(mapStateToProps,{toggleDrawer,removeCart})(CartDrawer)