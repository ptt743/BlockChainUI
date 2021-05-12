<template>
    <q-layout view="hHh Lpr lff" container style="height: 1000px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu"></q-btn>
          <q-toolbar-title>PTW</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
      >
      <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab name="listUsers" icon="list_alt" label="List Users" @click="toDashboard"/>
          <q-tab name="addUser" icon="person_add" label="Add Users" @click="toAdduser"/>
          <q-tab name="logout" icon="logout" label="Logout" @click="showConfirm"/>
        </q-tabs>
      </q-drawer>
      <q-dialog v-model="open" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="logout" color="primary" text-color="white" />
          <span class="q-ma-lg">Are you sure to logout?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup  />
          <q-btn  label="Logout" color="primary" v-close-popup unelevated @click="logout"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
      <q-page-container>

         <router-view />
      </q-page-container>
    </q-layout>
</template>

<script>

export default {
  name: 'MenuLayout',
  created () {
    const ws = new WebSocket(process.env.PTW_WS)
    ws.onmessage = ({ data }) => {
      console.log(data)
    }
  },
  data () {
    return {
      leftDrawerOpen: false,
      drawer: true,
      tab: 'List User',
      open: false
    }
  },
  methods: {
    toDashboard () {
      this.$router.push('/')
    },
    toAdduser () {
      this.$router.push('/adduser')
    },
    showConfirm () {
      this.open = true
    },
    logout () {
      localStorage.clear()
      this.$store.dispatch('accountsList/logout')
      this.$router.push('/login')
    }

  }
}
</script>
<style>
  .menu-list .q-item{
    border-radius: 0 32px 32px 0
  }
  .q-pa-md-main {
    padding: 0;
  }
  .justify-center, .flex-center{
    font-size: 15px;
  }
  .bg-black {
    background: #009688 !important;
  }
  .bg-primary {
    background: #009688 !important;
  }

</style>
