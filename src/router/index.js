import { createRouter, createWebHistory} from "vue-router";
import routes from "./routes";

const router = createRouter({
    routes,
    history: createWebHistory(),
});

router.beforeEach((to, from) =>{
    if(to.push === "/tasks"){
        return {name: "login"};
    }
});

export default router;