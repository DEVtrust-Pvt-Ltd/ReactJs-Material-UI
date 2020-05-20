import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    imageWrap: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(2.6),
        paddingBottom: theme.spacing(2.6),
        paddingRight: theme.spacing(8.6),
        paddingLeft: theme.spacing(8.6),
    },
    thumbnail: {
        position: "relative",
        marginRight: theme.spacing(3),
    },
    thumbnailImages: {
        overflow: 'auto',
        display: 'flex',
        marginTop: theme.spacing(3.6),
    }
}));

export const Gallery = ({ products }) => {
    const classes = useStyles();
    const [image, setImage] = React.useState('');

    const onProductClick = (id) => {
        const imageUrl = products.find(product => product.id === id).imageUrl;
        setImage(imageUrl)
    }
    return (
        <Box>
            <Box className={classes.imageWrap}>
                <img
                    src={image && image || products[0].imageUrl}
                    width='455px'
                    height='410px'
                    alt="Images"
                    role="presentation"
                />
            </Box>
            <Box className={classes.thumbnailImages}>
                {products.map((product, index) => {
                    return (
                        products && <img
                            key={index}
                            className={classes.thumbnail}
                            src={product.imageUrl}
                            alt="Images"
                            onClick={(e) => onProductClick(product.id)}
                            role="presentation"
                            width='80px'
                            height='70px'
                        /> || null
                    )
                })}
            </Box>
        </Box>
    );
};

Gallery.propTypes = {
    products: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.shape({})),
    ]),
};

Gallery.default = {
    products: [],
};

export default Gallery;
