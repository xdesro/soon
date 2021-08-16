<template>
  <div class="spotify-widget">
    <a
      href="https://open.spotify.com/user/1239993406?si=tpFk1Vt5Q_yH6qM0E8wjXA"
    >
      <svg
        fill="currentColor"
        aria-label="Go to my Spotify profile"
        viewBox="0 0 12 12"
        width="12"
      >
        <path
          d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6a6 6 0 00-6-6zm2.76 8.67c-.12.18-.33.24-.51.12-1.41-.87-3.18-1.05-5.28-.57-.21.06-.39-.09-.45-.27-.06-.21.09-.39.27-.45 2.28-.51 4.26-.3 5.82.66.21.09.24.33.15.51zm.72-1.65c-.15.21-.42.3-.63.15a7.78 7.78 0 00-5.97-.69c-.24.06-.51-.06-.57-.3-.06-.24.06-.51.3-.57a8.78 8.78 0 016.75.81c.18.1.27.39.12.6zm.06-1.68C7.62 4.2 4.41 4.08 2.58 4.65c-.3.09-.6-.09-.69-.36-.09-.3.09-.6.36-.7 2.13-.62 5.64-.5 7.86.82.27.15.36.51.21.78-.15.21-.51.3-.78.15z"
        />
      </svg>
    </a>
    <div class="spotify-widget__inner">
      <a class="spotify-widget__track" :href="spotify.url">
        {{ spotify.name }} </a
      >,
      <span class="spotify-widget__artists">
        <span v-for="(artist, index) in spotify.artists" :key="index"
          >{{ artist.name.trim() }}
          <span v-if="index + 1 < spotify.artists.length">,&nbsp;</span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['spotify']
};
</script>
