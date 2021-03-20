<template>
  <table class="recognition-chart">
    <thead>
      <tr>
        <th>Organization</th>
        <th>Recognition</th>
        <th>Project</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in recognition" :key="index">
        <td>{{ entry.publisher }}</td>
        <td>{{ entry.award }}</td>
        <td>{{ entry.title }}</td>
        <td>
          <a :href="entry.link" class="recognition-chart__link">
            <svg
              class="writing-list-item__icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 10"
            >
              <path
                fill-rule="evenodd"
                d="M7.31 1.57H.56V0H10v9.44H8.43V2.7L1.1 10 0 8.89l7.31-7.32z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['recognition']
};
</script>
