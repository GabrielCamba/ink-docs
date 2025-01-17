---
title: Testing with Chain Snapshot
hide_title: true
slug: /basics/contract-testing/chain-snapshot
---

<img src="/img/title/testing1.svg" className="titlePic" />

# Test End-to-End with Live Chain State

On this page we explain how to do test ink! contracts with the
fork (i.e. snapshot) of a live chain.

We'll use the [Chopsticks](https://github.com/AcalaNetwork/chopsticks) tool for this purpose.
In the first section of this page we explain the general concept, using a local
`substrate-contracts-node` that will play the role of our "live chain".
In the second section we explain how to use one of the big production chains.

## General Concept

First you need a node that has produced some blocks with state. We'll
use `substrate-contracts-node` for this purpose.
[See here](/5.x/getting-started/running-substrate/) for how to run it.

You should get output similar to:

```
$ substrate-contracts-node
2023-09-26 07:58:28.885  INFO main sc_cli::runner: Substrate Contracts Node    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: ✌️  version 0.30.0-124c159ba94    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: ❤️  by Parity Technologies <admin@parity.io>, 2021-2023    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: 📋 Chain specification: Development    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: 🏷  Node name: chilly-desire-6458    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: 👤 Role: AUTHORITY    
2023-09-26 07:58:28.887  INFO main sc_cli::runner: 💾 Database: ParityDb at /tmp/substrateoKCAts/chains/dev/paritydb/full    
2023-09-26 07:58:38.723  INFO main sc_rpc_server: Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["*"]  
```

Note that the node is running on port 9944.

Next, we'll create some state and produce a bunch of blocks. You can do this by deploying [our
`flipper` example](https://github.com/paritytech/ink-examples/tree/main/flipper):

```
cd ink-examples/flipper/
cargo build --release
cargo contract instantiate --suri //Alice --args true -x
```

You can check that the contract exists by querying its state via `cargo-contract`:

```json
$ cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s
Index | Root Key | Parent | Value                                                                                                            
0     | 00000000 | root   | Flipper { value: true } 
```

### Setup Chopsticks

We will now set up [Chopsticks](https://github.com/AcalaNetwork/chopsticks),
a powerful tool in our ecosystem that allows us to create a parallel reality
of an existing network.

We will run it and have it mirror the `substrate-contracts-node` that is already running
on our machine from the previous step. 

Clone chopsticks:

```
git clone https://github.com/AcalaNetwork/chopsticks
```

Modify the `dev.yml` config file in the cloned repository (or create one from scratch) :

```
endpoint: ws://127.0.0.1:9944
mock-signature-host: true
block: 1
db: ./db.sqlite
```

:::info
In the example above chopsticks will be mirroring up until block 1 from the
`substrate-contracts-node`. For real world use case you would want to use a
different block number and this is the place where you can configure other
variables such as a sudo key. Read the chopsticks docs for more info.
:::

You can either run chopsticks locally by following the instructions here:
- https://github.com/AcalaNetwork/chopsticks#install

Or you can run chopsticks using npx:

```
npx @acala-network/chopsticks@latest --config=configs/dev.yml
```

You should get output similar to:

```
npx @acala-network/chopsticks@latest --config=configs/dev.yml
[08:22:31.231] INFO (rpc/3037748): Development RPC listening on port 8000
```

The Chopsticks node is running on port 8000.
If you now execute the `cargo-contract` storage command against this node, you'll see
that the `flipper` contract exists there as well:

```
cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s --url=ws://localhost:9944
Index | Root Key | Parent | Value                                                                                                            
0     | 00000000 | root   | Flipper { value: true }
```

Recap: We have our "live" `substrate-contracts-node` running on port 9944
and our test node with the branched state running on port 8000.
You can now submit transactions to the node on port 8000, without affecting
the node on port 9944.

### Run ink! e2e tests

Next we would like to run some tests against this contract. 
Add this code to the `flipper` example:

```rust
TODO
```

Let's now run our flipper integration tests against the Chopsticks node :

```
CONTRACTS_NODE_URL=ws://127.0.0.1:8000 cargo test --features e2e-tests
```

:::info
Notice how we use the `CONTRACTS_NODE_URL` environment variable to specify where our
Chopsticks node is running. This is essential.
:::

You will get output similar to the following:

```
running 4 tests
test flipper::e2e_tests::foobar ... ok
```

Success! We just ran ink! integration tests against live chain state!