<template>
<div>
  <div data-fixed="false" id="navWrapper">
    <div ref="navWrapper" class="flex justify-between items-center">
      <router-link :to="{ name: 'Home' }"
        ><img
          class="mx-3 my-1 h-16 min-w-16 lg:ml-10"
          src="@/assets/logos/fifthchukker_logo.png"
          alt=""
      /></router-link>
      <div class="flex items-center">
        <div class="hidden lg:flex xl:mr-8 desktop-nav-links" data-fixed="false">
          <router-link v-for="link in navLinks" :key="link.title"
            class="
            uppercase
              nav-link
              mx-3
              transition-colors
              duration-200
              ease-out
              desktop-nav-links
              unfixed-nav-links
            "
            :to="{ name: link.routeName }"
            >{{ link.title }}</router-link
          >
        </div>
        <div class="flex justify-start items-center mx-3 my-1 desktop-nav-links" data-fixed="false">
          <router-link
            data-fixed-btn="false"
            id="desktop-nav-contact"
            class="
              contact-link
              order-1
              px-5
              py-2
              text-sm
              mr-3
              transition-all
              duration-200
              ease-out
              sm:px-10
              sm:mr-8
              md:order-2
              lg:ml-3
            "
            :to="{ name: 'Contact' }"
            >CONTACT</router-link
          >
          <a
            @click.prevent="toggleSearchBar"
            class="
              unfixed-search-icon
              p-2
              fa fa-search
              mr-2
              text-xl
              order-2
              hover:text-red-600
              transition-colors
              duration-200
              ease-out
              sm:mr-8
              md:order-1
              xl:mr-8
            "
            href="#"
          ></a>
          <div class="lg:hidden order-3">
            <a
              @click.prevent="showNav"
              data-fixed="false"
              class="
                p-2
                fas
                fa-bars
                text-2xl
                hover:text-red-600
                transition-colors
                duration-200
                ease-out
              "
              href="#"
            ></a>
          </div>
        </div>
      </div>

      <div
        ref="navOverlay"
        v-if="navActive"
        :class="{
          slideNavIntoView: navActive,
        }"
        class="
          opacity-0
          z-50
          text-lg
          top-0
          fixed
          py-10
          bg-white
          h-screen
          w-full
          flex flex-col
          items-center
          bg-black
          lg:hidden
        "
      >
        <div class="absolute right-0 top-0 mr-4">
          <a
            @click.prevent="hideNav"
            class="
              p-3
              hover:text-red-600
              transition-colors
              duration-200
              ease-out
            "
            href="#"
            ><img src="@/assets/svgs/close_black_24dp.svg" alt=""
          /></a>
        </div>
        <router-link v-for="link in navLinks" :key="link.title"
        @click="hideNavNow"
          class="
          uppercase
            my-2
            hover:text-red-600
            transition-colors
            duration-200
            ease-out
          "
          :to="{ name: link.routeName }"
          >{{ link.title }}</router-link
        >
        <div class="my-4">
          <router-link
          @click="hideNavNow"
            data-btn="true"
            class="
              text-red-600
              px-5
              py-2
              text-sm
              sm:py-3
              sm:px-10
              border-2 border-red-600
              hover:text-white
              hover:bg-red-600
              transition-all
              duration-200
              ease-out
            "
            :to="{ name: 'Contact' }"
            >CONTACT</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div v-if="searchBarActive" class="absolute w-full flex flex-col py-3">
    <form class="flex w-full px-3 z-20" action="">
      <input
        class="
          w-full
          border-2 border-gray-800
          rounded-full
          focus:outline-none
          px-3
          py-1
          text-gray-700
        "
        type="text"
        name=""
        id=""
      />
    </form>
    <div class="flex flex-col w-full px-3 z-20 py-3">
      <div class="bg-white z-40 py-2 px-3 w-full my-1 rounded-lg">
        <a href="#" class="text-red-600">Rubicon Wins Stables of the year</a>
      </div>
      <div class="bg-white z-40 py-2 px-3 w-full my-1 rounded-lg">
        <a href="#" class="text-red-600">Rubicon Wins Stables of the year</a>
      </div>
    </div>
    <div
      @click.self="toggleSearchBar"
      class="
        flex flex-col
        z-10
        fixed
        w-full
        min-h-screen
        bg-black
        top-0
        opacity-75
        px-3
      "
    ></div>
  </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      navActive: false,
      searchBarActive: false,
      navLinks: [
        {
          title: 'polo',
          routeName: 'Polo'
        },
        {
          title: 'Equestrian',
          routeName: 'Equestrian'
        },
        {
          title: 'Dine',
          routeName: 'Dine'
        },
        {
          title: 'Events',
          routeName: 'Events'
        },
        {
          title: 'Accomodation',
          routeName: 'Accomodation'
        },
        {
          title: 'Gallery',
          routeName: 'Gallery'
        }
      ]
    };
  },
  methods: {
    navWrapper() {
      return this.$refs.navWrapper;
    },
    showNav() {
      this.navActive = true;
    },
    hideNavNow(){
      this.navActive = false;
    },
    hideNav() {
      this.$refs.navOverlay.classList.add("slideNavOutsideView");
      
      setTimeout(() => {
        this.navActive = false;
      }, 500);
      
    },
    toggleSearchBar(event) {
      event.preventDefault();
      this.searchBarActive = !this.searchBarActive;
    },
  },
  mounted() {
    let getElement = function (obj) {
      if (obj.id) {
        return document.getElementById(obj.id);
      } else {
        if (obj.many === true) {
          return document.getElementsByClassName(obj.className);
        } else {
          return document.getElementsByClassName(obj.className)[0];
        }
      }
    };
    let addRemoveClass = function (object, add, remove) {
      object.classList.remove(remove);
      object.classList.add(add);
      return object;
    };
    let fixNavElements = function () {
      getElement({ className: "desktop-nav-links", many: true }).forEach((item) =>{
        item.setAttribute("data-fixed", "true");
      })
      getElement({ id: "navWrapper" }).setAttribute("data-fixed", "true");
      getElement({ className: "contact-link", many: false }).setAttribute(
        "data-fixed-btn",
        "true"
      );
    };
    let unFixNavElements = function () {
      getElement({ className: "desktop-nav-links", many: true }).forEach((item) =>{
        item.setAttribute("data-fixed", "false");
      })
      getElement({ id: "navWrapper" }).setAttribute("data-fixed", "false");
      getElement({ className: "contact-link", many: false }).setAttribute(
        "data-fixed-btn",
        "false"
      );
    };
    let navAnimation = function () {
      const navBar = getElement({ id: "navWrapper" });
      const main = getElement({ className: "main", many: false });
      if (main.getBoundingClientRect().top + navBar.clientHeight < 0) {
        //Fived nav
        fixNavElements();
      } else {
        //UnfixedNav
        unFixNavElements();
      }
    };
    document.addEventListener("scroll", navAnimation);
  },
};
</script>

<style scoped>
.desktop-nav-links[data-fixed="false"] a {
  color: white;
}
.desktop-nav-links[data-fixed="true"] a{
  color: #4a5568;
}
.desktop-nav-links[data-fixed="true"] a:hover {
  color: #e53e3e;
}

.slideNavIntoView {
  opacity: 1;
  animation: slidein 0.5s ease-out;
}
.slideNavOutsideView {
  opacity: 1;
  animation: slideout 0.5s ease-in;
}

@keyframes slidein {
  0% {
    margin-left: -100%;
  }
  100% {
    margin-left: 0%;
  }
}
@keyframes slideout {
  0% {
    margin-left: 0%;
  }
  98% {
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  100% {
    margin-left: -100%;
  }
}
#navWrapper[data-fixed="false"] {
  padding-top: 15px;
  transition: all 0.3s ease;
}
#navWrapper[data-fixed="true"] {
  padding-top: 0px;
  background-color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}

.contact-link[data-fixed-btn="true"] {
  color: white !important;
  background-color: #e53e3e;
}
.contact-link[data-fixed-btn="true"]:hover {
  color: white !important;
  border: 2px solid #963e3e;
  background-color: #963E3E;
}
.contact-link[data-fixed-btn="false"] {
  color: #4a5568 !important;
  border: 2px solid white;
  background-color: white;
}
.contact-link[data-fixed-btn="false"]:hover {
  color: white !important;
  border: 2px solid #e53e3e;
  background-color: #e53e3e;
}
.router-link-active {
  color: #e53e3e !important;
}

.router-link-active[data-fixed-btn="true"] {
  color: white !important;
  background-color: #e53e3e !important;
}
.router-link-active[data-fixed-btn="true"],
.router-link-active[data-fixed-btn="false"] {
  color: white !important;
  background-color: #e53e3e !important;
  border: 2px solid #e53e3e;
}
</style>