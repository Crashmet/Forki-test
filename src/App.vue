<template>
  <div id="app">
    <header class="header">
      <section class="header__top">
        <div class="container-fluid header__line header__line_top">
          <a class="header__left header-logo__container" href="#"
            ><svg
              viewBox="0 0 90 34"
              width="90"
              height="34"
              class="header__logo"
            >
              <use
                xlink:href="#darkLogoFill"
                transform="translate(.6 .42)"
                fill="#fff"
              ></use>
              <defs>
                <path
                  id="darkLogoFill"
                  fill-rule="evenodd"
                  d="M77.447.143c3.36-.495 6.436.308 8.508 2.256 1.915 1.762 2.888 4.265 2.637 6.923-.44 4.915-2.857 8.872-9.638 15.394l-11.082.371s7.692-6.924 10.611-10.293c1.884-2.194 2.7-4.544 1.915-6.12-.502-.99-1.6-1.484-2.95-1.422V.142zM54.75 4.037v6.399l9.606-1.02V2.708l-9.606 1.33zM46.902 33V5.12l6.592-.929v28.81h-6.592zM20.814 8.735v5.41l7.283-.804V7.746l-7.283.99zM14.818 33V9.57l5.054-.71V33h-5.054zM0 11.61v4.791l13.06-1.421V9.817L0 11.61zm4.175 5.069V33h4.772V16.185l-4.772.494zm16.639 6.956v-5.503l4.771-.402v5.657l-4.771.248zm0 3.956V33h7.283v-5.627l-7.283.217zm33.936-5.78v-6.522l6.31-.556v6.738l-6.31.34zm0 4.792V33h9.606v-6.708l-9.606.31zM30.012 33V7.468l5.745-.804V33h-5.745zm6.812-5.873V33h8.32v-6.12l-8.32.247zm29.667-.896l.031 6.77H89v-7.42l-22.509.65zm.314-12.149C66.428 6.355 69.63 1.626 76.16.266l.031 7.233c-1.38.556-2.73 1.608-2.417 5.965l-6.97.618z"
                ></path>
              </defs>
            </svg>
          </a>
          <div class="header__right">
            <button
              class="header-region__button region__button"
              id="region-search-opener"
            >
              <span class="region-button__icon">
                <svg
                  class="icon-location"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 0.0625C3.57444 0.100105 0.8125 2.885 0.8125 6.31455C0.8125 6.33228 0.8125 6.35054 0.8125 6.36827C0.8125 9.70059 6.35196 16.7504 6.58786 17.0485C6.68458 17.1716 6.83289 17.25 7 17.25C7.16711 17.25 7.31542 17.1716 7.41107 17.0496C7.64804 16.7504 13.1875 9.70059 13.1875 6.36559C13.1875 6.35054 13.1875 6.33282 13.1875 6.31455C13.1875 2.88446 10.425 0.100105 7.00322 0.0625H7ZM7 15.8398C5.25847 13.5486 1.87107 8.62402 1.87107 6.36559C1.87053 6.33873 1.86999 6.30649 1.86999 6.2748C1.86999 3.44209 4.16659 1.14605 7 1.14605C9.83341 1.14605 12.13 3.44209 12.13 6.2748C12.13 6.30649 12.1295 6.33873 12.1289 6.37042C12.1289 8.62294 8.74099 13.5465 6.99946 15.8387L7 15.8398ZM7 3.64515C6.98388 3.64462 6.96507 3.64462 6.94627 3.64462C5.37346 3.64462 4.09835 4.91942 4.09835 6.49183C4.09835 8.06424 5.37346 9.33904 6.94627 9.33904C8.51907 9.33904 9.79364 8.06478 9.79418 6.49237C9.79418 6.48485 9.79418 6.47571 9.79418 6.46658C9.79418 4.9178 8.54701 3.65966 7.00161 3.64247L7 3.64515ZM7 8.26033C6.99033 8.26033 6.97851 8.26086 6.96668 8.26086C5.98926 8.26086 5.19722 7.46902 5.19722 6.49183C5.19722 5.51465 5.98926 4.7228 6.96668 4.7228C7.94411 4.7228 8.73615 5.51465 8.73615 6.49183C8.73615 6.49237 8.73615 6.49237 8.73615 6.4929C8.73615 6.49613 8.73615 6.50043 8.73615 6.50419C8.73615 7.46633 7.96077 8.24797 7.00107 8.25818L7 8.26033Z"
                    fill="#7C8792"
                  /></svg></span
              >Москва и область
            </button>

            <button
              :class="{ 'header-notifications__button_none': !isMenuActive }"
              class="header-notifications__button"
              id="notifications-search-opener"
              @click.prevent="handlerClickNotification()"
            >
              <div class="header-notifications-button__icon notification-box">
                <div v-if="isNotification" class="notification-bell">
                  <span class="bell-top"></span>
                  <span class="notification-count"></span>
                  <span class="bell-middle"></span>
                  <span class="bell-bottom"></span>
                  <span class="bell-rad"></span>
                </div>

                <div v-else class="notification-bell_off">
                  <span class="bell-top"></span>
                  <span class="bell-middle"></span>
                  <span class="bell-bottom"></span>
                  <span class="bell-rad_off"></span>
                </div>
              </div>
            </button>
            <button class="header-menu__button" @click="handlerUpMenu">
              <template v-if="isMenuActive">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H17C17.5523 0.5 18 0.947715 18 1.5C18 2.05228 17.5523 2.5 17 2.5H1C0.447716 2.5 0 2.05228 0 1.5ZM0 7.5C0 6.94772 0.447715 6.5 1 6.5H17C17.5523 6.5 18 6.94772 18 7.5C18 8.05228 17.5523 8.5 17 8.5H1C0.447716 8.5 0 8.05228 0 7.5ZM1 12.5C0.447715 12.5 0 12.9477 0 13.5C0 14.0523 0.447716 14.5 1 14.5H17C17.5523 14.5 18 14.0523 18 13.5C18 12.9477 17.5523 12.5 17 12.5H1Z"
                    fill="white"
                  />
                </svg>
              </template>
              <template v-else>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.7911 0.209367C17.5142 -0.06751 17.0653 -0.0675106 16.7884 0.209367L9 7.99781L1.21156 0.209367C0.934684 -0.0675106 0.485778 -0.06751 0.208901 0.209367C-0.0679766 0.486244 -0.0679767 0.935151 0.2089 1.21203L7.99734 9.00047L0.2089 16.7889C-0.0679772 17.0658 -0.0679771 17.5147 0.2089 17.7916C0.485777 18.0684 0.934683 18.0684 1.21156 17.7916L9 10.0031L16.7884 17.7916C17.0653 18.0684 17.5142 18.0684 17.7911 17.7916C18.068 17.5147 18.068 17.0658 17.7911 16.7889L10.0027 9.00047L17.7911 1.21203C18.068 0.935151 18.068 0.486244 17.7911 0.209367Z"
                    fill="white"
                  />
                </svg>
              </template>
            </button>
          </div>
        </div>
      </section>

      <section class="header__bottom header__bottom-desktop">
        <div class="container-fluid">
          <div class="header__line header__line_bottom">
            <nav class="header__nav">
              <ul class="header-nav__list">
                <li
                  v-for="item in menuNames"
                  :class="{ 'header-nav__item_active': item.isActive }"
                  class="header-nav__item"
                  :key="item.name"
                  @click="handlerAddActiveClass(item.name)"
                >
                  {{ item.name }}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section
        class="header__bottom header__bottom-mobile"
        :class="{ header__bottom_none: isMenuActive }"
      >
        <div class="header__line header__line_bottom">
          <nav class="header__nav">
            <ul class="header-nav__list">
              <li
                v-for="item in menuNames"
                :class="{ 'header-nav__item_active': item.isActive }"
                class="header-nav__item"
                :key="item.name"
                @click="handlerAddActiveClass(item.name)"
              >
                {{ item.name }}
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>

    <footer v-show="!isMenuActive" class="footer-mobile">
      <button
        class="footer-region__button region__button"
        id="region-search-opener"
      >
        <span class="region-button__icon">
          <svg
            class="icon-location"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 0.0625C3.57444 0.100105 0.8125 2.885 0.8125 6.31455C0.8125 6.33228 0.8125 6.35054 0.8125 6.36827C0.8125 9.70059 6.35196 16.7504 6.58786 17.0485C6.68458 17.1716 6.83289 17.25 7 17.25C7.16711 17.25 7.31542 17.1716 7.41107 17.0496C7.64804 16.7504 13.1875 9.70059 13.1875 6.36559C13.1875 6.35054 13.1875 6.33282 13.1875 6.31455C13.1875 2.88446 10.425 0.100105 7.00322 0.0625H7ZM7 15.8398C5.25847 13.5486 1.87107 8.62402 1.87107 6.36559C1.87053 6.33873 1.86999 6.30649 1.86999 6.2748C1.86999 3.44209 4.16659 1.14605 7 1.14605C9.83341 1.14605 12.13 3.44209 12.13 6.2748C12.13 6.30649 12.1295 6.33873 12.1289 6.37042C12.1289 8.62294 8.74099 13.5465 6.99946 15.8387L7 15.8398ZM7 3.64515C6.98388 3.64462 6.96507 3.64462 6.94627 3.64462C5.37346 3.64462 4.09835 4.91942 4.09835 6.49183C4.09835 8.06424 5.37346 9.33904 6.94627 9.33904C8.51907 9.33904 9.79364 8.06478 9.79418 6.49237C9.79418 6.48485 9.79418 6.47571 9.79418 6.46658C9.79418 4.9178 8.54701 3.65966 7.00161 3.64247L7 3.64515ZM7 8.26033C6.99033 8.26033 6.97851 8.26086 6.96668 8.26086C5.98926 8.26086 5.19722 7.46902 5.19722 6.49183C5.19722 5.51465 5.98926 4.7228 6.96668 4.7228C7.94411 4.7228 8.73615 5.51465 8.73615 6.49183C8.73615 6.49237 8.73615 6.49237 8.73615 6.4929C8.73615 6.49613 8.73615 6.50043 8.73615 6.50419C8.73615 7.46633 7.96077 8.24797 7.00107 8.25818L7 8.26033Z"
              fill="#7C8792"
            /></svg></span
        >Москва и область
      </button>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      isMenuActive: true,

      isNotification: true,

      activNavClass: 'header-nav__item_active',
    };
  },

  computed: { ...mapGetters('menuNavStore', ['menuNames']) },

  methods: {
    ...mapActions('menuNavStore', ['setMenuStatus']),

    handlerUpMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    handlerAddActiveClass(name) {
      this.setMenuStatus(name);
    },

    handlerClickNotification() {
      this.isNotification = !this.isNotification;
    },
  },
};
</script>

<style src="@/styles/fonts/fonts.css"></style>
<style src="@/styles/normalize.css"></style>
<style src="@/styles/allBaseStyle.css"></style>

<style>
:root {
  --base-font-family: 'tele2_textsans_regular', sans-serif;
  --bold-font-family: 'tele2_displayserif-bold', serif;
  --regular-title-font-family: 'tele2_displayserif-regular', serif;
  --banner-font-family: 'Standart CT Stencil';
  --color-main-black: #1f2229;
  --color-main-white: #fff;
}

.header__top {
  background-color: var(--color-main-black);
}

.header__line {
  height: 2.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header__line_top {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.header-logo__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header__logo {
  min-width: 3.6875rem;
  max-width: 1.375rem;
}

.header__right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.region__button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 2.3125rem;
  font-family: var(--base-font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: #7c8792;
  background-color: transparent;
  opacity: 0.9;
  -webkit-transition: color 0.25s ease-in;
  -o-transition: color 0.25s ease-in;
  transition: color 0.25s ease-in;
}

.region__button:hover,
.region__button:active {
  color: #d2dae2;
  -webkit-transition: color 0.25s ease-in;
  -o-transition: color 0.25s ease-in;
  transition: color 0.25s ease-in;
}

.region-button__icon {
  display: inline-block;
  margin-right: 0.75rem;
  width: 0.875rem;
  height: 1.25rem;
}

.region__button svg {
  width: 0.875rem;
  height: 1.125rem;
}

.region__button svg path {
  -webkit-transition: fill 0.25s ease-in;
  -o-transition: fill 0.25s ease-in;
  transition: fill 0.25s ease-in;
}

.region__button:hover svg path,
.region__button:active svg path {
  fill: #d2dae2;
  -webkit-transition: fill 0.25s ease-in;
  -o-transition: fill 0.25s ease-in;
  transition: fill 0.25s ease-in;
}

.footer-region__button {
  display: none;
}

.header-menu__button {
  display: none;
}

/* *** BELL *** */

.notification-box {
  text-align: center;
  background-color: var(--color-main-black);
}

.notification-bell {
  -webkit-animation: bell 1s 1s both infinite;
  animation: bell 1s 1s both infinite;
}

.notification-bell * {
  display: block;
  margin: 0 auto;
  background-color: transparent;
  border: 0.125rem solid var(--color-main-white);
  border-bottom: 0;
}

.notification-bell_off * {
  display: block;
  margin: 0 auto;
  background-color: transparent;
  border: 0.125rem solid var(--color-main-white);
  border-bottom: 0;
}

.bell-top {
  width: 0.375rem;
  height: 0.25rem;
  border-radius: 0.1875rem 0.1875rem 0 0;
}

.bell-middle {
  position: relative;
  width: 0.9375rem;
  height: 0.875rem;
  margin-top: -0.0625rem;
  border-radius: 0.7813rem 0.7813rem 0 0;
}

.bell-bottom {
  position: relative;
  z-index: 0;
  width: 1.125rem;
  height: 0.0625rem;
  background-color: var(--color-main-white);
}

.bell-bottom::before,
.bell-bottom::after {
  content: '';
  position: absolute;
  top: -0.25rem;
}

.bell-rad {
  width: 0.3625rem;
  height: 0.1875rem;
  margin-top: 0.0625rem;
  background-color: transparent;
  border-bottom: 0.1062rem solid var(--color-main-white);
  border-top: 0;
  border-radius: 0 0 3.125rem 3.125rem;
  -webkit-animation: rad 1s 3s both infinite;
  animation: rad 1s 3s both infinite;
}

.bell-rad_off {
  width: 0.3625rem;
  height: 0.1875rem;
  margin-top: 0.0625rem;
  background-color: transparent;
  border-bottom: 0.1062rem solid var(--color-main-white);
  border-top: 0;
  border-radius: 0 0 3.125rem 3.125rem;
}

.notification-count {
  position: absolute;
  z-index: 1;
  right: -0.1938rem;
  top: 0.1062rem;
  width: 0.6875rem;
  height: 0.6875rem;
  border-radius: 50%;
  background: #3fcbff;
  border: 0.1563rem solid var(--color-main-black);
  /* animation: zoom 3s 3s both infinite; */
}
@-webkit-keyframes bell {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  10% {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg);
  }
  20% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  80% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  90% {
    -webkit-transform: rotate(-21deg);
    transform: rotate(-21deg);
  }
  100% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
}
@keyframes bell {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  10% {
    -webkit-transform: rotate(21deg);
    transform: rotate(21deg);
  }
  20% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  80% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  90% {
    -webkit-transform: rotate(-21deg);
    transform: rotate(-21deg);
  }
  100% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
}
@-webkit-keyframes rad {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
  }
  20% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  80% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  90% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes rad {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
  }
  20% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  80% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  90% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes zoom {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  10% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes zoom {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  10% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

/* *** HEADER BOTTOM *** */

.header__bottom-mobile {
  display: none;
}

.header__line_bottom {
  position: relative;
  height: 2.9375rem;
}

.header__line_bottom::after {
  content: '';
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 97%;
  height: 0.0625rem;
  background: #d3d9df;
}

.header-nav__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header-nav__item {
  position: relative;
  font-family: var(--base-font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: #7c8792;
  cursor: pointer;
  -webkit-transition: color 0.25s ease-in;
  -o-transition: color 0.25s ease-in;
  transition: color 0.25s ease-in;
}

.header-nav__item:not(:last-child) {
  margin-right: 1.125rem;
}

.header-nav__item:hover,
.header-nav__item_active {
  color: var(--color-main-black);
  -webkit-transition: color 0.25s ease-in;
  -o-transition: color 0.25s ease-in;
  transition: color 0.25s ease-in;
}

.header-nav__item::before,
.header-nav__item_active::before {
  content: '';
  position: absolute;
  z-index: 10;
  display: block;
  bottom: -0.875rem;
  height: 0.125rem;
  background: none repeat scroll 0 0 transparent;
  background: var(--color-main-black);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
}

.header-nav__item::before {
  left: 50%;
  width: 0;
}

.header-nav__item:hover::before,
.header-nav__item:focus::before,
.header-nav__item:active::before {
  width: 100%;
  left: 0;
}

.header-nav__item_active::before {
  left: 0;
  width: 100%;
}

/* *** FOOTER MOBILE *** */

.footer-mobile {
  display: none;
  padding: 10px;
  background-color: #f3f5f6;
}

@media (max-width: 900px) {
  .header__bottom-desktop {
    display: none;
  }

  .header__bottom-mobile {
    display: block;
    margin-bottom: 300px;
  }

  .header__bottom_none {
    display: none;
  }

  .header-notifications__button_none {
    display: none;
  }

  .header__line_top {
    height: 45px;
    margin-bottom: 16px;
  }

  .header-region__button {
    display: none;
  }

  .footer-region__button {
    display: flex;
  }

  .header__line_bottom {
    padding: 0px 15px;
    gap: 16px;
    height: 260px;
  }

  .header__line_bottom::after {
    display: none;
  }

  .header__nav {
    width: 100%;
    max-width: 23.4375rem;
  }

  .header-nav__list {
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;

    width: 100%;
  }

  .header-nav__item {
    padding: 8px 0 10px;
    width: 100%;
    font-family: var(--base-font-family);
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    border-bottom: 1px solid #ededed;
    color: #959597;
  }

  .header-nav__item:not(:last-child) {
    margin-right: 0;
    margin-bottom: 8px;
  }

  .header-nav__item:hover,
  .header-nav__item_active {
    color: var(--color-main-black);
    -webkit-transition: color 0.25s ease-in;
    -o-transition: color 0.25s ease-in;
    transition: color 0.25s ease-in;
  }

  .header-nav__item::before,
  .header-nav__item_active::before {
    bottom: 0;
  }

  .header-menu__button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 24px;
    background-color: transparent;
  }

  .footer-mobile {
    display: block;
  }
}
</style>
