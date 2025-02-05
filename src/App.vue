<script setup>
import { RouterView } from 'vue-router'
import ProfileIcon from './components/icons/profile-icon.vue'
import HomeIcon from './components/icons/home-icon.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__list-item"><HomeIcon />Home</li>
          <li class="nav__list-item"><ProfileIcon /> Profile</li>
        </ul>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  margin: 20px 0;
  align-self: last baseline;
  margin-right: 20px;
}
nav {
  width: 100%;
  font-size: 12px;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  background-color: var(--color-black);
  padding: var(--spacing-small);
  width: 200px;
  border-radius: var(--radius-small);
}

.nav__list-item {
  color: var(--color-white);
  display: flex;
  align-items: center;
  gap: 3px;
}
</style>
