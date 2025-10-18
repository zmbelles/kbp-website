<template>
  <section class="view centered">
    <h2>Blog</h2>
    <p>Short list of posts. Paste Facebook posts here as items.</p>

    <div class="posts">
      <article class="post" v-for="(p, i) in posts" :key="i">
        <h3>{{ p.title }}</h3>
        <div v-html="p.content"></div>
        <p class="meta">{{ p.meta }}</p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      posts: [
        {
          title: 'Example post',
          content: '<p><!-- paste full post HTML/text here --></p>',
          meta: 'Source: Facebook'
        }
      ]
    }
  }
}
</script>

<style scoped>
.view { padding: 28px; max-width: 900px; margin: 0 auto; text-align: center; }
.posts { display:flex; flex-direction:column; gap:12px; margin-top:18px; align-items:center; }
.post { width:100%; max-width:720px; background:#fff; padding:12px; border-radius:10px; text-align:left; box-shadow:0 1px 2px rgba(0,0,0,0.04); }
.meta { margin-top:10px; font-size:0.85rem; color:#6b7280; }
</style>
