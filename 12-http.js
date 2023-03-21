const http = require('http');

// fucntion known as the calling function 
// req - parameter refers to the request from the server 
// res - giving response from the page to server
const server = http.createServer(function(req,res){
    if(req.url === '/'){
        res.end("welcome to our page")
    }
    else if(req.url === '/about'){
        res.end("here it is about page")
    }
    // console.log(req); will give details explaantion of the 
    // res.write("welcoem to home page");
    else{
    res.write(`<h1>Opps</h1>
    <p> no it's not their</p>
    <a href="/">back home </a>` //if other than url entered the we created a default page that go back to the home page
    );
    res.end()}
})
server.listen(5000);
// cretedServer will listen to the port number 5000 we can whatever number u want