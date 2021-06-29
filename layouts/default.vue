<template>
  <div id="app-wraper">
    <aside class="menu-application">
      <div class="menu__sticky">
        <div
          v-if="userData && Object.keys(userData).length > 0"
          class="menu__image"
        >
          <img src="/img/icons/ic_logo.svg" alt="Logo Backoffice" />
          <label id="menu__username">{{ userData.fullname }}</label>
          <label id="menu__rol">{{ $t(`rol.${userData.rol}`) }}</label>
        </div>
        <div class="menu__content">
          <button
            v-for="(item, index) in items"
            :key="index"
            class="item-menu"
            :class="{ active: actualPage.includes(item.to) }"
            @click="goto(item.to)"
          >
            <img :src="`/img/icons/${item.img}.svg`" :alt="item.text" />
            <span>{{ item.text }}</span>
          </button>
        </div>
      </div>
    </aside>
    <main class="main-application">
      <nav>
        <GeneralBreadcrumb />
        <div id="actions-menu">
          <button id="notification-section" @click="showNotifications">
            <img src="/img/icons/ic_notification2.svg" />
            {{ $t('menu.notification') }}
          </button>
          <button id="logout-section" @click="showLogout = true">
            <img src="/img/icons/ic_sign.svg" />
            {{ $t('menu.logout') }}
          </button>
        </div>
      </nav>
      <div class="content-application">
        <Nuxt />
      </div>
    </main>

    <GeneralLanguageSelector v-if="language" />

    <LoginLogout :dialog="showLogout" @closeModal="showLogout = false" />

    <Toast position="top-right" />
  </div>
</template>

<script>
export default {
  name: 'Default',
  data: () => ({
    items: [],
    actualPage: '',
    showLogout: false,
  }),
  computed: {
    userData() {
      return this.$store.state.user
    },
    language() {
      return this.$store.state.languageModal.show
    },
  },
  watch: {
    '$route.path'(newVal, oldVal) {
      const route = this.validateRol(newVal)

      if (route && oldVal !== newVal) {
        this.actualPage = newVal
      }
    },
  },
  mounted() {
    this.actualPage = this.$route.path

    if (this.$cookies.get('userdata')) {
      this.$nextTick(() => {
        this.initLang()

        this.validateRol(this.actualPage)
      })

      this.$store.commit('setUserData', this.$cookies.get('userdata'))
    } else {
      this.$router.push(this.localePath({ path: '/login' }))
    }
  },
  methods: {
    initLang() {
      if (this.userData.rol === 'admin') {
        this.items = [
          {
            text: this.$t('menu.report'),
            img: 'ic_reports',
            to: '/reports',
          },
          {
            text: this.$t('menu.payment'),
            img: 'ic_payment',
            to: '/payment',
          },
          {
            text: this.$t('menu.setting'),
            img: 'ic_setting',
            to: '/setting',
          },
          {
            text: this.$t('menu.category'),
            img: 'ic_category',
            to: '/category',
          },
          {
            text: this.$t('menu.plan'),
            img: 'ic_plan',
            to: '/plan',
          },
          {
            text: this.$t('menu.exerciseCatalog'),
            img: 'ic_exercise_catalog',
            to: '/exercise-catalog',
          },
          {
            text: this.$t('menu.client'),
            img: 'ic_client',
            to: '/client',
          },
          {
            text: this.$t('menu.admin'),
            img: 'ic_admin',
            to: '/admin',
          },
          {
            text: this.$t('menu.notification'),
            img: 'ic_notification',
            to: '/notification',
          },
          {
            text: this.$t('menu.country'),
            img: 'ic_country',
            to: '/country',
          },
          {
            text: this.$t('menu.language'),
            img: 'ic_language',
            to: '/language',
          },
          {
            text: this.$t('menu.help'),
            img: 'ic_help',
            to: '/help',
          },
        ]
      } else if (this.userData.rol === 'ops') {
        this.items = [
          {
            text: this.$t('menu.category'),
            img: 'ic_category',
            to: '/category',
          },
          {
            text: this.$t('menu.exerciseCatalog'),
            img: 'ic_exercise_catalog',
            to: '/exercise-catalog',
          },
          {
            text: this.$t('menu.client'),
            img: 'ic_client',
            to: '/client',
          },
          {
            text: this.$t('menu.notification'),
            img: 'ic_notification',
            to: '/notification',
          },
        ]
      }
    },
    goto(path) {
      const route = this.validateRol(path)

      if (route) {
        if (this.actualPage === path) {
          this.$router.push(this.localePath({ path }))
        } else {
          this.actualPage = path
          this.$router.push(this.localePath({ path }))
        }
      }
    },
    showNotifications() {},
    validateRol(page) {
      const item = this.items.filter((item) => page.includes(item.to))

      if (item.length > 0) {
        return true
      } else {
        this.$router.push(this.localePath({ path: this.items[0].to }))
        return false
      }
    },
  },
}
</script>
