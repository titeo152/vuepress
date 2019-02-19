<template>
  <form netlify name="contact" class="contact-form">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12 offset-0">
          <div class="form-group">
            <input class="form-control" name="name" placeholder="Name" required />
          </div>
          <div class="form-group">
            <input class="form-control" name="email" placeholder="Email" required />
          </div>
          <div class="form-group">
            <textarea class="form-control" name="message" placeholder="How can we help you?" rows="5" required></textarea>
          </div>
          <div class="text-center">
            <button class="btn btn-success" type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactForm"
}
</script>

<style>
  .contact-form button[type="submit"] {
    width: 220px;
  }
</style>
