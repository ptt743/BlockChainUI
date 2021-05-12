<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <div v-if="clickNext" >
        <q-card class="my-card" style="height:360px; width:300px">
          <q-card-section style="padding-bottom:0px; margin-bottom:0px; height:50px">
            <p class="absolute-center text-center text-h6 text-grey-8 q-mt-md" style=" padding-bottom: 0px;margin-bottom: 0px;width:70%">Upload Your Keystore File</p>
          </q-card-section >
          <q-card-section style="padding-top: 0px;margin-top: 40px;" >
                <q-input v-model="privateKey" label="Standard" />
          </q-card-section
          >
          <q-card-section style="height: 50px;padding-top: 0px;margin-top: 0px;">
          <q-btn class="absolute-center text-white" style="background-color:teal" label="Upload KeyStore File" @click="handleClick()" />
          </q-card-section>
        </q-card>
      </div>
      <div v-else>
        <q-card class="my-card" style="height:200px; width:300px">
          <q-card-section style="padding-bottom:0px; margin-bottom:0px; height:50px">
            <p class="absolute-center text-center text-h6 text-grey-8" style=" padding-bottom: 0px;margin-bottom: 0px;width:70%">Input your passwords</p>
          </q-card-section >
          <q-card-section style="padding-top: 0px;margin-top: 0px;">
          <q-input type="password"></q-input>
          </q-card-section
          >
          <q-card-section style="height: 50px">
          <q-btn class="absolute-center" color="teal" label="Next" @click="handleClick()" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  created () {
    this.dialog = true
    console.log('aaaaaaaabbbbbbbbbbbb')
  },
  mounted () {
  },
  data () {
    return {
      privateKey: '',
      file: null,
      dialog: false,
      maximizedToggle: true,
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      clickNext: true
    }
  },
  methods: {
    handleClick () {
      const privateKey = this.privateKey
      this.$axios.post('http://localhost:5000/getarrdess', {
        privateKey
      }).then((res) => {
        console.log(res)
      })
      this.$router.push('/mainpage')
    }
  }
}
</script>
