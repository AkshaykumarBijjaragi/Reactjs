## Common Errors

## Error: Browser scripts cannot have imports or exports.

- `<script type="module" src="/index.js"></script>`: type attribute should be set to module to make import commands work


## Error: Expected content key de1e4a02ec63c4eb to exist.
```Remove-Item -Recurse -Force .parcel-cache``` then run```npx parcel index.html```


## Error: Uncaught Error: Objects are not valid as a React child (found: object with keys {id, question, answer}). If you meant to render a collection of children, use an array instead.
The error occurs if you are trying to directly render an object (data array in this case) as a child component in React, which is not allowed. React expects components to be rendered, not plain JavaScript objects



