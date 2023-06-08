<template>
  <div class="wrapper">
    <div 
    class="position-absolute w-100 min-height-300 top-0"
    >
    <span class="mask  " style="background-color: #073552;"></span>
    
  </div>
  <!-- <notifications></notifications> -->
  <!-- <MainNavbar v-if="showNavbar" /> -->
  <side-bar v-if="!$route.meta.hideSidebar">
    
  </side-bar>
   
    <div class="main-content bg-light">
      <!-- <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar> -->

<router-view>
  <Performance/> 
</router-view>
    <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer> -->
    </div> 
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// import MainNavbar from "@/components/Navbar.vue";
function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

// import DashboardNavbar from "./DashboardNavbar.vue";
// import ContentFooter from "./ContentFooter.vue";
import Performance from "../Components/performance.vue"
import { mapState } from "vuex";


export default {
  components: {
    Performance,
    // MainNavbar
    // DashboardNavbar,
    // ContentFooter,
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
  },
  mounted() {
    this.initScrollbar();
  },
  computed: {
    ...mapState([
      "layout",
      "showSidenav",
      "showNavbar",
      "showFooter",
      "showConfig",
      "hideConfigButton"
    ])
  }
};
</script>
<style lang="scss"></style>
