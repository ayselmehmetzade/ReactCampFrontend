import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  function handleSignOut() {
    setIsAuthenticated(false);
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary></CartSummary>
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut}></SignedIn>
            ) : (
              <SignedOut signIn={handleSignIn}></SignedOut>
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
