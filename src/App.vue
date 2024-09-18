<!-- src/App.vue -->
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Logo on the left -->
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/logo.png" alt="[Your Car Wash Name]" class="logo">
        </router-link>

        <!-- Toggler for small screens -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Links aligned to the right -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contactus">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Logo styling */
.logo {
  height: 40px;
  width: auto;
}

/* Navbar link styling */
.navbar-nav .nav-link {
  font-size: 1.1rem;
  padding-left: 10px;
  padding-right: 10px;
}

.navbar-nav .nav-link:hover {
  color: #63bc63; /* Custom hover color */
  transition: color 0.3s ease;
}

/* Adjust padding for better alignment */
.navbar {
  padding-top: 0.5rem; /* Reduce top padding */
  padding-bottom: 0.5rem; /* Reduce bottom padding */
  padding-left: 2rem; /* Keep the left padding */
  padding-right: 2rem; /* Keep the right padding */
}
/* Mobile adjustments */
@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
  }

  .navbar-nav .nav-link {
    padding: 10px;
  }
}
</style>
