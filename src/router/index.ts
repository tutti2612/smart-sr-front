import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/students",
    name: "Students",
    component: () => import("../views/student/Students.vue")
  },
  {
    path: "/student/:id",
    name: "Student_show",
    component: () => import("../views/student/Student.vue"),
    props: (route) => ({ id: Number(route.params.id) })
  },
  {
    path: "/student/new",
    name: "Student_new",
    component: () => import("../views/student/New.vue")
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
