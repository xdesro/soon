<template>
  <nav :class="isWork ? 'top-nav top-nav--difference' : 'top-nav'">
    <a class="top-nav__brand" href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 411 401"
      >
        <path
          d="M205.5 401l-34.89-138.06-129.69 58.8 86.2-113.35L.27 143.66l142.36-3.3L114.17.86 205.5 110.1 296.83.85l-28.47 139.52 142.36 3.29-126.83 64.73 86.19 113.36-129.7-58.8L205.5 401z"
        />
      </svg>
      SS21
      <span class="top-nav__brand-extension">
        {{ isHome ? '(you are already here)' : '(go home)' }}
      </span>
    </a>
    <div class="top-nav__links">
      <a
        :class="
          page.url.includes('work')
            ? `top-nav__link top-nav__link--active`
            : `top-nav__link`
        "
        href="/work"
        >Work</a
      >
      <a
        :class="
          page.url.includes('writing')
            ? `top-nav__link top-nav__link--active`
            : `top-nav__link`
        "
        href="/writing"
        >Writing</a
      >
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
