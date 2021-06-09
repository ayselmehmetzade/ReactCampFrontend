import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList}></Route>
            <Route exact path="/products" component={ProductList}></Route>
            <Route path="/products/:id" component={ProductDetail}></Route>
            <Route path="/cart" component={CartDetail}></Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
