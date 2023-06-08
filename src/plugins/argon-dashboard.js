import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

// import "../assets/css/nucleo/css/nucleo.css";
// import "../assets/sass/argon.scss";
import SidebarPlugin from "../components/SidebarPlugin";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css"

// ..............................v3....................................
import "../assets/js/nav-pills.js";
import "../assets/scss/argon-dashboard.scss"
export default {
  install(app) {
    app.use(SidebarPlugin);
    app.use(GlobalComponents);
    app.use(GlobalDirectives);
  },
};
