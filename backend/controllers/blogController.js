const mongoose = require("mongoose");
const Blogs = require("../models/blogModel");

exports.createBlog = async (req, res) => {
  const { title, body, author } = req.body;
  try {
    const blog = await Blogs.create({ title, body, author });
    res.status(200).json([blog, "created succesfully"]);
  } catch {
    res.status(400).json("failed to create");
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blog = await Blogs.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      blog,
    });
  } catch {
    res.status(400).json("failed to fetch");
  }
};

exports.getBlog = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json("can't find such id");
  }

  const blog = await Blogs.findById(req.params.id);

  if (!blog) {
    return res.status(400).json("can't find blog");
  }
  res.status(200).json([blog, "fetched succesfully"]);
};

exports.updateBlog = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json("can't find such id");
  }

  const blog = await Blogs.findOneAndUpdate(
    { _id: req.params.id },
    { ...req.body }
  );

  if (!blog) {
    return res.status(400).json("can't find the blog");
  }
  res.status(200).json([blog, "updated succesfully"]);
};

exports.deleteBlog = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json("can't find such id");
  }

  const blog = await Blogs.findOneAndDelete({ _id: req.params.id });
  if (!blog) {
    res.status(400).json("error deleting");
  }
  res.status(200).json("deleted succesfully");
};
