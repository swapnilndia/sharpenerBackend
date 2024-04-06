const express = require('express')
const bodyparser = require('body-parser')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())

function saveMessage(message) {
    const filePath = path.join(__dirname, 'message.txt')
    fs.appendFileSync(filePath, message + '\n')
}

app.get('/', (req, res) => {
    res.send('<form action="/submit" method="POST" ><input type="text" placeholder="Enter you name here" name="name" ></input><button type="submit">Login</button></form>')
})

app.post('/submit', async (req, res) => {
    const { name } = req.body;
    res.send(`
        <script>
            window.localStorage.setItem("name", "${name}");
            window.location.href = "/message";
        </script>
    `);
})

// app.get('/message', (req, res) => {
//     res.send(`
//         <html>
//             <head>
//                 <script>
//                     const name = window.localStorage.getItem("name");
                    
//                     function setSenderName() {
//                         document.getElementById('senderName').value = name;
//                     }
//                 </script>
//             </head>
//             <body onload="setSenderName()">
//                 <form action="/sendmessage" method="POST">
//                     <input type="hidden" id="senderName" name="name">
//                     <input type="text" placeholder="Enter your message here" name="message">
//                     <button type="submit">Send</button>
//                 </form>
//             </body>
//         </html>
//     `);
// });
app.get('/message', (req, res) => {
    // Read the content of the message.txt file
    const filePath = path.join(__dirname, 'message.txt');
    let messageContent = '';
    try {
        messageContent = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        console.error('Error reading message.txt:', err);
    }
    
    res.send(`
        <html>
            <head>
                <script>
                    const name = window.localStorage.getItem("name");
                    
                    function setSenderName() {
                        document.getElementById('senderName').value = name;
                    }
                </script>
            </head>
            <body onload="setSenderName()">
                <div>
                    <h3>Messages:</h3>
                    <pre>${messageContent}</pre>
                </div>
                <form action="/sendmessage" method="POST">
                    <input type="hidden" id="senderName" name="name">
                    <input type="text" placeholder="Enter your message here" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>
    `);
});


app.post('/sendmessage', (req, res) => {
    const body = req.body;
    saveMessage(`${body.name} => ${body.message}`)
    res.redirect('/message')
});


app.listen(3000, async () => {
    console.log('server is listening at PORT: 3000')
})

