<script setup>
// pages/about.vue
useSeoMeta({
  title: 'About page',
  description: 'This is the about page'
})
</script>

<template>
  <div class="container">
    <header>
      <h1>About Us</h1>
      <p>Learn more about our amazing website!</p>
    </header>
    <main>
      <section class="about">
        <h2>Our Story</h2>
        <p>
          Welcome to our website! We are passionate about creating unique and
          engaging experiences for our users. Our team consists of talented
          individuals who are dedicated to delivering high-quality content and
          functionality.
        </p>
        <p>
          With the power of <code>useSeoMeta()</code> composable, we ensure that
          our pages are optimized for search engines, making it easier for
          people to discover and enjoy our website.
        </p>
      </section>
      <section class="features">
        <h2>Key Features</h2>
        <ul>
          <li>Stylish and modern design</li>
          <li>Random number generator</li>
          <li>Easy navigation</li>
          <li>Optimized for search engines</li>
        </ul>
      </section>
      <section class="cta">
        <h2>Join Our Community</h2>
        <p>
          Become a part of our vibrant community and stay updated with the
          latest news and features.
        </p>
        <button class="btn">Sign Up</button>
      </section>
    </main>
    <footer>
      <NuxtLink to="/" class="link">Back to Home</NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
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

.about,
.features,
.cta {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
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
  text-align: center;
  margin-top: 40px;
}
</style>
