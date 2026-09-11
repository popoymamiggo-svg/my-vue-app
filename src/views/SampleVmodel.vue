<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      course: ""
    }
  }
}
</script>

<template>
  <section class="assignment-page">
    <div class="form">
      <label>
        Name
        <input v-model="name" type="text">
      </label>

      <label>
        Age
        <input type="number" v-model="age">
      </label>

      <label>
        Course
        <input v-model="course" type="text">
      </label>
    </div>

    <div class="profile">
      <p>Name: {{ name }}</p>
      <p>Age: {{ age }}</p>
      <p>Course: {{ course }}</p>
    </div>
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

.form {
  display: grid;
  gap: 16px;
  max-width: 450px;
}

label {
  display: grid;
  gap: 6px;
  color: #064E3B;
  font-weight: 600;
}

input {
  padding: 10px 12px;
  border: 1px solid #99F6E4;
  border-radius: 6px;
  font: inherit;
}

.profile {
  margin-top: 28px;
}

p {
  color: #C8A100;
  font-size: 1.05rem;
  margin: 12px 0;
}
</style>
