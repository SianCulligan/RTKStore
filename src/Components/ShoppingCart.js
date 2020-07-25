import React from "react";
import { connect } from "react-redux";

import AddressForm from "./checkout/addressForm.js";
import Checkout from "./checkout/checkout.js";
import PaymentForm from "./checkout/paymentForm.js";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@material-ui/core";

//grid reference: https://material-ui.com/components/grid/

function ShoppingCart(props) {
  let cost = 0;
  let cartContents = [];

  const styles = {
    gridItem: {
      margin: "7px",
      padding: "5px"
    },
    cardItem: {
      margin: "0px auto",
      width: "40%"
    }
  };

  props.cartContents.forEach(item => {
    cost += item.cost;

    cartContents.push(
      <Grid container style={styles.gridItem}>
        <Grid item xs={6}>
          {item.name}
        </Grid>

        <Grid item xs={6}>
          ${item.cost}
        </Grid>
      </Grid>
    );
  });

  cartContents.push(
    <Grid container style={styles.gridItem}>
      <Grid item xs={6}>
        Total owed:
      </Grid>

      <Grid item xs={6}>
        <Typography>${cost}</Typography>
      </Grid>
    </Grid>
  );
  return (
    <Card>
      <CardContent styles={styles.cardItem}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2">Cart Contents</Typography>
          </Grid>
          <Grid item xs={12}>
            {cartContents}
          </Grid>
          <Grid item xs={3}>
            <AddressForm />
          </Grid>

          <Grid item xs={3}>
            <PaymentForm />
          </Grid>

          <Grid item xs={3}>
            <Checkout />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Place My Order.</Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    cartContents: state.cart.cartContents
  };
};

export default connect(mapStateToProps)(ShoppingCart);
