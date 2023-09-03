<template>
  <div class="flex flex-col">
    <div class="form-group flex flex-col lg:flex-row">
      <input placeholder="First Name" class="w-full lg:mr-2" type="text" />
      <input
        placeholder="Last Name"
        class="mt-4 w-full lg:ml-2 lg:mt-0"
        type="text"
      />
    </div>
    <div class="form-group">
      <input
        class="w-full"
        placeholder="Mobile Number"
        type="text"
        name=""
        id=""
      />
    </div>
    <div class="form-group">
      <input class="w-full" placeholder="Email" type="text" name="" id="" />
    </div>
    <div class="form-group">
      <input class="w-full" placeholder="Country" type="text" name="" id="" />
    </div>
    <div class="form-group">
      <textarea
        class="w-full"
        placeholder="Comments"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="form-group w-full flex justify-center md:justify-start">
      <a
        class="
          text-center
          w-full
          uppercase
          px-8
          py-3
          bg-red-600
          text-white
          transition
          duration-200
          hover:bg-red-700
          md:w-auto
          md:py-4
          tracking-widest
        "
        href="#"
        >SEND</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input,
textarea {
  border: 2px solid #bbc0c7;
}
input {
  height: 3rem;
  padding: 0rem 0.8rem;
  font-weight: lighter;
  border: 1px solid #bbc0c7;
}
textarea {
  height: 6rem;
  padding: 0rem 0.8rem;
  width: 100%;
  font-weight: lighter;
  border: 1px solid #bbc0c7;
}
.form-group {
  margin-bottom: 1rem;
}
input:focus,
textarea:focus {
  outline-color: #e53e3e;
}
</style>