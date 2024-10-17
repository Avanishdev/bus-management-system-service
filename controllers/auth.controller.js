const Student = require('../models/student.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new student
exports.registerStudent = async (req, res) => {
    const { rollNumber, shift, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newStudent = new Student({ rollNumber, shift, password: hashedPassword });
        await newStudent.save();
        res.status(201).json({ message: 'Student registered successfully.' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login for students
exports.loginStudent = async (req, res) => {
    const { rollNumber, password } = req.body;

    try {
        const student = await Student.findOne({ rollNumber });
        if (!student || !(await bcrypt.compare(password, student.password))) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }
        const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
