import express from "express";

const app = express();

const PORT = 3002;

app.get("/", (req,res) => res.json({
  message: "Hello from turbo-repo backend",
  success: true,
}));

app.get("/health", (req,res) => res.json({
  message: "Hello from health-check, everyhting is working fine",
  success: true,
}));

app.listen(PORT, ()=>{
  console.log("Server is running at - PORT:", PORT);
})


