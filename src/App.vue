<script setup>
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/addproduct">Add Product</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  background: #007bff;
  padding: 15px 0;
}

.wrapper {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s ease;
}

nav a:hover {
  color: #ffdd57;
}
</style>