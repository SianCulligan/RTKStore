import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/storeAction";
import {
  Card,
  Button,
  CardMedia,
  Typography,
  CardActions,
  CardActionArea,
  CardContent
} from "@material-ui/core";

function Details(props) {
  useEffect(() => {
    props.getOneProduct(props.match.params.id);
  }, [props]);

  return (
    <div>
      Details for <h5>{props.product.name}</h5>
      <Card>
        <CardActionArea>
          <CardMedia
          // style={styles.image}
          // className="media"
          // image={`https://source.unsplash.com/random?${props.products[i].name}`}
          // title={props.products[i].name}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {/* {props.products[i].name} */}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {/* {props.products[i].description} */}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions />
      </Card>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    product: state.products.activeProduct
  };
};

const mapDispatchToProps = (dispatch, getState) => ({
  getOneProduct: id => dispatch(actions.getOneProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
