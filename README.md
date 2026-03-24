# Docker Compose Demo — Nginx + Node.js

A production-style Docker Compose setup with Nginx as reverse proxy and Node.js as the backend application.

## Architecture
```
User Request
     ↓
Nginx (Port 80) — Reverse Proxy
     ↓
Node.js App (Port 3000)
```

## Services

- **nginx-proxy** — Nginx reverse proxy, forwards traffic to Node.js app
- **nodeapp** — Node.js HTTP server serving hostname and timestamp

## How to Run
```bash
# Clone the repo
git clone git@github.com:rehan0022/docker-compose-demo.git
cd docker-compose-demo

# Start all services
docker-compose up -d

# Check status
docker-compose ps

# Test
curl http://localhost:80
```

## What I Learned

- Writing Dockerfiles with multi-stage builds
- Docker networking — bridge network between containers
- Nginx as reverse proxy to Node.js backend
- Managing multi-container apps with Docker Compose
- Volume mounting for config files

## Author

Rehan | Mumbai | Ex-SysAdmin → DevOps Engineer
