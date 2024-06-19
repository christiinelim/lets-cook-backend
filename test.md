### Create User
```
mutation($input: CreateUserInput!) { 
  createUser(input: $input) {
    username
    email
    first_name
    last_name
    contact
  }
}

{
  "input": {
    "username": "marydoe",
    "email": "marydoe@asd.com",
    "password": "marydoe",
    "first_name": "Mary",
    "last_name": "Doe",
    "contact": "123456789",
  }
}
```

### Get User By Id
```
query($getUserId: ID!) {
  getUser(id: $getUserId) {
    email
  }
}

{
  "getUserId": 2
}
```

### Login
```
query($input: LoginInput!) {
  login(input: $input) {
    username,
    email
  }
}

{
  "input": {
    "email": "3example@email.com",
    "password": "test123"
  }
}
```