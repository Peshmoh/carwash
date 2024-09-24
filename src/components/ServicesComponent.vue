<template>
  <div class="services" style="background: #f4f4fa">
    <h1>Our Premium Services</h1>
    <div class="row" style="margin-left: 30px;">
      <div class="col-md-6" v-for="service in services" :key="service.title">
        <img :src="service.image" :alt="service.title" class="img-fluid" />
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesComponent',
  data() {
    return {
      services: [
        {
          title: 'Exterior Wash',
          description: "Get your car's exterior spotless with our thorough washing and drying services.",
          image: 'https://www.extremeclean.co.ke/img/gallery/gallery_3.png',
        },
        {
          title: 'Interior Cleaning',
          description: 'Detailed interior cleaning that leaves your car looking and smelling fresh.',
          image: 'https://www.extremeclean.co.ke/img/gallery/10.jpg',
        },
        {
          title: 'Waxing',
          description: "Protect your car's paint with our professional waxing services.",
          image: 'https://www.extremeclean.co.ke/img/gallery/5.jpg',
        },
        {
          title: 'Engine Cleaning',
          description: 'Ensure your engine is clean and running smoothly with our engine cleaning service.',
          image: 'https://www.extremeclean.co.ke/img/services/engine-clean.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  color: #27ae60;
  margin-bottom: 30px;
  text-align: center;
}
.services .img-fluid {
  margin-bottom: 10px;
}

img {
  width: 500px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}

h2 {
  color: hwb(145 2% 61%);
}
</style>
