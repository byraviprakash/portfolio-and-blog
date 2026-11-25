---
title: "My Kubernetes Learning Path"
description: "The core Kubernetes concepts I am studying, in the order that makes them easier to understand."
pubDate: 2026-11-24
category: "Kubernetes"
tags: ["Kubernetes", "DevOps"]
draft: false
---

Kubernetes helps deploy, scale, and manage containerized applications.

## Concepts to learn first

1. **Cluster:** the complete Kubernetes environment.
2. **Node:** a machine that runs workloads.
3. **Pod:** the smallest deployable unit; it can contain one or more containers.
4. **Deployment:** manages application replicas and rolling updates.
5. **Service:** provides a stable network endpoint for a set of Pods.
6. **Ingress:** manages HTTP and HTTPS access from outside the cluster.

## Start with this command

```bash
kubectl get nodes
```

This displays the nodes registered in the current Kubernetes cluster.

## Keep learning practical

Deploy a small application, expose it through a Service, scale the Deployment, and inspect what changes. Hands-on practice makes the relationships between these resources much clearer.
