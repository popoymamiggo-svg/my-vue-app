<script>
export default {
  data() {
    return {
      name: "Jake",
      age: 20,
      course: "BSIT"
    }
  }
}
</script>

<template>
  <section class="assignment-page">
    <h1>Student Profile</h1>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Student ID: {{ studentId }}</p>
    <p>Course: {{ course }}</p>
    <p>Year Level: {{ yearLevel }}</p>
  </section>
</template>

<style scoped>
.assignment-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 24px;
}

h1 {
  color: #064E3B;
  margin-bottom: 24px;
}

p {
  color: #C8A100;
  font-size: 1.05rem;
  margin: 12px 0;
}
</style>
