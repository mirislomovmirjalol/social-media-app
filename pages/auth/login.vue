<template>
  <div class="bg-base-100 text-base-content">
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-full">
      <div class="w-full max-w-md space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true">
          <div class="-space-y-px rounded-md shadow-sm">
            <div class="my-4">
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required
                     class="relative block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                     placeholder="Email address">
            </div>
            <div class="my-4">
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required
                     class="relative block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 sm:text-sm"
                     placeholder="Password">
            </div>
          </div>

          <div>
            <button type="submit"
                    class="group relative flex w-full justify-center rounded-full border border-transparent bg-base-content py-2 px-4 text-sm font-medium text-white">
              Login
            </button>
          </div>
        </form>

        <hr>

        <div>
          <button type="submit"
                  class="group my-4 relative flex w-full justify-center rounded-full border border-base-content text-base-content bg-base-100 py-2 px-4 text-sm font-medium text-white">
            Login with google
          </button>
          <button type="submit"
                  class="group my-4 relative flex w-full justify-center rounded-full border border-base-content text-base-content bg-base-100 py-2 px-4 text-sm font-medium text-white">
            Login with github
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
