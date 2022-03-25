const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

const CompanyRoutes = require("./routes/company.routes");
const AuthRoutes = require("./routes/auth.routes");
const UserRoutes = require("./routes/user.routes");

app.use(express.json());
app.use(cors());

app.use("/auth", AuthRoutes);
app.use("/company", CompanyRoutes);
app.use("/user", UserRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
