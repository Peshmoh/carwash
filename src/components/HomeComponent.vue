<template>
  <div class="home">
    <!-- Hero Section -->
    <section 
      v-if="showHeroSection" 
      class="hero-section d-flex align-items-center text-center" 
      style="background-image: url('https://www.extremeclean.co.ke/img/slider/slider_1.jpg');">
      <div class="container">
        <h1 class="display-4 text-white">{{ heroTitle }}</h1>
        <p class="lead text-white">{{ heroDescription }}</p>
        <router-link to="/services" class="btn btn-success btn-lg">View Our Services</router-link>
      </div>
    </section>

    <!-- Key Benefits Section -->
    <section v-if="showKeyBenefitsSection" class="key-benefits py-5">
      <div class="container">
        <h2 class="text-center mb-4">Why Choose Us?</h2>
        <div class="row text-center">
          <div class="col-md-4" v-for="benefit in benefits" :key="benefit.title">
            <img :src="benefit.image" :alt="benefit.title" class="mb-3" />
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section v-if="showCallToActionSection" class="call-to-action py-5 bg-dark text-white text-center">
      <div class="container">
        <h2>{{ callToActionTitle }}</h2>
        <p>{{ callToActionText }}</p>
        <router-link to="/contactus" class="btn btn-outline-success btn-lg">Contact Us</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      showHeroSection: true,
      showKeyBenefitsSection: true,
      showCallToActionSection: true,

     
      heroTitle: 'Welcome to Pesh Carwash',
      heroDescription: 'Your car deserves the best care. We provide professional, eco-friendly, and fast car wash services that leave your vehicle spotless.',

      // Key Benefits
      benefits: [
        {
          title: 'Eco-Friendly',
          description: 'We use biodegradable products that are safe for the environment.',
          image: 'https://www.extremeclean.co.ke/img/services/interior-vacuum.jpg'
        },
        {
          title: 'Fast Service',
          description: 'Our efficient team gets your car cleaned quickly without compromising on quality.',
          image: 'https://www.extremeclean.co.ke/img/services/tyre-shine.jpg'
        },
        {
          title: 'Care Premium',
          description: 'We provide premium care using high-quality products and techniques.',
          image: 'https://www.extremeclean.co.ke/img/services/interior-vacuum.jpg'
        }
      ],

      // Call to action section content
      callToActionTitle: 'Ready for a Spotless Shine?',
      callToActionText: 'Book your car wash today and experience the difference!',
    };
  }
};
</script>

<style scoped>
/* Hero Section Styling */
.hero-section {
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-section .container h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero-section .container p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

/* Key Benefits Section */
.key-benefits img {
  width: 250px;
  height: 150px;
}

.key-benefits h3 {
  font-size: 1.5rem;
  margin-top: 10px;
}

/* Call to Action Section */
.call-to-action {
  background-color: #333;
  padding: 40px 0;
}

.call-to-action h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.call-to-action p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

h2 {
  color: #27ae60;
}
</style>
