import functions from "@google-cloud/functions-framework";

functions.http("index", (req, res) => {
  res.send("Hello from the Cloud function");
});
