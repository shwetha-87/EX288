const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const suppliers = {
  "716-0161": {
    id: "716-0161",
    company_name: "Super portal",
    contact_name: "Vr Clean",
    phone: "(910) 555-5445"
  },
  "9001": {
    id: "9001",
    company_name: "Parcelite",
    contact_name: "John Smith",
    phone: "+1-555-1234"
  }
};

app.get("/supplier/:id", (req, res) => {
  const supplier = suppliers[req.params.id];

  if (!supplier) {
    return res.status(404).json({ message: "Supplier not found" });
  }

  res.json(supplier);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
