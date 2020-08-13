import React from "react";
import { connect } from "react-redux";
import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header(props) {
  const styles = {
    header: {
      top: 0,
      width: "80%",
      marginLeft: "10%",
      background:
        "linear-gradient(45deg, rgba(193, 228, 255, 0.61) 30%, rgb(247, 195, 167) 90%)",
      border: 0,
      marginBottom: "15px",
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(193, 228, 255, 0.61)",
      color: "white"
    },

    cart: {
      textDecoration: "none",
      color: "grey",
      fontFamily: "sans serif"
    }
  };

  return (
    <header>
      <Link to="/">
        <AppBar style={styles.header} color="primary" position="static">
          <Typography>
            <h1>Welcome to Diagon Alley</h1>
          </Typography>
        </AppBar>
      </Link>

      <Link to="/cart" style={styles.cart}>
        <p>Cart: ({props.cart.cartCount})</p>
      </Link>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Header);
