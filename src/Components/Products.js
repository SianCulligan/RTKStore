import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Card,
  Button,
  CardMedia,
  Typography,
  CardActions,
  CardActionArea,
  CardContent
} from "@material-ui/core";

// import * as actions from "../store/storeAction";
// import axios from 'axios';
import { getCategories, addToCart } from "../rtk-store/productsReducer.js";
import { add } from "../rtk-store/cartReducer.js";

function Products(props) {
  const { getProducts } = props;
  let productsHTML = [];

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const styles = {
    image: {
      height: "200px"
    }
  };

  for (let i = 0; i < props.products.length; i++) {
    if (props.products[i].category === props.currentCategory)
      productsHTML.push(
        <Card
          key={props.products[i]._id}
          style={{
            maxWidth: 250,
            padding: "5px",
            borderColor: "primary",
            display: "inline-block"
          }}
        >
          <CardActionArea>
            <CardMedia
              style={styles.image}
              className="media"
              image={`https://source.unsplash.com/random?${
                props.products[i].name
              }`}
              title={props.products[i].name}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.products[i].name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.products[i].description}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button
              size="small"
              color="default"
              onClick={e => {
                props.addToCart(props.products[i]);
              }}
            >
              Add To Cart
            </Button>

            <Link to={`/details/${props.product[i]._id}`}>Details</Link>
          </CardActions>
        </Card>
      );
  }

  return <>{productsHTML} </>;
}

const mapStateToProps = state => {
  return {
    products: state.products.initProducts,
    currentCategory: state.categories.currentCategory,
    cartCount: state.cart.cartCount,
    cartContents: state.cart.cartContents
  };
};

const mapDispatchToProps = (dispatch, getState) => ({
  getProducts: data => dispatch(actions.getProducts(data)),
  addToCart: data => dispatch(actions.addToCart(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
