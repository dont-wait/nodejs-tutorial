const app = require("./src/app");

const port = 6969

const server = app.listen(port, () =>{
    console.log(`hello ${port}`);
});

//phương thức duy trì sign in server
process.on('SIGINT', () =>{
    server.close(()=>{console.log("Exit server express")});
    
})