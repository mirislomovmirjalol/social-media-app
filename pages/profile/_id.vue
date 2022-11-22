<template>
  <div class="bg-base-100 text-base-content">
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
      <div class="drawer-content container mx-auto px-7">
        <BackNav/>
        <div class="lg:max-w-md mx-auto my-4">
          <div class="flex justify-start items-center my-4">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="w-16 h-16 rounded-full object-cover"
            />
            <h3 class="mx-4 text-2xl font-bold">{{ post.author }}</h3>
          </div>

          <hr class="w-4/5 mx-auto">

          <div class="font-light text-lg my-4">
            <image-gallery :posts="posts"/>
          </div>
        </div>

      </div>


      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
          <!-- Sidebar content here -->
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$store.state.posts[this.$route.params.id];
    },
    posts() {
      return this.$store.state.posts;
    }
  },
}
</script>

<style>
</style>
