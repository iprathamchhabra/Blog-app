const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
app.use(bodyParser.json());

let posts=[
    {id:1, title:'First Post', content:'Sample Content '},
    {id:2, title:'Second Post', content:'Sample Content '}
];
app.get('/posts', (req, res) => {
    res.json(posts);
});

app.post('/posts', (req, res) => {
    const {title, content} = req.body;
    const newPost = {id:posts.length+1, title, content};
    posts.push(newPost);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});