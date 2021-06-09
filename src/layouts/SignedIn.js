import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2021/01/17/562651-1688694701.jpg?itok=niab7Qe7"
        ></Image>
        <Dropdown pointing="top left" text="Aysel">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
            <Dropdown.Item
              onClick={signOut}
              text="Çıkış Yap"
              icon="sign-out"
            ></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
