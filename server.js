const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ msg: "azure-node-windows-yarn-berry" });
});

app.listen(port, () => console.log(`Application is listening on port: ${port}`));
