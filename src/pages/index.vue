<script setup>
// pages/index.vue
import { ref } from 'vue'

useHead({
  bodyAttrs: {
    class: 'my-body-class'
  }
})

const number = ref(1)
</script>

<template>
  <div class="container">
    <Html lang="en">
      <Head>
        <Title>Lucky number: {{ number }}</Title>
        <Meta name="description" :content="`My page's ${number} description`" />
      </Head>
    </Html>
    <header>
      <h1>Welcome to My Stylish Homepage</h1>
      <p>Discover the magic of random numbers!</p>
    </header>
    <main>
      <section class="hero">
        <h2>Lucky Number Generator</h2>
        <p>Click the button below to generate a lucky number:</p>
        <button class="btn" @click="number = Math.round(Math.random() * 100)">
          Generate Lucky Number
        </button>
        <p class="lucky-number">{{ number }}</p>
      </section>
      <section class="navigation">
        <NuxtLink to="/about" class="link">About page</NuxtLink>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 My Stylish Homepage. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
body.my-body-class {
  background: #f7f7f7;
  color: #333;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 32px;
  color: #ff5a5f;
}

.hero {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.btn {
  background-color: #ff5a5f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #e04a4f;
}

.lucky-number {
  font-size: 48px;
  color: #ff5a5f;
  margin-top: 20px;
}

.navigation {
  margin-top: 40px;
  text-align: center;
}

.link {
  color: #ff5a5f;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
}

.link:hover {
  color: #e04a4f;
}

footer {
  margin-top: 40px;
  text-align: center;
  color: #777;
}
</style>
