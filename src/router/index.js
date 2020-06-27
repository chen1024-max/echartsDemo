import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "Home",
  component: () => import("../views/Home.vue")
}];

function checkRouter() {
  const traverse = (arr, route) => {
    let exit = false;
    arr.forEach(i => {
      if (i.path === route) {
        exit = true;
        return;
      }
      if (i.children && i.children.length) {
        traverse(i.children, route);
        return;
      }
    });
    return exit;
  };
  return traverse(routes, location.pathname);
}
const exit = checkRouter();
const path = exit ? "" : location.pathname.split("/").filter(i => i)[0];

const router = new VueRouter({
  mode: "history",
  base: process.env.NODE_ENV === "development" ? "" : `${path || ""}`,
  routes
});

export default router;