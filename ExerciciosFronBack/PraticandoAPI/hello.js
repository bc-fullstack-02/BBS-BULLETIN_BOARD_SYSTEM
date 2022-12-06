import  Express  from "express";
const app = Express();
const port = 3008;

app.use(Express.json());
app.set("json spaces", 5);
app.get("/", (req, res) => {
    res.json({ 
        "name": "bene",
        "lastname": "silva",
        "age": 25,
        "city": "Nova Odessa",
        "state": "SP",
        "country": "Brasil",
        "id": 1

     });
    
}
);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
