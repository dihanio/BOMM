import { createRouter, createWebHistory } from 'vue-router'

// Extend RouteMeta
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    guestOnly?: boolean
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/tentang',
      name: 'tentang',
      component: () => import('../views/Tentang.vue')
    },
    {
      path: '/organisasi',
      name: 'organisasi',
      component: () => import('../views/Organisasi.vue')
    },
    {
      path: '/organisasi/:id',
      name: 'organisasi-detail',
      component: () => import('../views/OrganisasiDetail.vue')
    },
    {
      path: '/kegiatan',
      name: 'kegiatan',
      component: () => import('../views/Kegiatan.vue')
    },
    {
      path: '/kegiatan/:id',
      name: 'kegiatan-detail',
      component: () => import('../views/KegiatanDetail.vue')
    },
    {
      path: '/berita',
      name: 'berita',
      component: () => import('../views/Berita.vue')
    },
    {
      path: '/berita/:id',
      name: 'berita-detail',
      component: () => import('../views/BeritaDetail.vue')
    },
    {
      path: '/pengurus',
      name: 'pengurus',
      component: () => import('../views/Pengurus.vue')
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: () => import('../views/Kontak.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: { guestOnly: true }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
      meta: { guestOnly: true }
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('../views/Profil.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/my-activities',
      name: 'my-activities',
      component: () => import('../views/MyActivities.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { requiresAuth: true }
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Navigation Guard
router.beforeEach(async (to, _from, next) => {
  const { isAuthenticated, isStaff, loading } = await import('@/composables/useAuth').then(m => m.useAuth())
  
  // Wait for auth to be initialized
  if (loading.value) {
    await new Promise<void>((resolve) => {
      // Simple polling check
      const interval = setInterval(() => {
        if (!loading.value) {
          clearInterval(interval)
          resolve()
        }
      }, 50)
      
      // Timeout after 3 seconds
      setTimeout(() => {
        clearInterval(interval)
        resolve()
      }, 3000)
    })
  }

  // Check if route is for guests only (login/register)
  if (to.meta.guestOnly && isAuthenticated.value) {
    // User is logged in, redirect to home
    next({ name: 'home' })
    return
  }

  // Check if route requires authentication
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    // User is not logged in, redirect to login
    next({ name: 'login', query: { redirect: to.fullPath } })
    return
  }

  // Check if route is dashboard (staff only)
  if (to.name === 'dashboard' && !isStaff.value) {
    // User is not staff, redirect to home
    next({ name: 'home' })
    return
  }

  next()
})

export default router
