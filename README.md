# Optimize HTTP Server

This project implements a simple HTTP server using Node.js (Express) and Dockerized for both ARM and x86 architectures.

## Project Structure


Certainly! Below is a simple README.md file to document your HTTP server implemented with Node.js (Express) and Dockerized for both ARM and x86 architectures.

markdown
Copy code
# Optimize HTTP Server

This project implements a simple HTTP server using Node.js (Express) and Dockerized for both ARM and x86 architectures.

## Project Structure

+/tmp
    +/data
        +1.txt
        +2.txt
        +...
        +n.txt
+/src
    +server.js
+Dockerfile
+package.json


## Requirements

- Node.js
- Docker

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/optimize-http-server.git
   cd optimize-http-server

2. Generate random text files for development purposes:

    dd if=/dev/urandom of=tmp/data/1.txt bs=1M count=100
    dd if=/dev/urandom of=tmp/data/2.txt bs=1M count=100
    # Repeat for other files

3. Build the Docker image:

    docker build -t optimize-http-server .

# Usage

Run the Docker container:
    docker run -p 8080:8080 --memory=1500m --cpus=2 optimize-http-server
