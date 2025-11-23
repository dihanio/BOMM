<template>
  <div class="min-h-screen bg-background-light">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useAuth } from '@/composables/useAuth'

const { initAuth } = useAuth()

// Initialize auth state when app loads
onMounted(async () => {
  await initAuth()
})
</script>
