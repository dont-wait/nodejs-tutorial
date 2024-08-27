const app = require("./src/app");

const port = 6969

const server = app.listen(port, () =>{
    console.log(`hello ${port}`);
});

process.on('SIGINT', () =>{
    server.close(()=>{console.log("Exit server express")});
})