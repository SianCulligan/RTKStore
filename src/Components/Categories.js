import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, ButtonGroup } from "@material-ui/core";

import {
  getCategories,
  changeCategory
} from "../rtk-store/categoriesReducer.js";

function Categories(props) {
  const { getCategories, changeCategory } = props;

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  let categories = [];

  for (let i = 0; i < props.categories.length; i++)
    categories.push(
      <Button
        key={i}
        className={`${props.categories[i].name}`}
        onClick={e => {
          changeCategory(props.categories[i].name);
        }}
      >
        {props.categories[i].name}
      </Button>
    );

  return (
    <ButtonGroup variant="outlined" color="default">
      {categories}
    </ButtonGroup>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories.allCategories
  };
};

const mapDispatchToProps = { getCategories, changeCategory };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
