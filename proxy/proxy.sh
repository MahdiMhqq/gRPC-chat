# Build step
docker build -t grpc-web-react .

# Run step
docker run -d --name grpc-web-react -p 8080:8080 -p 9901:9901 grpc-web-react