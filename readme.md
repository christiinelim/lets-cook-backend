# Let's Cook Backend

This repository contains the backend for a full-stack application where users can share their favorite recipes and other users can save them for future reference.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [GraphQL API](#graphql-api)
  - [User](#user)
    - [Create User](#create-user)
    - [Update Password](#update-password)
    - [Get User By Id](#get-user-by-id)
    - [Login](#login)
    - [Delete User](#delete-user)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/christiinelim/lets-cook-backend.git
    ```
2. Navigate to the project directory:
    ```sh
    cd lets-cook-backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Configure the database:
    - Create a `config/config.js` file with your database configuration.

5. Run database migrations:
    ```sh
    npx sequelize-cli db:migrate
    ```

6. Start the server:
    ```sh
    npm start
    ```

## Usage

Once the server is running, you can interact with the GraphQL API at `http://localhost:4000/graphql`.

## GraphQL API

### User

#### Create User
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

#### Update Password
```
mutation($input: UpdateUserInput!) {
  updatePassword(input: $input) {
    first_name
  }
}

{
  "input": {
    "email": "johndoe@asd.com",
    "password": "johndoe"
  }
}
```

#### Get User By Id
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

#### Login
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

#### Delete User
```
mutation($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    first_name
  }
}

{
  "deleteUserId": "1"
}
```

#### User Verification
```
mutation($input: VerifyUserInput!) {
  verifyUser(input: $input) {
    first_name
    last_name
    email
    contact
  }
}

{
  "input": {
    "id": "8",
    "type": "Verification",
    "token": 711016
  }
}
```

#### Follow User
```
mutation($input: FollowInput!) {
  followUser(input: $input) {
    id
    first_name
    last_name
  }
}

{
  "input": {
    "follower": "2",
    "following": "8"
  }
}
```

#### Unfollow User
```
mutation($input: FollowInput!) {
  unfollowUser(input: $input) {
    id
    first_name
    last_name
  }
}

{
  "input": {
    "follower": "8",
    "following": "2"
  }
}
```

### User

#### Get All Categories
```
query {
  getCategories {
    id
    category
  }
}
```

#### Get Category
```
query($getCategoryId: ID!) {
  getCategory(id: $getCategoryId) {
    id
    category
  }
}

{
  "getCategoryId": "2"
}
```

### Recipes

#### Create Recipe
```
mutation($input: CreateRecipeInput!) {
  createRecipe(input: $input) {
    id
    title
    description
    duration
    ingredients
    instructions
    category {
      category
    }
    user {
      first_name
      last_name
    }
  }
}

{
  "input": {
    "image": "www.test.com",
    "title": "Sour Dough",
    "description": "Perfect serving for breakfast!",
    "duration": 100,
    "ingredients": "Sugar, flour, cornstarch",
    "instructions": "1. Mix the dough 2. Put in refrigerator for 30 minutes 3. Bake in oven for 30 minutes at 180 degrees",
    "category": "4",
    "user": "2"
  }
}
```