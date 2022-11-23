const express = require("express");
const servidor = express();

servidor.get("/", (req, res) => {
    return res.json({ message: "Continuarei brincando com as APIS, a ideia e implementar isso em um projeto ate o fim dessa semana" });
});

servidor.listen(3000, () => {
    console.log("O servidor esta on papai")
}
)