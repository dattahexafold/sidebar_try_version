<template>
  <div
    class="sidenav shadow-lg navba navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
    @mouseenter="$sidebar.onMouseEnter()"
    @mouseleave="$sidebar.onMouseLeave()"
  >
    <div class="scrollbar-inner" ref="sidebarScrollArea">
      <div class="sidenav-header d-flex align-items-center">
        <a class="navbar-brand" href="#">
          <img
            src="../../assets/Nova_Logo.svg"
            class="navbar-brand-img"
            alt="Sidebar logo"
          />
          <!-- <img :src="logo" class="navbar-brand-img" alt="Sidebar logo" /> -->
        </a>
        <div class="ms-auto">
          <!-- Sidenav togglerr -->
          <div
            class="sidenav-toggler me-3 me-xl-0 d-xl-block"
            :class="{ active: !$sidebar.isMinimized }"
            @click="minimizeSidebar"
          >
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line bg-dark"></i>
              <i class="sidenav-toggler-line bg-dark"></i>
              <i class="sidenav-toggler-line bg-dark"></i>
            </div>
          </div>
        </div>
      </div>

      <hr class="mt-0 horizontal dark" />

      <slot></slot>

      <SidenavList />
    </div>
  </div>
</template>
<script>
import SidenavList from "./SidenavList.vue";
export default {
  name: "sideBar",
  components: {
    SidenavList,
  },
  props: {
    title: {
      type: String,
      default: "Creative Tim",
      description: "Sidebar title",
    },
    shortTitle: {
      type: String,
      default: "CT",
      description: "Sidebar short title",
    },
    logo: {
      type: String,
      default: "img/brand/green.png",
      description: "Sidebar app logo",
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
      description:
        "List of sidebar links as an array if you don't want to use components for these.",
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        "Whether sidebar should autoclose on mobile when clicking an item",
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  methods: {
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    },
  },
  mounted() {
    //we can set minimize or full show side bar
    this.$sidebar.isMinimized = this.$sidebar.breakpoint < window.innerWidth;
    this.minimizeSidebar();
  },
  beforeUnmount() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
};
</script>
