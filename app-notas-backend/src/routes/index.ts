import { Router } from "express";
import Note from "../models/Note";

const router = Router();

// GET /api/notes
router.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.send(notes);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// POST /api/notes
router.post("/notes", async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.send(note);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// GET /api/notes/:id
router.get("/notes/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.send(note);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// PUT /api/notes/:id
router.put("/notes/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(note);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// DELETE /api/notes/:id
router.delete("/notes/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.send(note);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
