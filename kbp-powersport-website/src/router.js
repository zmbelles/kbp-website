import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Story from './views/OurStory.vue'
import Blog from './views/OurBlog.vue'
import Pictures from './views/OurPictures.vue'
import Pictures2025 from './views/Pictures2025.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/story', name: 'Story', component: Story },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/pictures', name: 'Pictures', component: Pictures },
  { path: '/pictures/2025', name: 'Pictures2025', component: Pictures2025 },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
