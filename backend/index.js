const Express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const connectDatabase = require("./database/db");
const app = Express();

// Import the routes
const user = require("./controller/user");
const rute = require("./controller/rute");
// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

app.use(Express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Connect to database
connectDatabase();

// Create Server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`Shutting down the server unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});

app.use("/test", (req, res) => {
  res.send("Hello from the Backend!");
});

// The routes
app.use("/user", user);
app.use("/route", rute);
