<script lang="ts" setup>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToLoginPage = () => {
  router.push('/login')
}
const goToRegisterPage = () => {
  router.push('/sign-up')
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-center">
      <InputText placeholder="Search..." class="search-bar" />
    </div>
    <div class="sign-in-button">
      <Button label="Sign In" @click="goToLoginPage()" />
    </div>
  </nav>
  <div class="container wrapper">
    <div class="header">
      <h1 class="main-text">A place for your learning cards</h1>
      <div class="card flex justify-center">
        <Button icon="pi pi-arrow-right" label="Sign Up" @click="goToRegisterPage()" />
      </div>
    </div>
    <div>Image here</div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  background-color: #29353d;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

.navbar {
  color: white;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background-color: #1c252c;
}

.navbar-center {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.search-bar {
  width: 300px;
  background-color: #3b4a56;
  border: none;
  color: white;
}

.sign-in-button {
  border: none;
  margin-right: 1rem;
}

.header {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding-left: 4rem;
  padding-top: 4rem;
}

.main-text {
  font-size: 5em;
  font-weight: bold;
  line-height: 1.2em;
  margin: 0 0 20px 0;
  max-width: 600px;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

iframe {
  border: none;
}

@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
  }
}
</style>
