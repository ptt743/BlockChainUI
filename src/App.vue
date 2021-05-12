<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {
      connection: null
    }
  },
  name: 'App',
  created: function () {
    this.connection = new WebSocket('ws://localhost:6001/ws')
    this.connection.onmessage = ({ data }) => {
      console.log(data)
    }
    this.connection.send('')
  }
}
</script>
