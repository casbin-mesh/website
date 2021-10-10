---
sidebar_position: 2
---

# Install with Docker

In this guide, we will get Casbin Mesh running in a local docker environment with the demo configuration.

### Running single node with the demo configuration

```bash
 $ docker pull ghcr.io/wenyxu/casbin-mesh:latest
 // TODO: update later
 $ docker run -it -p 4002:4002 --name=casbin_mesh_single ghcr.io/wenyxu/casbin-mesh:latest
```

### Running a replica set

```yaml title="docker-compose.yaml"
version: "3"
services:
  node0:
    image: ghcr.io/wenyxu/casbin-mesh:latest
    command: >
      -node-id node0
      -raft-address 0.0.0.0:4002
      -raft-advertise-address node0:4002
      -endpoint-no-verify
    ports:
      - "4002:4002"
    volumes:
      - ./store/casbin/node1:/casbin_mesh/data
  node1:
    image: ghcr.io/wenyxu/casbin-mesh:latest
    command: >
      -node-id node1
      -raft-address 0.0.0.0:4002
      -raft-advertise-address node1:4002
      -join http://node0:4002
      -endpoint-no-verify
    ports:
      - "4004:4002"
    volumes:
      - ./store/casbin/node2:/casbin_mesh/data
    depends_on:
      - node0
  node2:
    image: ghcr.io/wenyxu/casbin-mesh:latest
    command: >
      -node-id node2
      -raft-address 0.0.0.0:4002
      -raft-advertise-address node2:4002
      -join http://node0:4002
      -endpoint-no-verify
    ports:
      - "4006:4002"
    volumes:
      - ./store/casbin/node3:/casbin_mesh/data
    depends_on:
      - node0
```

```
$ docker-compose up
```
