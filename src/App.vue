<template>
  <!-- <DashboardLayout /> -->

  <div class="wrapper">
    <div class="position-absolute w-100 top-0" style="height: 280px;">
      <span class="mask" style="background-color: #073552"></span>
    </div>
    <!-- <side-bar v-if="!$route.meta.hideSidebar"> </side-bar> -->
    <SideBar />
    <div class="main-content bg-light">
      <NavBar />
      <router-view>
        <Performance />
      </router-view>
    </div>
  </div>
</template>

<script>
import Performance from "./Views/Components/performance.vue";
import NavBar from "@/components/Navbar.vue";
import SideBar from "./components/Sidebar/SideBar.vue";
export default {
  name: "App",
  components: {
    Performance,
    NavBar,
    SideBar,
  },
};
</script>

<style></style>
