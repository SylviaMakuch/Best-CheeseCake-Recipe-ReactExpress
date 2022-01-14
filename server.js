const express = require("express");

const app = express();

app.get('/api/ricottacheesecake', (req, res) => {
    const cheesecake = [
    {id: 1, amount :'226g', ingredient:'cream cheese, room temp' },
    {id: 2, amount :'3/4 cup', ingredient:'sugar'},
    {id: 3, amount :'1/4 teaspoon', ingredient:'salt' },
    {id: 4, amount :'900g', ingredient:'ricotta, whole milk'},
    {id: 5, amount :'3', ingredient:'eggs' },
    {id: 6, amount :'1 tablespoon', ingredient:'cornstarch' },
    {id: 7, amount :'1 teaspoon', ingredient:'vanilla'},
    {id: 8, amount :'combine', ingredient:'orange zest' },
    ];
    res.json(cheesecake);
});
const port = 4000;


app.listen(port, () => console.log(`Server started on port ${port}`))