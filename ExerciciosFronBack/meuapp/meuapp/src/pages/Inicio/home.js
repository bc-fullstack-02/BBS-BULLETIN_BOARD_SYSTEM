import React from "react";

import Nav from "../../Component/nave/navbar";
import CardUser from "../../Component/CardUSER/usercard";
import Input from "../../Component/Input/input";
import ModalControllerLogin from "../../Component/MODALCONTOLLERLOGIN/modal";
function Home() {
  return (
    <>
      <Nav />
      <Input />
      <CardUser />
      <ModalControllerLogin />

    </>
  );
}
export default Home;