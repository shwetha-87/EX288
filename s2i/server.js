const http = require("http");

const port = process.env.SERVER_PORT || 8080;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/shipper" && url.searchParams.get("id") === "8991") {
    const response = {
      shipper_id: "0901",
      company_name: "Parcellite",
      phone: "+1-487-555-9111"
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
