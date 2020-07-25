import React from "react";
import AddressForm from "./checkoutComponents/addressForm";
import Checkout from "./checkoutComponents/checkout";
import PaymentForm from "./checkoutComponents/paymentForm";

import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@material-ui/core";

function ShoppingCart(props) {
  const styles = {
    root: {
      flexGrow: 1
    },
    cardItem: {
      width: "80%",
      marginLeft: "10%"
    },
    text: {
      fontSize: "3rem"
    }
  };

  props.cartContents.forEach(item => {
  return (
    <Card style={styles.cardItem}>

      <CardContent>

        <Grid container spacing={2}>

          <Grid item xs={12}>
            <Typography style={styles.text}>Cart Contents</Typography>
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
        <Button variant="outlined" color="default">
          Checkout
        </Button>
      </CardActions>
    
    </Card>
  );
})};

export default ShoppingCart();