const express = require("express");
const data = require("./MOCK_DATA.json")

const port = 8000;
const app = express();

app.get('/users', (req,res)=>{// render te HTML file 
    const html = `
    <li>
    ${users.map(user =>`<li>   name =  ${user.first-email } </li>`).join('')}
    </li>
    
    `;
        return res.send(html);
    })
app.route("/users/:id")
.get((req, res) =>  {

    const id = parseInt(req.params.id);
    const user = data.find(user => user.id === id);


    const html = `
    <ul>    
        <li>${user.email}</li>
    </ul>
    `;

    res.send(html)
}).post((req, res ) => {})
.post((req, res ) => {})
.patch((req, res ) => {})
.delete((req, res ) => {})



app.listen(port , () => console.log("Server is started: " + port));
 