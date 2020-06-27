<template>
  <main class="my-16 container">
    <pre>{{ $store.state.auth }}</pre>
  </main>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'backend',
}
</script>
