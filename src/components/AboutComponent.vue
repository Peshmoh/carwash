<!-- src/components/AboutComponent.vue -->
<template>
    <div class="about text-center">
      <img src="https://www.extremeclean.co.ke/img/slider/slider_4.jpg" alt="About Us" class="img-fluid" />
      <h1>About pesh carwash</h1>
      <p>We’ve been in the car wash industry for over 10yrs, delivering top-quality service that guarantees customer satisfaction.</p>
      <p>Our team is passionate about cars and ensuring that every vehicle we service leaves in pristine condition.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutComponent'
  };
  </script>
  
  <style scoped>
  .about img {
    margin-bottom: 20px;
    width: 100%;
    height: auto;
  }
  h1{
    color: #27ae60;
  }
  </style>
  