const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User');

const app = express();
// app.use(express.json());
app.use(cors());
// app.use(cors(
//     {
//         origin:["https://register-steel.vercel.app/"],
//         methods:["POST","GET"],
//         credentials:true
//     }
// ));
app.use(express.json());


function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}


const secretKey = generateRandomString(32);
// console.log(secretKey);


// Connecting database
// mongodb+srv://aayush:<password>@cluster0.98y3e5b.mongodb.net/
// mongoose.connect('mongodb://localhost:27017/Quantum', {
mongoose.connect('mongodb+srv://aayush:root@cluster0.98y3e5b.mongodb.net/Quantum', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((data) => {
    console.log("mongodb connnected succesffully");
}).catch((err) => {
    console.log(err);
})

// Register API
app.post('/register', async (req, res) => {
    try {
        const { name, dob, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            dob,
            email,
            password: hashedPassword,
        });

        await user.save();

        const token = jwt.sign({ userId: user._id }, 'secretKey');
        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Login API
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, 'secretKey');
        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
