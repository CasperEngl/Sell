<template>
  <nav class="bg-gray-800">
    <div class="container">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
            @click="toggle('open')"
          >
            <!-- Icon when menu is open. -->
            <svg
              v-if="nav"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <!-- Icon when menu is closed. -->
            <svg
              v-else
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
          <div class="flex items-center">
            <nuxt-link
              to="/"
              class="flex-shrink-0 text-3xl text-white"
            >
              Sell
            </nuxt-link>
            <nuxt-link
              to="/"
              class="mx-5 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white focus:text-white focus:bg-gray-700 focus:outline-none transition duration-150 ease-in-out"
            >
              Home
            </nuxt-link>
          </div>
          <div class="hidden sm:flex sm:items-center sm:ml-6">
            <div class="flex space-x space-x-2">
              <nuxt-link
                to="/dashboard"
                class="px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white focus:text-white focus:bg-gray-700 focus:outline-none transition duration-150 ease-in-out"
              >
                Dashboard
              </nuxt-link>
              <nuxt-link
                to="/product/create"
                class="px-3 py-2 rounded-md bg-green-500 hover:bg-green-400 hover:shadow text-sm font-medium leading-5 text-gray-300 hover:text-white focus:text-white focus:bg-green-400 focus:outline-none transition duration-150 ease-in-out"
              >
                Create product
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
          v-if="$store.state.auth.loggedIn"
          class="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            aria-label="Notifications"
            @click="toggle('notifications')"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <button
                id="user-menu"
                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-500 transition duration-150 ease-in-out"
                aria-label="User menu"
                aria-haspopup="true"
                @click="toggle('profile')"
              >
                <img
                  class="h-8 w-8 rounded-full"
                  :src="$store.state.auth.user.picture"
                  :alt="$store.state.auth.user.name"
                  @error="handleImageError"
                >
              </button>
            </div>

            <transition
              enter-active-class="transition ease-out duration-300 origin-top-right"
              enter-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-150 origin-top-right"
              leave-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div
                v-if="profile"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
              >
                <div
                  class="py-1 rounded-md bg-white shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <nuxt-link
                    to="/dashboard"
                    class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Dashboard
                  </nuxt-link>
                  <nuxt-link
                    to="/settings"
                    class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Settings
                  </nuxt-link>
                  <button
                    class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    @click="$auth.logout()"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="nav"
      class="sm:hidden"
    >
      <div class="px-2 pt-2 pb-3">
        <nuxt-link
          to="/"
          class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >
          Homepage
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    nav: false,
    profile: false,
    notifications: false,
  }),
  methods: {
    exists(menu) {
      if (typeof this[menu] === 'undefined') {
        alert(`The menu '${menu}' does not exist`)
      }
    },
    toggle(menu = 'nav') {
      this.exists(menu)

      this[menu] = !this[menu]
    },
    close(menu = 'nav') {
      this.exists(menu)

      this[menu] = false
    },
    handleImageError(e) {
      e.target.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="100" fill="white" /></svg>')}`
    },
  },
}
</script>

<style>

</style>
