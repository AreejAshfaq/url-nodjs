const express = require("express");
//import Express: This line import the express framework which simlifies buldingweb server in node.js
const data = require("./MOCK_DATA.json")
//Load data:This line import data from MOCK_DATA.json,which presumably contaies user information
const port = 8000;
//define port:Sets the port number (8000) where the server will listen for incoming requests.
const app = express();
//Initializes a new Express application instance, which will handle requests and responses.
app.get('/users', (req,res)=>{// render te HTML file 
    /* Defines a route for GET requests to the /users endpoint. 
    The callback function (req, res) is executed when this endpoint is accessed. */
    const html = `
    <li>
    ${users.map(user =>`<li>   name =  ${user.first-email } </li>`).join('')}
    </li>
    
    `;
    /*Creates an HTML string. It maps over the data array to generate a list of users,
     displaying their names and emails.
     The results are joined into a single string.*/
        return res.send(html);
        //ends the generated HTML back to the client as a response.
    })
app.route("/users/:id")
//ends the generated HTML back to the client as a response.
.get((req, res) =>  {
    //ends the generated HTML back to the client as a response.

    const id = parseInt(req.params.id);
    //Retrieves the user ID from the request parameters and converts it to an integer.
    const user = data.find(user => user.id === id);
//Searches for a user in the data array whose ID matches the one provided in the URL

    const html = `
    <ul>    
        <li>${user.email}</li>
    </ul>
    `;
 //If the user exists, creates an HTML string displaying the user's name and email.
    res.send(html)
    // Sends the HTML response to the client if the user is found.
}).post((req, res ) => {})
//If no user is found, sends a 404 error response indicating the user was not found.
.post((req, res ) => {})
//Defines a route for handling POST requests to create a new user (functionality not yet implemented).
.patch((req, res ) => {})
//
.delete((req, res ) => {})
//efines a route for handling DELETE requests to delete a use


app.listen(port , () => console.log("Server is started: " + port));
/*Starts the server and listens for incoming requests on the specified port (8000).
 Logs a message to the console confirming the server is running.*/