---
sidebar_position: 3
---

# Install with bare metal


```yaml title="statefulset.yaml"
apiVersion: v1
kind: Service
metadata:
  name: casbin-mesh
  labels:
    app: casbin-mesh
spec:
  publishNotReadyAddresses: true
  ports:
    - port: 4002
      name: port
  clusterIP: None
  selector:
    app: casbin-mesh
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: casbin-mesh
spec:
  serviceName: "casbin-mesh"
  replicas: 3
  updateStrategy:
    type: RollingUpdate
  podManagementPolicy: OrderedReady
  selector:
    matchLabels:
      app: casbin-mesh
  template:
    metadata:
      labels:
        app: casbin-mesh
    spec:
      terminationGracePeriodSeconds: 90
      containers:
        - name: casbin-mesh
          image: ghcr.io/wenyxu/casbin-mesh:latest
          env:
            - name: POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: POD_NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
          ports:
            - containerPort: 4002
              name: port
          volumeMounts:
            - name: casbin-mesh-data
              mountPath: /casbin_mesh/data
          command:
            - bash
            - "-c"
            - |
              set -ex
              [[ `hostname` =~ -([0-9]+)$ ]] || exit 1
              ordinal=${BASH_REMATCH[1]}
              if [[ $ordinal -eq 0 ]]; then
                /root/casbin_mesh -node-id $(POD_NAME) -raft-address 0.0.0.0:4002 -raft-advertise-address casbin-mesh-0.casbin-mesh.$(POD_NAMESPACE).svc.cluster.local:4002 /casbin_mesh/data/data
              else
                /root/casbin_mesh -node-id $(POD_NAME) -raft-address 0.0.0.0:4002 -raft-advertise-address $(POD_NAME).casbin-mesh.$(POD_NAMESPACE).svc.cluster.local:4002 -join http://casbin-mesh-0.casbin-mesh.$(POD_NAMESPACE).svc.cluster.local:4002 /casbin_mesh/data/data
              fi
  volumeClaimTemplates:
    - metadata:
        name: casbin-mesh-data
      spec:
        accessModes: ["ReadWriteOnce"]
        resources:
          requests:
            storage: 512Mi

```
