require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes
const holdingsRoute = require("./Routes/HoldingsRoute");
const positionsRoute = require("./Routes/PositionsRoute");
const ordersRoute = require("./Routes/OrdersRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Use routes
app.use("/holdings", holdingsRoute);
app.use("/positions", positionsRoute);
app.use("/orders", ordersRoute);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ DB connected"))
  .catch((err) => console.error("❌ DB error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
