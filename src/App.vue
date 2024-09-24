
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
  
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/logo.png" alt="" class="logo">
        </router-link>

        
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

    <!-- Footer Section -->
    <footer class="footer bg-light mt-auto py-3">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-4">
            <h5>pesh carwash</h5>
            <p>Your go-to car wash service provider. We ensure your vehicle shines like new.</p>
          </div>
          <div class="col-md-4">
            <h5>Contact Us</h5>
            <ul class="list-unstyled">
              <li>Email: perismumbi96@gmail.com</li>
              <li>Phone: 0796714901</li>
              <li>Address: westlands Nairobi., westpoint</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Follow Us</h5>
            <a href="#" class="me-3">
              <img src="" alt="Facebook" width="24">
            </a>
            <a href="#" class="me-3">
              <img src="" alt="Instagram" width="24">
            </a>
            <a href="#">
              <img src="" alt="Twitter" width="24">
            </a>
          </div>
        </div>
        <div class="mt-3">
          <p>&copy; 2024 peshcarwash. All rights reserved.</p>
        </div>
      </div>
    </footer>
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


.navbar {
  padding-top: 0.5rem; 
  padding-bottom: 0.5rem; 
  padding-left: 2rem; 
  padding-right: 2rem; 
}

/* Footer styling */
.footer {
  background-color: #f8f9fa; 
  border-top: 1px solid #e7e7e7; 
  padding: 10px 0; }

.footer h5 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.footer p, .footer ul, .footer li {
  margin: 0;
  padding: 0;
  list-style: none;
  color: #6c757d; 
}

.footer ul {
  padding-left: 0;
}

.footer a {
  color: #6c757d;
  text-decoration: none;
}

.footer a:hover {
  color: #63bc63; 
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
