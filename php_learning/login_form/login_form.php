<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      html {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: bisque;
      }
      .login_container form {
        display: flex;
        justify-content: center;
        text-align: left;
        background-color: burlywood;
        box-shadow: 0 10px 10px #222;
        background-color: burlywood;
        flex-direction: column;
      }
      .login_container legend {
        background-color: chocolate;
        padding: 20px;
      }
      .login_container label,
      input {
        margin: 10px;
      }
      .login_container input {
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div class="login_container">
      <form action="">
        <legend>Let's login!</legend>
        <label for="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username_id"
          placeholder="Username"
        />
        <label for="password">Password: </label>
        <input
          type="password"
          name="Password"
          id="password_id"
          placeholder="Password"
        />
        <input type="submit" value="Enter" />
      </form>
    </div>
  </body>
</html>
