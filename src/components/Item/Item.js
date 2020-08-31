import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
/*import { connect } from "react-redux";
import { addItemInCart } from "../../Redux/Actions";
import { withRouter } from "react-router-dom";*/
import img from '../images/nike.jpg'

class ConnectedItem extends Component {
  render() {
    return (
      <Card
        style={{ width: 200, height: 270, margin: 10, display: "inline-block" }}
      >
        <CardActionArea
          onClick={() => {
            this.props.history.push("/details/" + this.props.item.id);
          }}
        >
          <CardMedia
            style={{ height: 140 }}
            //image={this.props.item.imageUrls[0]}
            image={img}
            aria-label="Bay now"
          />
          <CardContent style={{ height: 50 }}>
            <div
              style={{
                marginLeft: 5,
                fontWeight: "bold",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              Name
            </div>
            <div style={{ margin: 5 }}>Price: 999 $</div>
            
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{ display: "flex", alignItems: "center", height: '50px' }}
        >
          <Button
            size="small"
            style={{ marginRight: 22 }}
            onClick={() => {
              this.props.history.push("/details/" + this.props.item.id);
            }}
          >
            {" "}
            Details
          </Button>
          <Tooltip title="Bay now">
            <IconButton
              size="small"
              /*onClick={e => {
                e.stopPropagation();
                this.props.dispatch(
                  addItemInCart({ ...this.props.item, quantity: 1 })
                );
              }}*/
              color="primary"
              aria-label="Bay now"
            >
              BAY NOW
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    );
  }
}

//export default withRouter(connect()(ConnectedItem));
export default ConnectedItem;
