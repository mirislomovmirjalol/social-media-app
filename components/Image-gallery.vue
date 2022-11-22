<template>
  <div class="grid grid-cols-3 gap-3">
    <nuxt-link class="col-span-2 row-span-2 bg-cover bg-center rounded-lg p-12" :to="'/post/' + posts[0].id"
               :style="{ 'background-image': 'url(' + posts[0].image + ')' }">
    </nuxt-link>
    <nuxt-link class="bg-cover bg-center rounded-lg p-12" v-for="post in posts.slice(1)" :key="post.id[1]"
               :to="'/post/' + post.id"
               :style="{ 'background-image': 'url(' + post.image + ')' }">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Image-gallery",
  props: [
    "posts"
  ],
}
</script>

<style scoped>

</style>
