import React from "react";
import { connect } from "react-redux";

function ActiveCategory(props) {
  const styles = {
    categoryIs: {
      textAlign: "center",
      width: "100%",
      height: "100px",
      fontFamily: "Jolly Lodger",
      color: "white",
      fontSize: "3rem"
    }
  };
  return (
    <div>
      <h1 style={styles.categoryIs}>{props.currentCategory}</h1>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentCategory: state.categories.currentCategory
  };
}

export default connect(mapStateToProps)(ActiveCategory);
