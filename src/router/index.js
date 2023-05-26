import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layouts/index.vue'
import Todo from '../layouts/views/todo/todo.vue'
import Github from '../layouts/views/github/github.vue'
import QQ from '../layouts/views/qq/qq.vue'
import Options from '../layouts/views/options/options.vue'
const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'Todo',
                component: Todo
            },
            {
                path: '/github',
                name: 'Github',
                component: Github
            },
            {
                path: '/qq',
                name: 'QQ',
                component: QQ
            },
            {
                path: '/options',
                name: 'Options',
                component: Options
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
