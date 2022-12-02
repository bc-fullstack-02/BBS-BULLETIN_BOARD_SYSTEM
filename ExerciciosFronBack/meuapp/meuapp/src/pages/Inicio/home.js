import React from "react";

import Nav from "../../Component/nave/navbar";
import CardUser from "../../Component/CardUSER/usercard";
import Input from "../../Component/Input/input";
import Login from "../../Component/login/login";
import Cadastrar from "../../Component/Cadastrar/cadastrar";
function Home() {
  return (
    <>
      <Nav />
      <Input />
      <CardUser />
      <Cadastrar />
      <Login />
    </>
  );
}
export default Home;