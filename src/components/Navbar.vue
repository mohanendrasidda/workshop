<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container px-2">
      <ul class="nav navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
          
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/workshops">List of workshops</router-link>
        
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "appNavbar",
};
</script>

<style scoped>
</style>