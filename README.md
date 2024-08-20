# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

### Environment 
node.js
nvm
vscode
vite
vue-router

### Router Create

# 1
npm create vite@latest backendadmin -- --template vue

# 2
cd backendadmin

# 3
npm i

# 4
visit http://localhost:5173/

# 5 
npm install vue-router@4.4.0

### Create routers and pages
create routes and pages
vue-router 
挂载router to vue
use <RouterView />

### UI frame
npm install element-plus@2.7.7
 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})

### page layout
import container layout

### aside component
npm i less@4.2.0