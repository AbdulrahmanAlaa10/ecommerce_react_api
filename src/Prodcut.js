import React from 'react'
import useStyles from './style';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const Prodcut = ({product , onAddToCart}) => {
    // console.log(product);
    // return <div>test </div>
    const classes = useStyles();

    return (
        <>
        <div className={classes.root}>
            <img image={product.media.source} title={product.name} />
            <div>
            <div className={classes.cardContent}>
                <h2 >
                    {product.name}
                </h2>
                <h2 >
                    ${product.price.formatted}
                </h2>
                </div>
            </div>
            <div disableSpacing className={classes.cardActions}>
            <i aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                <h2>icon</h2>
            </i>
            </div>



        </div>
        </>
    )
}

export default Prodcut;
