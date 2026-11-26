---
title: "Saga Pattern in ASP.NET Core Microservices"
description: "What a saga is, choreography vs orchestration, when to switch to orchestration, and how to build sagas in ASP.NET Core with MassTransit, including options for Google Pub/Sub and GKE."
pubDate: 2026-11-26
category: "Backend"
tags: ["Microservices", "Saga Pattern", "ASP.NET Core", "MassTransit", "Google Pub/Sub", "GKE"]
draft: false
---

## What a saga is

A saga runs one business transaction across several microservices, each with its own database, without a distributed transaction. It is a chain of local transactions; if a step fails, earlier steps are undone with **compensating actions**.

**Example:** an order checkout that reserves stock, takes payment and books shipping. If shipping fails, the saga refunds the payment and releases the stock.

## Choreography vs orchestration

Choreography suits short, simple flows; orchestration suits multi-step, business-critical flows with rollbacks.

| | Choreography | Orchestration |
|---|---|---|
| **How it works** | Each service listens for events and reacts on its own | A central coordinator tells each service what to do next |
| **Best for** | 2–4 services, straight sequence, no rollback | Many steps, branching, timeouts, ordered compensations |
| **Example** | Order placed → reduce stock → send email | Reserve stock → take payment → book shipping → refund if shipping fails |
| **Strength** | Loose coupling, nothing centralized | Whole flow and its state in one place; easy to monitor |
| **Weakness** | No single view of the flow; hard to debug as it grows | The orchestrator is a central piece to maintain |

Mixed systems often use both: an orchestrator for the core path (order, payment, shipping) and choreography for side effects (emails, notifications, analytics).

## When to switch to orchestration

There is no hard rule; these are guidelines. If even one applies to a flow, use orchestration for it:

1. More than about 4–5 services in one flow.
2. Compensations must run in a strict order (e.g. refund before releasing stock).
3. Timeouts, waiting or branching (e.g. cancel if payment isn't confirmed in 15 minutes).
4. The business needs one place to see each transaction's status ("where is order 123 stuck?").
5. Services start listening to many events just to know what to do next — hidden coupling.

### Quick tests

- If something fails halfway, does anything need to be undone? Yes → **orchestration**.
- Can't draw the whole flow from memory in a minute? → **orchestration**.

In enterprise systems, most core business flows end up orchestrated; choreography is mostly for simple side reactions.

## MassTransit

MassTransit is a .NET messaging library and the most common way to build sagas in ASP.NET Core. You define message classes and consumers in C#; it handles sending, receiving, retries, error queues and serialization.

> **Licensing note:** MassTransit v8 is free and open source. From v9, MassTransit is a commercial product that needs a license; earlier versions remain available under the open-source license.

- **Sagas:** the state machine saga defines states, events and compensations in C#, with saga state stored in SQL Server or PostgreSQL.
- **Transports:** RabbitMQ, Azure Service Bus, Amazon SQS/SNS, ActiveMQ, Kafka (via Riders), SQL transport (SQL Server / PostgreSQL), in-memory.
- **Alternative:** NServiceBus.

## Google Pub/Sub and GKE options

MassTransit has no official Google Pub/Sub transport, and the maintainers have said there are no plans to add one (see the GitHub discussions below). Community packages exist but aren't well maintained.

| Option | How | Trade-off |
|---|---|---|
| **RabbitMQ in the GKE cluster** | MassTransit + RabbitMQ transport | Full saga support; you run and maintain the broker |
| **SQL transport** | MassTransit over SQL Server / PostgreSQL | No extra broker; database carries the message load |
| **Stay on Pub/Sub** | Google's .NET Pub/Sub client | No MassTransit; write saga state and compensations yourself |

## Sources

- [MassTransit documentation](https://masstransit.io/documentation)
- [MassTransit on NuGet (licensing)](https://www.nuget.org/packages/MassTransit)
- [GitHub discussion #5266 — new transports (Google PubSub, Dapr, NATS)](https://github.com/MassTransit/MassTransit/discussions/5266)
- [GitHub discussion #2161 — native Google PubSub support](https://github.com/MassTransit/MassTransit/discussions/2161)
