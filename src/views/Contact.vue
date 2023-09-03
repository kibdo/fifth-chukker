<template>
  <div class="">
    <LandingJumbotron :dataObj="headerDataObj" />
  </div>
  <div class="text-center pt-6 px-3 flex flex-col items-center pb-10">
    <PageIntro
      title="contact us"
      description="Have a question or comment? we would love to hear from you"
    />
  </div>
  <div class="flex flex-col lg:flex-row w-full lg:px-32">
    <div class="w-full">
      <div class="w-full flex-col flex sm:flex-row lg:flex-col">
        <div class="contact-card flex flex-col w-full md:flex-row lg:w-auto">
          <i
            class="text-2xl md:mr-8 bi bi-geo-alt"
          ></i>
          <div>
            <h2 class="capitalize">Address</h2>
            <div class="body-text">
              Consultancy Plaza,<br />11B Isa Kaita Road,<br />Kaduna,<br />Nigeria
            </div>
          </div>
        </div>
        <div class="contact-card flex flex-col w-full md:flex-row lg:w-auto">
          <i
            class="text-2xl md:mr-8 bi bi-telephone"
          ></i>
          <div>
            <h2 class="capitalize">Call Us</h2>
            <div class="body-text">
              <p class="">
                <span>BDM Office</span>:
                <span>+234 (0) 8144166665</span>
              </p>
              <p class="">
                <span>Admin Office</span>:
                <span>+234 (0) 8084762172</span>
              </p>
            </div>
          </div>
        </div>
        <div class="contact-card flex flex-col w-full md:flex-row lg:w-auto">
          <i
            class="text-2xl md:mr-8 bi bi-at"
          ></i>
          <div>
            <h2 class="capitalize">Email Us</h2>
            <div class="body-text">info@fifthchukker.com</div>
          </div>
        </div>
      </div>
      <div class="body-text contact-card w-full md:flex-row lg:w-auto">
        Follow us on instagram @ fifthchukkerpoloclub
      </div>
    </div>
    <div class="contact-form-section w-full mt-8 lg:mt-0"><ContactForm /></div>
  </div>
</template>

<script>
import LandingJumbotron from "@/components/LandingJumbotron.vue";
import PageIntro from "@/components/PageIntro.vue";
import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "Contact",
  data() {
    return {
      headerDataObj: {
        title: "Conact",
        imageSrc: "dine-1.jpg",
      },
    };
  },
  components: {
    PageIntro,
    LandingJumbotron,
    ContactForm,
  },
};
</script>

<style scoped>
.contact-form-section {
  padding: 0rem 1rem;
}
.contact-card {
  padding: 1rem 1rem;
}
h2 {
  font-size: 1.4rem;
}
.body-text {
  color: #718096;
}
@media (min-width: 640px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
</style>