<template>
  <div class="relative">
    <div class="my-7 rounded-3xl relative flex justify-center items-center">
      <nuxt-link :to="'/post/' + this.id">
        <img class="h-full w-full rounded-3xl" :src="this.image">
      </nuxt-link>

      <div class=" left-4 top-4 absolute backdrop-blur-sm backdrop-brightness-90 rounded-xl border border-white
        ">
        <a href="#" class="flex items-center p-1.5 px-3">
          <img
            src="https://images.unsplash.com/photo-1602308939005-f05763be8771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MnwwfHB1cnBsZXw%3D&auto=format&fit=crop&w=800&q=60"
            class="mr-2 w-8 h-8 rounded-full border border-white">

          <div class="text-gray-600 font-bold text-sm text-gray-50 hover:underline">
            {{ this.author }}
          </div>
        </a>
      </div>

      <div
        class="flex justify-between items-center mx-auto bottom-10 absolute backdrop-blur-sm backdrop-brightness-90 rounded-xl p-2">
        <button @click="changeLike()"
                class="flex flex-col justify-between items-center text-white font-light text-lg px-5 mx-1">
          <svg v-if="this.like===1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               class="w-6 h-6">
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
          </svg>

          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
          </svg>
          <h5 class="text-xs">{{ this.likes }}</h5>
        </button>
        <button
          class="flex flex-col justify-between items-center text-gray-600 font-light text-lg text-gray-50 px-5 mx-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/>
          </svg>
          <h5 class="text-xs">23K</h5>
        </button>
        <button
          class="flex flex-col justify-between items-center text-gray-600 font-light text-lg text-gray-50 px-5 mx-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/>
          </svg>
          <h5 class="text-xs">23K</h5>
        </button>
      </div>

      <Transition name="bounce">
        <div v-if="this.likeActive" class="top-1/2 absolute text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               class="w-24 h-24">
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
          </svg>
        </div>
      </Transition>

    </div>
  </div>
</template>

<script>
export default {
  name: "Post-card",
  props: [
    'id', 'image', 'like', 'author', 'likes'
  ],

  data() {
    return {
      likeActive: false
    }
  },
  methods: {
    changeLike() {
      if (this.like === 0) {
        this.like = 1
        this.likes++
        this.likeActive = true
        setTimeout(() => this.likeActive = false, 1000);
      } else {
        this.likes--
        this.like = 0
      }
    }
  }
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
