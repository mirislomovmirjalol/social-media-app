<template>
  <div>
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
      <div class="drawer-content container mx-auto px-7">
        <Navbar/>

        <hr class="w-4/5 mx-auto">

        <div class="lg:max-w-md mx-auto">
          <PostCard v-for="post in posts" :id="post.id" :key="post.id" :image="post.image" :like="post.like"/>
        </div>

        <bottom-nav/>

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
  data() {
    return {
      posts: [
        {
          id: 0,
          like: 1,
          image: 'https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MXwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 1,
          like: 0,
          image: 'https://images.unsplash.com/photo-1567788150222-c580695fa1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8MXwwfHdoaXRlfA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 2,
          like: 0,
          image: 'https://images.unsplash.com/photo-1614375516536-ee3b08717d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfDF8MHxibGFja3w%3D&auto=format&fit=crop&w=800&q=60',
        },
      ]
    }
  }
}
</script>

<style>
body {
  background-color: #fcfcfc;
}
</style>
