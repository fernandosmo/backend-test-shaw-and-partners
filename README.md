# BACKEND-TEST-SHAW-AND-PARTNERS

This application was created for the fullstack engineer test at Shaw and Partners

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install.

```bash
npm install
```

## API Documentation

#### Users return

```http
  GET /api/users?since={number}&per_page={perPages}
```

| Query      | Type     | Description                                               |
| :--------- | :------- | :-------------------------------------------------------- |
| `since`    | `number` | ID that will be the offset of the return                  |
| `per_page` | `number` | Number of returns that will come from GitHub, maximum 100 |

#### Returns user details

```http
  GET /api/users/{login}
```

| Params  | Type     | Description |
| :------ | :------- | :---------- |
| `login` | `string` | User login  |

#### Returns user repos

```http
  GET /api/users/{login}/repos
```

| Params  | Type     | Description |
| :------ | :------- | :---------- |
| `login` | `string` | User login  |

## License

[MIT](https://choosealicense.com/licenses/mit/)
