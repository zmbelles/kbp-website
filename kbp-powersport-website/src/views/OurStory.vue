<template>
  <section class="view centered">
    <h2>Our Story</h2>
    <p>
      This is the Story page — paste your biography, background, or the Facebook post content here.
    </p>

    <article class="story">
      <p><!-- paste paragraph 1 from FB --></p>
      <p><!-- paste paragraph 2 from FB --></p>
    </article>

    <p class="fb-link">Source: <a :href="fbPost" target="_blank" rel="noopener">Facebook post</a></p>
  </section>
</template>

<script>
export default {
  name: 'Story',
  data() {
    return {
      fbPost: 'https://www.facebook.com/zachary.belles.372/posts' // replace with full post url if needed
    }
  }
}
</script>

<style scoped>
.view { padding: 28px; max-width: 900px; margin: 0 auto; text-align: center; }
.story { text-align:left; margin-top:16px; }
.fb-link { margin-top:12px; color:#6b7280; }
a { color: inherit; text-decoration: underline; }
</style>
