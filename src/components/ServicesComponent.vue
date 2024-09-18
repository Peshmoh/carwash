<!-- src/components/ServicesComponent.vue -->
<template>
  <div class="services">
    <h1>Our Premium Services</h1>
    <div class="row">
      <div class="col-md-6">
        <img src="https://www.extremeclean.co.ke/img/gallery/gallery_3.png" alt="Exterior Wash" class="img-fluid" />
        <h2>Exterior Wash</h2>
        <p>Get your car's exterior spotless with our thorough washing and drying services.</p>
      </div>
      <div class="col-md-6">
        <img src="https://www.extremeclean.co.ke/img/gallery/10.jpg" alt="Interior Cleaning" class="img-fluid" />
        <h2>Interior Cleaning</h2>
        <p>Detailed interior cleaning that leaves your car looking and smelling fresh.</p>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <img src="https://www.extremeclean.co.ke/img/gallery/5.jpg" alt="Waxing" class="img-fluid" />
        <h2>Waxing</h2>
        <p>Protect your car's paint with our professional waxing services.</p>
      </div>
      <div class="col-md-6">
        <img src="https://www.extremeclean.co.ke/img/services/engine-clean.jpg" alt="Engine Cleaning" class="img-fluid" />
        <h2>Engine Cleaning</h2>
        <p>Ensure your engine is clean and running smoothly with our engine cleaning service.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesComponent'
};
</script>

<style scoped>
h1 {
  color: #27ae60;
  margin-bottom: 20px;
}
.services .img-fluid {
  margin-bottom: 10px;
}

img{
  width: 500px;
  height: 300px;
}
</style>
