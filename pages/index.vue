<template>
  <div>
    <TopNav />
    <nav class="bottom-nav">
      <div>the personal site & portfolio</div>
      <div>of NYC-based creative technologist</div>
      <div>Henry Desroches</div>
    </nav>
    <main class="homepage">
      <div class="magazine-cover">
        <div class="magazine-cover__title">Soon</div>
        <h1 class="magazine-cover__subtitle">
          You will have only a memory of this moment.
        </h1>
        <div class="magazine-cover__image-wrapper">
          <img
            class="magazine-cover__image"
            src="~/assets/magazine-cover.png"
            alt=""
          />
        </div>
      </div>
      <section class="homepage-section selected-works">
        <h2 class="homepage-section__title">Selected Works</h2>
        <ul class="case-studies-list">
          <li class="case-study-list-item">
            <article class="case-study-list-item__article">
              <h1 class="case-study-list-item__title">Faculty</h1>
              <div class="case-study-list-item__meta">
                <time class="case-study-list-item__date" datetime="2020-11-01">
                  (November 2020)
                </time>
                <p class="case-study-list-item__involvement">
                  Web Design & Development
                </p>
              </div>
              <img
                class="case-study-list-item__image"
                src="~/assets/magazine-cover.png"
                alt=""
              />
              <nuxt-link class="case-study-list-item__link" to="#">
                See the Work
              </nuxt-link>
            </article>
          </li>
          <li class="case-study-list-item">
            <article class="case-study-list-item__article">
              <h1 class="case-study-list-item__title">Jessica Hische</h1>
              <div class="case-study-list-item__meta">
                <time class="case-study-list-item__date" datetime="2020-11-01">
                  (October 2020)
                </time>
                <p class="case-study-list-item__involvement">
                  Web Design & Development
                </p>
              </div>
              <img
                class="case-study-list-item__image"
                src="~/assets/magazine-cover.png"
                alt=""
              />
              <nuxt-link class="case-study-list-item__link" to="#">
                See the Work
              </nuxt-link>
            </article>
          </li>
          <li class="case-study-list-item">
            <article class="case-study-list-item__article">
              <h1 class="case-study-list-item__title">Keybase</h1>
              <div class="case-study-list-item__meta">
                <time class="case-study-list-item__date" datetime="2020-11-01">
                  (May 2020)
                </time>
                <p class="case-study-list-item__involvement">
                  Web Design & Development
                </p>
              </div>
              <img
                class="case-study-list-item__image"
                src="~/assets/magazine-cover.png"
                alt=""
              />
              <nuxt-link class="case-study-list-item__link" to="#">
                See the Work
              </nuxt-link>
            </article>
          </li>
          <li class="case-study-list-item">
            <article class="case-study-list-item__article">
              <h1 class="case-study-list-item__title">Delve Fonts</h1>
              <div class="case-study-list-item__meta">
                <time class="case-study-list-item__date" datetime="2020-11-01">
                  (February 2020)
                </time>
                <p class="case-study-list-item__involvement">
                  Web Design & Development
                </p>
              </div>
              <img
                class="case-study-list-item__image"
                src="~/assets/magazine-cover.png"
                alt=""
              />
              <nuxt-link class="case-study-list-item__link" to="#">
                See the Work
              </nuxt-link>
            </article>
          </li>
          <li class="case-study-list-item">
            <article class="case-study-list-item__article">
              <h1 class="case-study-list-item__title">Portfolio FW19</h1>
              <div class="case-study-list-item__meta">
                <time class="case-study-list-item__date" datetime="2020-11-01">
                  (August 2019)
                </time>
                <p class="case-study-list-item__involvement">
                  Web Design & Development
                </p>
              </div>
              <img
                class="case-study-list-item__image"
                src="~/assets/magazine-cover.png"
                alt=""
              />
              <nuxt-link class="case-study-list-item__link" to="#">
                See the Work
              </nuxt-link>
            </article>
          </li>
          <li class="case-study-list-item">Portfolio FW19</li>
          <li class="case-study-list-item">Goddess Jessica</li>
        </ul>
        <h3 class="selected-works__additional-title">Additional Works</h3>
        <ul class="additional-works-list">
          <li class="additional-works-list-item">
            Sigil (JR. Developer Portfolio)
          </li>
          <li class="additional-works-list-item">Remedies For Light</li>
          <li class="additional-works-list-item">Levi Boenish</li>
          <li class="additional-works-list-item">Bryn Newell</li>
        </ul>
      </section>
      <section class="homepage-section about">
        <h2 class="homepage-section__title">About</h2>
        <p class="about__intro">
          I’m a creative developer (he/him/él) currently based in
          <del>Denver, Colorado</del> <ins>New York City</ins>. I’m really into
          CSS, animation, interaction, and deleting code.
        </p>
        <div class="about__additional-content">
          <div class="about__subtitle">Availability</div>
          <p>
            I am not currently available for freelance work, but I'd love for
            you to come work with us
            <a href="https://faculty.com">at Faculty</a>.
          </p>
          <div class="about__subtitle">Contact</div>
          <p>
            I’m most active and reachable <a href="#">on Twitter</a> or
            <a href="#">via email</a>, but you can find me most places on the
            internet as <strong>@xdesro</strong>. You can also
            <a href="#">check out my resume</a>, if you’re into that sort of
            thing.
          </p>
        </div>
        <div class="about__social-links">
          <div class="about__subtitle">Links</div>
          <ul class="social-links">
            <li class="social-links__item">
              <a class="social-links__item-link" href="#">
                <svg
                  class="social-links__item-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 14"
                >
                  <path
                    d="M16 1.5c-.6.3-1.3.5-2 .6.8-.4 1.3-1 1.5-1.8-.6.3-1.3.6-2 .7a3.3 3.3 0 00-5.6 3A9.3 9.3 0 011 .6c-.3.5-.5 1-.5 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4a3.3 3.3 0 002.7 3.2c-.5.2-1 .2-1.5.1a3.3 3.3 0 003 2.3A6.6 6.6 0 010 11.5a9.3 9.3 0 0014.4-7.9v-.3c.6-.5 1.2-1 1.6-1.7z"
                  />
                </svg>
                Twitter
              </a>
            </li>
            <li class="social-links__item">
              <a class="social-links__item-link" href="#">
                <svg
                  class="social-links__item-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0a8 8 0 00-2.5 15.6c.4 0 .5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1-.9-1.2-.9-1.2-.7-.5 0-.5 0-.5.9 0 1.3.8 1.3.8.7 1.2 1.9.9 2.3.7 0-.4.2-.8.5-1-1.7-.3-3.6-1-3.6-4 0-.8.3-1.6.8-2.2 0-.2-.3-1 .1-2 0 0 .7-.3 2.2.7 1.3-.3 2.7-.3 4 0 1.5-1 2.2-.8 2.2-.8.4 1.1.1 2 0 2.1.6.6.9 1.4.9 2.2 0 3-1.9 3.7-3.7 4 .3.2.6.6.6 1.4v2.2c0 .2.1.4.5.4A8 8 0 008 0z"
                  />
                </svg>
                GitHub
              </a>
            </li>
            <li class="social-links__item">
              <a class="social-links__item-link" href="#">
                <svg
                  class="social-links__item-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 5.4v-.1l-.1-.1-.1-.1h-.1V5L8.4.1a.7.7 0 00-.8 0L.3 5H.1v.1l-.1.1v.1l-.1.1V10.7l.1.1v.1h.1l7.4 5h.8l7.3-5h.1v-.1h.1V5.5v-.1h.1zM8 9.6L5.6 8 8 6.4 10.4 8 8 9.6zm-.7-4.4l-3 2L2 5.6 7.3 2v3.2zM3.1 8L1.4 9.2V6.9L3 8zm1.2.8l3 2V14L2 10.4l2.4-1.6zm4.4 2l3-2 2.4 1.7L8.7 14v-3.3zM12.9 8L14.6 7v2.3L13 8zm-1.2-.8l-3-2V2L14 5.6l-2.4 1.6z"
                  />
                </svg>
                CodePen
              </a>
            </li>
            <li class="social-links__item">
              <a class="social-links__item-link" href="#">
                <svg
                  class="social-links__item-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 17"
                >
                  <path
                    d="M1 0L0 3v11.5h4v2.2h2.2l2.2-2.2h3.2l4.4-4.3V0H1zm1.5 1.5h12v8L12 12H8l-2.2 2.2V12H2.5V1.5z"
                  />
                  <path d="M6.5 8.7H8V4.4H6.5v4.3zm4 0H12V4.4h-1.5v4.3z" />
                </svg>
                Twitch
              </a>
            </li>
            <li class="social-links__item">
              <a class="social-links__item-link" href="#">
                <svg
                  class="social-links__item-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 16A8 8 0 118 0a8 8 0 010 16zm6.7-7a10 10 0 00-4.2-.2c.9 2.5 1.2 4.5 1.3 4.9 1.6-1 2.6-2.7 3-4.6zm-4 5.3c-.1-.6-.5-2.7-1.5-5.2a9.3 9.3 0 00-5.4 4.3 6.8 6.8 0 006.9.9zm-7.8-1.7A10.8 10.8 0 018.7 8l-.5-1.2c-3.4 1-6.7 1-7 1V8c0 1.8.6 3.4 1.7 4.6zm-1.6-6c.3 0 3.1 0 6.3-.8-1.1-2-2.3-3.7-2.5-4-2 1-3.3 2.7-3.8 4.8zm5.1-5.2c.2.2 1.4 2 2.5 4 2.5-1 3.5-2.3 3.6-2.5a6.8 6.8 0 00-6.1-1.5zm6.9 2.3c-.2.2-1.3 1.7-3.8 2.7l.4 1 .2.3a16 16 0 014.7.2c0-1.6-.6-3-1.5-4.2z"
                  />
                </svg>
                Dribbble
              </a>
            </li>
            <li class="social-links__item">
              <a class="social-links__item-link" href="#">
                <svg
                  class="social-links__item-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 19"
                >
                  <path
                    d="M13.5 17.2v-5h1.7v6.7H0v-6.7h1.7v5h11.8zM3.4 15.5h8.4V14H3.4v1.6zm.2-3.8l8.2 1.7.4-1.6-8.3-1.7-.3 1.6zm1-4l7.7 3.6.7-1.5-7.7-3.6-.7 1.5zM6.8 4l6.4 5.4L14.3 8 7.8 2.7 6.8 4zM11 0L9.6 1l5 6.8 1.4-1L11 0z"
                  />
                </svg>
                LinkedIn
              </a>
            </li>
            <li class="social-links__item">
              <a class="social-links__item-link" href="#">
                <svg
                  class="social-links__item-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 5.4v-.1l-.1-.1-.1-.1h-.1V5L8.4.1a.7.7 0 00-.8 0L.3 5H.1v.1l-.1.1v.1l-.1.1V10.7l.1.1v.1h.1l7.4 5h.8l7.3-5h.1v-.1h.1V5.5v-.1h.1zM8 9.6L5.6 8 8 6.4 10.4 8 8 9.6zm-.7-4.4l-3 2L2 5.6 7.3 2v3.2zM3.1 8L1.4 9.2V6.9L3 8zm1.2.8l3 2V14L2 10.4l2.4-1.6zm4.4 2l3-2 2.4 1.7L8.7 14v-3.3zM12.9 8L14.6 7v2.3L13 8zm-1.2-.8l-3-2V2L14 5.6l-2.4 1.6z"
                  />
                </svg>
                StackOverflow
              </a>
            </li>
            <li class="social-links__item">
              <a class="social-links__item-link" href="#">
                <svg
                  class="social-links__item-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 8"
                >
                  <path
                    d="M1.5 4c0-1.4 1.1-2.5 2.5-2.5h3.2V0H4a4 4 0 000 8h3.2V6.5H4A2.5 2.5 0 011.5 4zm3.3.8h6.4V3.2H4.8v1.6zM12 0H8.8v1.5H12a2.5 2.5 0 010 5H8.8V8H12a4 4 0 000-8z"
                  />
                </svg>
                Resume
              </a>
            </li>
          </ul>
        </div>
        <h3 class="about__additional-title">Recognition & Honors</h3>
        <table>
          <thead>
            <tr>
              <th>Organization</th>
              <th>Recognition</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Awwwards</td>
              <td>Mobile Excellence</td>
              <td>Faculty 2020</td>
            </tr>
            <tr>
              <td>Awwwards</td>
              <td>Honors</td>
              <td>Faculty 2020<br /></td>
            </tr>
            <tr>
              <td>Awwwards</td>
              <td>Mobile Excellence<br /></td>
              <td>Sigil (Jr. Developer Portfolio)</td>
            </tr>
            <tr>
              <td>Awwwards</td>
              <td>Honors</td>
              <td>Sigil (Jr. Developer Portfolio)<br /></td>
            </tr>
            <tr>
              <td>Humans</td>
              <td>Site Of The Day</td>
              <td>Portfolio FW19</td>
            </tr>
            <tr>
              <td>CSS Design Awards</td>
              <td>Special Kudos</td>
              <td>Portfolio FW19</td>
            </tr>
            <tr>
              <td>Awwwards</td>
              <td>Mobile Excellence</td>
              <td>Portfolio FW19</td>
            </tr>
            <tr>
              <td>Awwwards</td>
              <td>Honors</td>
              <td>Portfolio FW19</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="homepage-section writing">
        <nuxt-link class="homepage-section__link" to="/writing">
          <h2 class="homepage-section__title">Writing</h2>
        </nuxt-link>
      </section>
    </main>
  </div>
</template>

<script>
export default {}
</script>
