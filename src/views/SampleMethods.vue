<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increase() {
      this.count++
    },
    decrease() {
      this.count--
    }
  }
}
</script>

<template>
  <section class="assignment-page">
    <h1>{{ count }}</h1>
    <div class="buttons">
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
    </div>
  </section>
</template>

<style scoped>
.assignment-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 24px;
  text-align: center;
}

h1 {
  color: #064E3B;
  font-size: 3rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
}

button {
  background-color: #0F766E;
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
