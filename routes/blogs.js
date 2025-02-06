const express = require('express');
const blog = express.Router();

const Blog = require('../models/blogs');

// Route to display all blogs & form
blog.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 }); // Fetch blogs sorted by latest first
        res.render('blogs', { 
            title:'Blogs',
            blogs
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

blog.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        const t = blog.title;
        if (!blog) {
            return res.status(404).send('Blog Not Found');
        }
        res.render('blog-detail', { 
            title:t,
            blog,
            // layout: false
        }); // Render the detailed view
    } catch (err) {
        console.error("Error fetching blog:", err);
        res.status(500).send('Server Error');
    }
});

// Route to handle new blog submission
blog.post('/add', async (req, res) => {
    try {
        const { title, content, author } = req.body;
        if (!title || !content || !author) {
            return res.status(400).send('All fields are required.');
        }

        const newBlog = new Blog({ title, content, author });
        await newBlog.save();
        res.redirect('/blogs'); // Redirect to blog list after submission
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = blog;
