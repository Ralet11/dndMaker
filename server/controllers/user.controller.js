import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Validate user input
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email, and password are required." });
        }

        // Check if the email is already registered
        const existingUser = await User.findOne({ where: { email: email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered." });
        }

        // Create a new user record in the database
        const newUser = await User.create({
            name: name,
            email: email,
            password: password
        });

        // Respond with the newly created user
        res.status(201).json(newUser);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    console.log("login")
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({where:{ email: email }});
        
        // Check if user exists
        if (!user) {
            return res.status(400).json({ message: "User not found." });
        }

        // Check if password is correct
        if (user.password !== password) {
            return res.status(401).json({ message: "Incorrect password." });
        }

        // Password is correct, respond with user details
        res.status(200).json(user);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: error.message });
    }
};