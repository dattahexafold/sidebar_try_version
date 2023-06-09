<template>
  <!-- <DashboardLayout /> -->

  <div >
    
    <side-bar v-if="!$route.meta.hideSidebar"> </side-bar>
    <div class="main-content bg-light">
      <SideBar/>
      <NavBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import DashboardLayout from './Views/Layout/DashboardLayout.vue';
import NavBar from "@/components/Navbar.vue"
export default {
  name: 'App',
  components: {
    // DashboardLayout
    NavBar
  }
}
</script>

<style></style>
