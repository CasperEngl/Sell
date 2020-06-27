<template>
  <main class="container">
    <h1 class="mb-8 text-3xl">
      Create product
    </h1>
    <form
      class="space-y space-y-4"
      @submit.prevent="handleSubmit"
    >
      <label class="flex flex-col">
        <div>Name</div>
        <input
          v-model="name"
          type="text"
          class="form-input"
        >
      </label>
      <label class="flex flex-col">
        <div>Price</div>
        <input
          v-model="price"
          type="number"
          class="form-input"
        >
      </label>
      <button
        type="submit"
        class="form-input"
      >
        Create product
      </button>
    </form>
  </main>
</template>

<script>
export default {
  middleware: ['auth'],
  data: () => ({
    name: '',
    price: 0,
  }),
  methods: {
    handleSubmit(e) {
      console.log(e)
    },
  },
  layout: 'backend',
}
</script>
