<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <div v-if="clickNext" >
        <q-card class="my-card" style="height:370px; width:300px">
          <q-card-section style="padding-bottom:0px; margin-bottom:0px; height:50px">
            <p class="absolute-center text-center text-h6 text-grey-8" style=" padding-bottom: 0px;margin-bottom: 0px;width:70%">Save My Keystore File</p>
          </q-card-section >
          <q-card-section style="padding-top: 0px;margin-top: 0px;">
            <q-card class="my-card " style="background-color: #f9f9f9">
              <div class="row">
                <div class="col-2">
                  <q-icon class="q-mt-sm q-ml-sm" name="task" size='lg'/>
                </div>
                <div class="col-10">
                  <div class=" q-ml-md q-mr-md  ">
                    Don't close it
                  </div>
                  <div class=" q-ml-md text-grey-8 ">
                    Be careful, it can not be recovered if you lose it.
                  </div>
                </div>
              </div>

            </q-card>
            <q-card class="my-card q-mt-sm" style="background-color: #f9f9f9">
               <div class="row">
               <div class="col-2">
                 <q-icon class="q-mt-md q-ml-sm" name = "folder_shared" size='lg'></q-icon>
                </div>
                <div class="col-10">
                  <div class="q-ml-md q-mr-md ">
                    Don't Share It
                  </div>
                  <div class=" q-ml-md text-grey-8 ">
                    Your funds will be stolen if you use this file on a malicious phishing site.
                  </div>
                </div>
              </div>
            </q-card>
            <q-card class="my-card q-mt-sm" style="background-color: #f9f9f9">
              <div class="row">
                  <div class="col-2">
                 <q-icon class="q-mt-sm q-ml-sm" name = "topic" size='lg'></q-icon>
                  </div>
                  <div class="col-10">
                    <div class="q-ml-md q-mr-md ">
                      Make a Backup
                    </div>
                    <div class=" q-ml-md  text-grey">
                      Secure it like the millions of dollars it may one day be worth.
                    </div>
                  </div>
              </div>

            </q-card>
          </q-card-section
          >
          <q-card-section style="height: 50px;padding-top: 0px;margin-top: 0px;">
          <!-- <q-btn class="absolute-center text-white" style="background-color:#05c0a5" label="Download KeyStore File" @click="saveFile()" /> -->
            <vue-blob-json-csv
            class="absolute-center text-white" style="background-color:#05c0a5"
              tag-name="div"
              file-type="json"
              file-name="sample"
              title="Download JSON"
              :data="privateKey"
              confirm="Do you want to download it?"
              />
          </q-card-section>
        </q-card>
      </div>
      <div v-else>
        <q-card class="my-card" style="height:200px; width:300px">
          <q-card-section style="padding-bottom:0px; margin-bottom:0px; height:50px">
            <p class="absolute-center text-center text-h6 text-grey-8" style=" padding-bottom: 0px;margin-bottom: 0px;width:70%">Xin chào</p>
          </q-card-section >
          <q-card-section style="padding-top: 0px;margin-top: 0px;">
          </q-card-section
          >
          <q-card-section style="height: 50px">
          <q-btn class="absolute-center" color="primary" label="Tạo ví" @click="handleClick()" />
          </q-card-section>
        </q-card>
      </div>
      <q-dialog v-model="dialog" style="padding:0px">
        <q-card class="bg-primary text-white" style="padding:0px">

          <q-card-section class="q-pt-none " style="height:100%;padding:0px" >
            <q-carousel
              v-model="slide"
              transition-prev="scale"
              transition-next="scale"
              swipeable
              animated
              control-color="black"
              navigation
              padding
              arrows
              height="100%"
              class=" text-black shadow-1 rounded-borders"
            >
              <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="style" size="56px" />
                <div class="q-mt-md text-center">
                  {{ lorem }}
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <q-icon name="live_tv" size="56px" />
                <div class="q-mt-md text-center">
                  {{ lorem }}
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="layers" class="column no-wrap flex-center">
                <q-icon name="layers" size="56px" />
                <div class="q-mt-md text-center">
                  {{ lorem }}
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="map" class="column no-wrap flex-center">
                <q-icon name="terrain" size="56px" />
                <div class="q-mt-md text-center">
                  {{ lorem }}
                </div>
              </q-carousel-slide>
            </q-carousel>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
export default {
  created () {
    this.dialog = true
    console.log(this.$socket)
    console.log('aaaaaaaaaaaaaaaaa')
  },
  data () {
    return {
      dialog: false,
      maximizedToggle: true,
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      clickNext: false,
      privateKey: ''
    }
  },
  methods: {
    handleClick () {
      this.clickNext = true
      this.$axios.get('http://localhost:5000/createWallet').then((result) => {
        this.privateKey = result.data.privateKey
      })
    },
    saveFile () {
      const temp = this.privateKey
      const data = temp
      console.log(data)
      const fs = require('fs')
      try { fs.writeFileSync('myfile.txt', data, 'utf-8') } catch (e) { alert('Failed to save the file !') }
    }
  }
}
</script>
