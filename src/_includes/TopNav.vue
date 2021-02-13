<template>
  <nav :class="isWork ? 'top-nav top-nav--difference' : 'top-nav'">
    <a class="top-nav__brand" href="/">
      ✷ SS21
      <span class="top-nav__brand-extension">
        {{ isHome ? '(you are already here)' : '(go home)' }}
      </span>
    </a>
    <div class="top-nav__links">
      <a class="top-nav__link" href="/work">Work</a>
      <a class="top-nav__link" href="/writing">Writing</a>
    </div>
    <SpotifyWidget :spotify="spotify" />
  </nav>
</template>

<script>
import SpotifyWidget from './SpotifyWidget.vue';
export default {
  data() {
    return {
      isHome: this.page.url === '/',
      isWork: this.page.url.includes('/work')
    };
  },
  props: ['spotify'],
  components: {
    SpotifyWidget
  }
};
</script>

<style></style>
