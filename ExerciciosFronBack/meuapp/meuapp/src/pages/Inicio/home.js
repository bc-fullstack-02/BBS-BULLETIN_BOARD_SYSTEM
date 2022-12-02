import React, { useState } from "react";

import Nav from "../../Component/nave/navbar";
import CardUser from "../../Component/CardUSER/usercard";
import Input from "../../Component/Input/input";
import ModalControllerLogin from "../../Component/MODALCONTOLLERLOGIN/modal";
function Home() {
/*esconder e mostrar o modal*/
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Nav />
      <Input />
      <CardUser />
      
    {isModalOpen ? <ModalControllerLogin /> : null}
    </>
  );
}
export default Home;