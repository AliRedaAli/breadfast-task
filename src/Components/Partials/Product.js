import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        objectFit: 'cover',
    },
};

class Product extends Component {
      
  render() {
    const { classes,product } = this.props;

    return (
        <Grid item xs={1} md={4}>
          <Link to={`/product/${product.id}`}>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            className={classes.media}
                            height="140"
                            image={product.images}
                            title={product.name}
                        />
                        <CardContent>
                            <Typography gutterBottom component="p">
                                {product.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Link>
        </Grid>
    )
  }
}

Product.propTypes = {
    classes: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);

