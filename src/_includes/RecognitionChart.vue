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
        <td>{{ entry.organization }}</td>
        <td>{{ entry.recognition }}</td>
        <td>{{ entry.project }}</td>
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
  data() {
    return {
      recognition: [
        {
          organization: 'Awwwards',
          recognition: 'Mobile Excellence',
          project: 'Faculty 2020',
          link: '#'
        },
        {
          organization: 'Awwwards',
          recognition: 'Honors',
          project: 'Faculty 2020',
          link: '#'
        },
        {
          organization: 'Awwwards',
          recognition: 'Mobile Excellence',
          project: 'Sigil (Jr. Developer Portfolio)',
          link: '#'
        },
        {
          organization: 'Awwwards',
          recognition: 'Honors',
          project: 'Sigil (Jr. Developer Portfolio)',
          link: '#'
        },
        {
          organization: 'Humans',
          recognition: 'Site Of The Day',
          project: 'Portfolio FW19',
          link: '#'
        },
        {
          organization: 'CSS',
          recognition: 'Special Kudos',
          project: 'Portfolio FW19',
          link: '#'
        },
        {
          organization: 'Awwwards',
          recognition: 'Mobile Excellence',
          project: 'Portfolio FW19',
          link: '#'
        },
        {
          organization: 'Awwwards',
          recognition: 'Honors',
          project: 'Portfolio FW19',
          link: '#'
        }
      ]
    };
  }
};
</script>

<style></style>
