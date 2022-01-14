const express = require("express");

const app = express();

app.get('/api/ricottacheesecake', (req, res) => {
    const ingredients = [
    {amount :'226g', ingredient:'cream cheese, room temp' },
    {amount :'3/4 cup', ingredient:'sugar'},
    {amount :'1/4 teaspoon', ingredient:'salt' },
    {amount :'900g', ingredient:'ricotta, whole milk'},
    {amount :'3', ingredient:'eggs' },
    {amount :'1 tablespoon', ingredient:'cornstarch' },
    {amount :'1 teaspoon', ingredient:'vanilla'},
    {amount :'2 teaspoons ', ingredient:'orange zest' },
    ];
    res.json(ingredients);
});
const port = 4000;


app.listen(port, () => console.log(`Server started on port ${port}`))