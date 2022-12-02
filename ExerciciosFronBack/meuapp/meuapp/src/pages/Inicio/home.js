import React from "react";
 
import Nav from "../../Component/nave/navbar";
import CardUser from "../../Component/CardUSER/usercard";
import Input from "../../Component/Input/input";
import Login from "../../Component/login/login";
function Home() {
  return (
    <>
      <Nav />
      <Input />
      <CardUser />
      <Login />        
      </>
  );
}
export default Home;