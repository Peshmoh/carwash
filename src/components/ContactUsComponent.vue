<!-- src/components/ContactUsComponent.vue -->
<template>
    <div class="contact">
      <h1 style="text-align: center; color: #27ae60;">contact us</h1>
      <div class="row">
        <div class="col-md-5" style="margin-left: 30px;">
          <h2>Get In Touch</h2>
          <p><strong>Email:</strong> peshcarwah@gmail.com</p>
          <p><strong>Phone:</strong> +254796714901</p>
          <p><strong>Address:</strong> westpark Car Wash Lane, Nairobi,westlands</p>
        </div>
        <div class="col-md-6">
          <img src="https://www.extremeclean.co.ke/img/gallery/gallery_2.JPG" alt="Contact Us" class="img-fluid" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactUsComponent'
  };
  </script>
  
  <style scoped>
  .contact img {
    margin-top: 20px;
  }
  </style>
  