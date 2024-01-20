## Initialize a New Project

- `npm init`: Interactively create a `package.json` file for your project.

## Install Dependencies

- `npm install package-name`: Install a package locally.
- `npm install --save package-name`: Install and add the package to the `dependencies` in `package.json`.
- `npm install --save-dev package-name`: Install and add the package to `devDependencies` in `package.json`.

## Install Global Packages

- `npm install -g package-name`: Install a package globally.

## Update Packages

- `npm update`: Update all packages to their latest versions based on the version range specified in `package.json`.
- `npm update package-name`: Update a specific package to its latest version.

## Uninstall Packages

- `npm uninstall package-name`: Uninstall a local package.
- `npm uninstall -g package-name`: Uninstall a global package.

## View Installed Packages

- `npm ls`: List installed packages in the current project.
- `npm ls -g`: List globally installed packages.

## Check for Outdated Packages

- `npm outdated`: Check for outdated packages in the current project.

## Run Scripts

- `npm run script-name`: Run a script defined in the `scripts` section of `package.json`.

## Publish a Package

- `npm publish`: Publish your package to the npm registry.

## Search for Packages

- `npm search package-name`: Search for packages on the npm registry.

## Initiate Git Repository (if not already)

- `npm init -y && git init`: Initialize a new npm project and a Git repository.

## Audit for Security Vulnerabilities

- `npm audit`: Check for security vulnerabilities in project dependencies.

## Install Dependencies from package-lock.json

- `npm ci`: Install dependencies based on the `package-lock.json` file for reproducible builds.

## View npm Config

- `npm config list`: Display the npm configuration settings.

## Access Environment Variables in npm Scripts

- `npm run script-name --environment-variable=value`: Pass environment variables to npm scripts.
