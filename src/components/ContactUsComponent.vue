<template>
  <div class="contact">
    <h1 style="text-align: center; color: #27ae60;">Contact Us</h1>
    <div class="row">
      <div class="col-md-5" style="margin-left: 30px;">
        <h2>Get In Touch</h2>
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Phone:</strong> {{ phone }}</p>
        <p><strong>Address:</strong> {{ address }}</p>
        <h3>Send Us a Message</h3>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input type="text" v-model="formData.name" class="form-control" id="name" required />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Your Message</label>
            <textarea v-model="formData.message" class="form-control" id="message" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-success">Send Message</button>
        </form>
      </div>
      <div class="col-md-6">
        <img src="https://www.extremeclean.co.ke/img/gallery/gallery_2.JPG" alt="Contact Us" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUsComponent',
  data() {
    return {
      email: 'peshcarwash@gmail.com',
      phone: '+254796714901',
      address: 'Westpark Car Wash Lane, Nairobi, Westlands',
      formData: {
        name: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
    
      alert(`Message sent from ${this.formData.name}: ${this.formData.message}`);
    
      this.formData.name = '';
      this.formData.message = '';
    }
  }
};
</script>

<style scoped>
.contact img {
  margin-top: 20px;
}
</style>
