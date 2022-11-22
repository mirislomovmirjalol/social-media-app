<template>
  <nav class="flex flex-row text-left justify-between items-center py-7 w-full">
    <div class="">
      <button @click="goToPrev()"
              class="text-2xl no-underline text-grey-darkest hover:text-blue-dark mx-1 p-2 border rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd"
                d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BackNav",
  methods: {
    goToPrev() {
      this.$router.go(-1);
    },
  },
}
</script>

<style scoped>

</style>
