---
title: "Docker: The Basics"
description: "A short introduction to containers, images, and the commands you'll use every day."
pubDate: 2026-11-25
category: "Docker"
tags: ["Docker", "Containers", "DevOps"]
draft: false
---

Docker helps package an application and its dependencies into a container so it can run consistently across environments.

## Image vs container

- **Image:** the packaged template used to create containers.
- **Container:** a running instance of an image.

## Useful starter commands

```bash
# Download an image
docker pull nginx

# List downloaded images
docker images

# Run a container in the background
docker run -d -p 8080:80 --name my-nginx nginx

# List running containers
docker ps
```

Open `http://localhost:8080` to see the Nginx welcome page.

## A useful mental model

Think of an image as a class and a container as an object created from that class. You can create multiple containers from the same image.
