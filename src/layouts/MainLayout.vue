<script lang="ts" setup>
import { ref } from 'vue';


const selectedFlag = ref('us');


const changeFlag = () => {
  selectedFlag.value = selectedFlag.value === 'us' ? 'ua' : 'us';
};





</script>


<template>
  <header class="page-header">
    <div class="container">
      <nav class="navigation">
        <div class="navigation__about">
          <div class="navigation__logo">
            <img src="/images/main-logo.png" alt="Plane takeoff icon" />
          </div>
          <h1 class="navigation__title">AirportBoard</h1>
        </div>
        <div class="navigation__location location" @click="changeFlag">
          <span class="fi location__flag" :class="`fi-${selectedFlag}`"></span>
          <div class="location__wrapper">
            <span class="location__city">New York</span>
            <span class="location__airport">JFK</span>
          </div>
        </div>

        <div class="navigation__user user">
          <button class="user__button">Login</button>
          <button class="user__button user__button--signup">Sign Up</button>
        </div>
      </nav>
    </div>
  </header>
  <main>
    <div class="container">
      <router-view />
    </div>
  </main>
  <footer class="page-footer">
    <div class="container">
      <p class="developers">
        <a href="https://github.com/pank1ch/flight-board">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-github w-5 h-5" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          created by pank1ch
        </a>
      </p>
    </div>
  </footer>
</template>


<style scoped lang="scss">

.page-header {
  border-bottom: 1px solid #ebe6e7;
  background-color: $primary-white;
  padding: 15px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation__about {
  display: flex;
  gap: 12px;
  align-items: center;

}

.navigation__logo {
  width: 40px;
  height: 40px;

}

.navigation__logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.navigation__title {
  font-weight: 500;
  font-size: 20px;
  font-weight: bold;
}

.location {
  display: flex;
  gap: 12px;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover{
    background-color: $primary-bg;
  }
}

.location__wrapper {
  display: flex;
  gap: 1px;
  flex-direction: column;
}

.location__flag {
  font-size: 22px;
}

.location__city {
  font-weight: 500;
  font-size: 16px;
}

.location__airport {
  font-weight: 600;
  font-size: 18px;
}

.user {
  display: flex;
  gap: 15px;
}

.user__button {
  box-sizing: border-box;
  width: 80px;
  padding: 8.5px 5px;
  align-self: center;
  cursor: pointer;


  font-size: 14px;
  font-weight: 400;
  font-family: inherit;

  background-color: $primary-white;
  font-size: $primary-font-color;
  border: 1px solid $primary-font-color;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: scale(1.1);
    opacity: 0.7;
  }

  &--signup {
    background-color: $primary-font-color;
    color: $primary-white;
  }
}

.page-footer {
  border-top: 1px solid #ebe6e7;
  background-color: $primary-white;
  padding: 15px;
}

.developers {
  text-align: center;
}

.developers a {
  text-decoration: none;
  color: $secondary-font-color;
  font-size: 16px;
  transition: all 0.4s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    color: $primary-font-color;
  }
}

.developers a svg {
  width: 20px;
  height: 20px;
}

</style>
