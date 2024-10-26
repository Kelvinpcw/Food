// src/stores/auth.js
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)
  const showLoginModal = ref(false)
  const pendingRoute = ref(null)

  // Initialize Firebase Auth listener
  const auth = getAuth()
  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser
    isAuthenticated.value = !!firebaseUser
    if (firebaseUser && pendingRoute.value) {
      showLoginModal.value = false
      pendingRoute.value = null
    }
  })

  return {
    user,
    isAuthenticated,
    showLoginModal,
    pendingRoute
  }
})