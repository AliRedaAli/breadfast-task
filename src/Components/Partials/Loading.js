import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

function Loading(props) {
    if(! props.isLoading){
        return null
    }

    return (
        <Grid 
        container 
        justify="center">
            <Grid item x={12}>
                <CircularProgress />
            </Grid>
        </Grid>  
    )

    
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default Loading;