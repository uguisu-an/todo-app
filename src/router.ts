import Vue from "vue";
import Router from "vue-router";
import Home from "@/ui/views/Home.vue";
import Todo from "@/ui/pages/Todo.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/ui/views/About.vue")
    },
    {
      path: "/todo",
      name: "todo",
      component: Todo
    }
  ]
});
