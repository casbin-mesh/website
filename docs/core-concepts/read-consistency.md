---
sidebar_position: 6
---

# Read Consistency

Even though serving queries(enforce) does not require Raft consensus (because the states is not changed). Because, without this check, queries on a node could return results that are out-of-date i.e. stale. This could happen for one, or both, of the following two reasons:

- The node, while still part of the cluster, has fallen behind the Leader in terms of updates to its underlying database.
- The node is no longer part of the cluster, and has stopped receiving Raft log updates.

This is why casbin-mesh offers selectable read consistency levels of none, weak, and strong. Each is explained below.

### None

With none, the node simply queries its local enforcer states, and does not care if it's a Leader or Follower. This offers the fastest query response, but suffers from the potential issues listed above.

#### Limiting read staleness

You can tell the node not return results (effectively) older than a certain time, however. If a read request sets the query parameter freshness to a Go duration string, the node serving the read will check that less time has passed since it was last in contact with the Leader, than that specified via freshness. If more time has passed the node will return an error. freshness is ignored for all consistency levels except none, and is also ignored if set to zero.

If you decide to deploy read-only nodes however, none combined with freshness can be a particularly effective at adding read scalability to your system. You can use lots of read-only nodes, yet be sure that a given node serving a request has not fallen too far behind the Leader (or even become disconnected from the cluster).

### Weak

If a query request is sent to a follower, and weak consistency is specified, the Follower will transparently forward the request to the Leader. The Follower waits for the response from the Leader, and then returns that response to the client.

Weak instructs the Leader to check that it is the Leader, before querying the local SQLite file. Checking Leader state only involves checking state local to the Leader, so is still very fast. There is, however, a very small window of time (milliseconds by default) during which the node may return stale data. This is because after the Leader check, but before the local SQLite database is read, another node could be elected Leader and make changes to the cluster. As result the node may not be quite up-to-date with the rest of cluster.

### Strong

If a query request is sent to a follower, and strong consistency is specified, the Follower will transparently forward the request to the Leader. The Follower waits for the response from the Leader, and then returns that response to the client.

To avoid even the issues associated with weak consistency, casbin-mesh also offers strong. In this mode, the Leader sends the query through the Raft consensus system, ensuring that the Leader remains the Leader at all times during query processing. However, this will involve the Leader contacting at least a quorum of nodes, and will therefore increase query response times.

### Which should I use?

Weak is probably sufficient for most applications, and is the default read consistency level. To explicitly select consistency, set the query param level to the desired level. However you should use none with read-only nodes, unless you want those nodes to actually forward the query to the Leader.
