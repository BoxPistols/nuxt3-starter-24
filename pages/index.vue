<script setup>
// Add a class to the body
useHead({
  bodyAttrs: {
    class: 'my-body-class',
  },
});
const number = ref(1);
</script>

<template>
  <div>
    <Html lang="en">
      <Head>
        <Title>Lucky number: {{ number }}</Title>
        <Meta name="description" :content="`My page's ${number} description`" />
      </Head>
    </Html>

    <p>
      <button @click="number = Math.round(Math.random() * 100)">
        Click me and see the title updates
      </button>
      {{ number }}
    </p>

    <p><NuxtLink to="/about">About page</NuxtLink></p>
  </div>
</template>

<style>
body.my-body-class {
  background: #efefef;
  color: tomato;
}
</style>
