# azure-node-yarn-berry-examples
Examples for Windows and Linux Node.js deployments using modern Yarn (2.x, 3.x)

Each folder contains a deployment approach on how to set Yarn to the latest stable version, if needed, and install using that version, which is 3.x (latest) at the time of writing this.
 
[Otherwise, it is recommended, per yarn - to deploy the `.yarn/cache` folder as a whole](https://yarnpkg.com/features/zero-installs#how-do-you-reach-this-zero-install-state-youre-advocating-for). This still involves needing some custom deployment logic contained in this repository to use this approach without running `yarn install`, or by accidentally using Yarn Classic (1.x) - which is what Oryx uses by default.

This logic is contained in the following files:

```yaml
(Linux)
|-- linux-devops
|   |-- azure-pipelines.yml
|-- linux-github-actions
|   |-- .github/main_node-yarn-ghactions.yml
|-- linux-localgit
|-- |-- deploy.sh and .deployment

(Windows)
|-- linux-devops
|   |-- azure-pipelines.yml
|-- linux-github-actions
|   |-- .github/main_node-yarn-ghactions.yml
|-- linux-localgit
|-- |-- deploy.cmd and .deployment
```


Yarn - Plug'n'Play (PnP) - [Documentation](https://yarnpkg.com/features/pnp#initializing-pnp)