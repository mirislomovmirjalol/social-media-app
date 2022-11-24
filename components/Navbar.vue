<template>
  <nav class="flex flex-row text-left justify-between items-center py-7 w-full">
    <div class="flex flex-row justify-start items-center">
      <label
        for="my-drawer-2"
        class="text-2xl no-underline text-grey-darkest hover:text-blue-dark mx-1 p-2 border rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"/>
        </svg>

      </label>
      <button class="text-2xl no-underline text-grey-darkest flex-1 mx-2">SMA</button>
    </div>

    <div class="flex justify-between items-center">
      <div class="">
        <button class="text-2xl no-underline text-grey-darkest hover:text-blue-dark mx-1 p-2 border rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
          </svg>
        </button>
      </div>
      <nuxt-link to="/profile/1">
        <div
          class="group flex shrink-0 items-center ml-1 p-1 border rounded-full"
        >
          <span class="sr-only">Menu</span>
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="w-10 h-10 rounded-full object-cover"
          />

          <p class="ml-2 hidden text-left text-xs sm:block">
            <strong class="block font-medium">Eric Frusciante</strong>

            <span class="text-gray-500"> eric@frusciante.com </span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
