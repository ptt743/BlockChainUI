<template>
  <q-layout view="lHh Lpr lFf">
    <q-header >
    <q-toolbar class="bg-white text-black">
      <q-toolbar-title>
        My Coin
      </q-toolbar-title>
    <q-btn-dropdown  unelevated  style="color: #FF0080" :label="choosedItem">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick( ' English' )">
          <q-item-section>
            <q-item-label>English</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick( ' Vietnam' )">
          <q-item-section>
            <q-item-label>VietNam</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick( ' Chinese' )">
          <q-item-section>
            <q-item-label>Chinese</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
      <q-btn flat round dense icon="more_vert" />
    </q-toolbar>
    </q-header>

      <q-footer class="bg-white" elevated>
        <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
      </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  data () {
    return {
      choosedItem: 'English',
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  methods: {
    onItemClick (value) {
      this.choosedItem = value
    }
  }
}
</script>
