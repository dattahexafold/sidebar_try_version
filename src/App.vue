<template>
  <!-- <DashboardLayout /> -->

  <div class="wrapper">
    <div class="position-absolute w-100 min-height-300 top-0">
      <span class="mask" style="background-color: #073552"></span>
    </div>
    <side-bar v-if="!$route.meta.hideSidebar"> </side-bar>
    
    <div class="main-content bg-light">
      <SideBar/>
      <NavBar  />
      <router-view>
        <Performance/>
      </router-view>
    </div>
  </div>
</template>

<script>
import Performance from "./Views/Components/performance.vue"
import NavBar from "@/components/Navbar.vue";
import SideBar from "./components/Sidebar/SideBar.vue";
export default {
  name: "App",
  components: {
    Performance,
    NavBar,
    SideBar
  },
};
</script>

<style></style>
