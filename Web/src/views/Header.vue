<template>
  <header>
    <div class="heading">
      <a href="/"><img class="Logo" alt="Vue logo" src="../assets/logo.png"></a>
      <div class="login"><a class="ButtonLogin" href="/Login">Login/Register</a></div>
    </div>
    <div class="menu"><a class="ButtonMenu" href="/Loan">Emprunter</a><a class="ButtonMenu" href="/Render">Rendre</a><a class="ButtonMenu" href="/AddBook">Ajouter un livre</a></div>
  </header>
</template>

<style scoped>


  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

  .Logo {
    height: 125px;
    margin-left: 20px;
    margin-right: 0;
    margin-top: 10px
  }
  .ButtonMenu, .ButtonLogin {
    background-color: #784FFF;
    border-left: 1px solid;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 40px;
    padding-right: 40px;
    color: white;
    width: 100%;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
  }

  .ButtonLogin {
    margin-right: 10px;
  }

  .heading {
    display: flex;
  }

  header{
    display: block;
  }

  .menu {
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: row;
    margin: 0;
  }

  .login {
    width: 100%;
    text-align: right;
    margin: auto;
  }
</style>