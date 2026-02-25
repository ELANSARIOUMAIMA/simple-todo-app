import express from "express";
import mongoose from "mongoose";
import path from "path";

const app = express();

// Serve static files from public/
app.use(express.static(path.join(process.cwd(), "index.html")));
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://admin:password@localhost:27017/tododb?authSource=admin")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Task schema
const taskSchema = new mongoose.Schema({ title: String });
const Task = mongoose.model("Task", taskSchema);

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "index.html"));
});

// Get all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Add a task
app.post("/tasks", async (req, res) => {
  const task = new Task({ title: req.body.title });
  await task.save();
  res.json(task);
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send({ message: "Task deleted" });
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));