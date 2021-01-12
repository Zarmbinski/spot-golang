package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

type message struct {
	Message string `json:"message"`
}

type healthCheck struct {
	Status string `json:"status"`
}

func sayHello(w http.ResponseWriter, r *http.Request) {
	messageString := fmt.Sprintf("Hello World. I am %s", os.Getenv("NAME"))
	message := message{Message: messageString}
	log.Println(messageString)
	w.Header().Add("Content-Type", "application/json")
	json.NewEncoder(w).Encode(message)
}

func checkHealth(w http.ResponseWriter, r *http.Request) {
	response := healthCheck{Status: "UP"}
	log.Println("Just checking if I am healthy")
	json.NewEncoder(w).Encode(response)
}

func handleRequests() {
	http.HandleFunc("/", sayHello)
	http.HandleFunc("/health", checkHealth)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func main() {
	handleRequests()
}
