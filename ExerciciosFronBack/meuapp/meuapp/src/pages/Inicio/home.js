import React, { useState } from "react";

import Nav from "../../Component/nave/navbar";
import CardUser from "../../Component/CardUSER/usercard";
import Input from "../../Component/Input/input";
import ModalControllerLogin from "../../Component/MODALCONTOLLERLOGIN/modal";
function Home() {
  /*esconder e mostrar o modal*/
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Nav openModal={openModal}/>
      <Input />
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
      



    
      {isModalOpen ? <ModalControllerLogin /> : null}
    </>
  );
}
export default Home;