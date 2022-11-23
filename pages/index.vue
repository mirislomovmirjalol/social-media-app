<template>
  <div class="bg-base-100 text-base-content">
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
      <div class="drawer-content container mx-auto px-7">
        <Navbar/>

        <hr class="w-4/5 mx-auto">

        <div class="lg:max-w-md mx-auto">
          <transition name="fade" mode="out-in">
            <post-card-skeleton v-if="loading"/>
            <div v-else>
              <post-card v-for="post in posts" :key="post.id" :id="post.id" :image="post.image"
                         :like="post.like"
                         :likes="post.likes"
                         :author="post.author"/>
            </div>
          </transition>
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
  name: 'IndexPage',
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    this.stopLoading()
  },
  methods: {
    //after 1.5 seconds loading will stop
    stopLoading() {
      setTimeout(() => this.loading = false, 1500);
    }
  },
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.pop-up-enter-active,
.pop-up-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}

.pop-up-enter,
.pop-up-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>
