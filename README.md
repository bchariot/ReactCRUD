## `Results`

![grid pic](https://github.com/bchariot/ReactCRUD/blob/master/client/public/grid.png?raw=true)

When adding or editing a row the following validation rules are applied:
- columns 'Full Name' and 'Rate' are required
- column 'Email' must be in email format
- column 'IP Address' must be a properly formed IP address
- column 'Rate' must be a float with 2 decimal places
- column 'D.O.B' must be a date using the 'MM/dd/yyyy' format

### `Development`

The server and client can be started from the terminal with this one command in the root directory of the project:

```
~reactcrud> npm run dev
```

### `Production`

Create a build for the client from the client directory in the terminal:

```
~reactcrud/client> npm run build
```
