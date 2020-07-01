const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Blog = require("../models/blog");

router.get("/", (req, res, next) => {
  Blog.find()
    .select("title content id date image likes comments")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        blogs: docs.map((doc) => {
          return {
            title: doc.title,
            content: doc.content,
            id: doc.id,
            date: doc.date,
            image: doc.image,
            likes: doc.likes,
            comments: doc.comments,
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.header(500).json({ message: "DataBase Error on the Server" });
    });
});

router.post("/login", (req, res, next) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    id: new mongoose.Types.ObjectId(),
  });
  blog.save().then((result) => {
    res
      .status(201)
      .json({
        message: "New blog added Successfully!",
        createdNote: {
          title: result.title,
          content: result.content,
          id: result.id,
          date: result.date,
          image: result.image,
        },
      })
      .catch((err) => console.log(err));
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Blob.find()
    .exec()
    .then((docs) => {
      const response = {
        note: docs.filter((doc) => {
          if (doc.id === id) {
            return {
              id: doc.id,
              id: doc.id,
              content: doc.content,
            };
          } else {
            return;
          }
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete("/login/:id", (req, res, next) => {
  const id = req.params.id;
  Blog.remove({ id: id })
    .exec()
    .then((result) => {
      console.log(result);
      res.header(204).json({
        message: "Blog Deleted",
      });
    })
    .catch((err) => console.error(err));
});
router.patch("/login/:id", (req, res, next) => {
  const updateOps = req.body;
  console.log(req.body);
  Blog.findOneAndUpdate({ id: req.params.id }, { $set: updateOps })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: "Blog updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "I dont exist" });
    });
});
module.exports = router;
