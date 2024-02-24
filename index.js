const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from dev server');
    }
);

app.get('/newFeature', (req, res) => {
    res.send('Hello World from new feature');
    }
);

app.get('/newFeature-from-ec2', (req, res) => {
    res.send('Hello World from new feature');
    }
);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);
