package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

type Shipper struct {
	ShipperID   string `json:"shipper_id"`
	CompanyName string `json:"company_name"`
	Phone       string `json:"phone"`
}

func shipperHandler(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Query().Get("id")

	if id == "8991" {
		response := Shipper{
			ShipperID:   "0901",
			CompanyName: "Parcellite",
			Phone:       "+1-487-555-9111",
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
		return
	}

	http.NotFound(w, r)
}

func main() {
	port := os.Getenv("SERVER_PORT")
	if port == "" {
		port = "8080"
	}

	http.HandleFunc("/shipper", shipperHandler)

	log.Printf("Server starting on port %s...", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
