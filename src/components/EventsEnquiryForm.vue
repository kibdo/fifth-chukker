<template>
  <div
  :id="elementId"
    class="
      enquiry-section
      relative
      flex flex-col
      md:flex-row
      items-center
      justify-center
    "
  >
    <div class="z-20 form-section flex flex-col items-center">
      <div class="text-3xl text-gray-700 w-full text-center">
        Submit an Enquiry
      </div>
      <div class="mt-6 w-full">
        <div class="form-row flex flex-col">
          <div class="flex flex-col md:flex-row">
            <div class="field-container w-full md:mr-3">
              <select class="w-full" name="" id="">
                <option value="type" default>Venue Type</option>
              </select>
            </div>
            <div class="field-container w-full md:ml-3">
              <select class="w-full" name="" id="">
                <option value="type" default>Venue Type</option>
              </select>
            </div>
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="field-container w-full md:mr-3">
              <input type="text" name="" id="" placeholder="Number of People" />
            </div>
            <div class="field-container w-full md:ml-3">
              <input type="text" name="" id="" placeholder="  Date" />
            </div>
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="field-container w-full md:mr-3">
              <input type="text" name="" id="" placeholder="First Name" />
            </div>
            <div class="field-container w-full md:ml-3">
              <input type="text" name="" id="" placeholder="Last Name" />
            </div>
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="field-container w-full md:mr-3">
              <input type="text" name="" id="" placeholder="Mobile Number" />
            </div>
            <div class="field-container w-full md:ml-3">
              <input type="text" name="" id="" placeholder="Email" />
            </div>
          </div>
          <div class="field-container w-full">
            <textarea
              placeholder="Enquiry(Optional)"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div class="field-container w-full">
          <div class="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quidem distinctio consequatur unde. Accusantium molestiae libero ex
            sint hic. Error, temporibus beatae! Quos amet ipsum consequuntur
            nihil nostrum minima eum!
          </div>
        </div>
        <div class="field-container w-full">
          <a
            class="
              uppercase
              px-8
              py-4
              bg-red-600
              text-white
              transition
              duration-200
              hover:bg-red-700
            "
            href="#"
            >Submit</a
          >
        </div>
      </div>
    </div>
    <img
      class="absolute w-full h-full object-cover top-0 z-10"
      src="@/assets/cover-photos/equestrian-cover.jpg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "EventsEnquiryForm",
  props: ["elementId"]
};
</script>

<style scoped>
* {
  color: #bbc0c7;
}

.field-container {
  margin-bottom: 1rem;
}
.field-container select {
  height: 3rem;
  padding: 0rem 0.8rem;
  width: 100%;
  font-weight: lighter;
  border: 1px solid #bbc0c7;
}
.field-container input {
  height: 3rem;
  padding: 0rem 0.8rem;
  width: 100%;
  font-weight: lighter;
  border: 1px solid #bbc0c7;
}
.field-container textarea {
  height: 6rem;
  padding: 0rem 0.8rem;
  width: 100%;
  font-weight: lighter;
  border: 1px solid #bbc0c7;
}
input:focus,
textarea:focus {
  outline-color: #e53e3e;
}
select:focus {
  outline-color: #e53e3e;
}
@media (max-width: 768px) {
  .enquiry-section {
    min-height: 100vh;
    width: 100%;
    padding: 2rem 1rem;
  }
  .form-section {
    background-color: white;
    min-height: 70vh;
    width: 100%;
    padding: 2rem;
  }
}
@media (min-width: 769px) {
  .enquiry-section {
    min-height: 100vh;
    width: 100%;
    padding: 4rem;
  }
  .form-section {
    background-color: white;
    min-height: 70vh;
    width: 90%;
    padding: 2rem;
  }
}
@media (min-width: 1024px) {
  .enquiry-section {
    min-height: 100vh;
    width: 100%;
    padding: 6rem;
  }
  .form-section {
    background-color: white;
    min-height: 70vh;
    width: 75%;
    padding: 3rem;
  }
}
</style>