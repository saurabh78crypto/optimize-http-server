# Optimize HTTP Server

This project implements a simple HTTP server using Node.js (Express) and Dockerized for both ARM and x86 architectures.

## Project Structure

+ /tmp
    + /data
        + 1.txt
        + 2.txt
        + ...
        + n.txt
+ /src
    + server.js
+ Dockerfile
+ package.json


## Requirements

- Node.js
- Docker

## Installation

1. Clone the repository:

   ```bash
   https://github.com/saurabh78crypto/optimize-http-server.git
   cd optimize-http-server

2. Generate random text files for development purposes:
    fsutil file createnew tmp\data\1.txt 104857600
    fsutil file createnew tmp\data\2.txt 104857600
    Repeat for other files

3. Build the Docker image:

    docker build -t optimize-http-server .

# Usage

Run the Docker container:
    docker run -p 8080:8080 --memory=1500m --cpus=2 optimize-http-server
