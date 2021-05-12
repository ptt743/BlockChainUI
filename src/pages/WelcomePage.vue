<template>
    <q-page class="">
      <div class="row justify-center q-mt-lg q-ml-xl">
        <div class="col-3 q-mt-xl">
          <p class="text-h3 text-grey-8 text-bold">Ethereum's Original Wallet</p>
          <p class=" text-grey-6 ">MyEtherWallet (our friends call us MEW) is a free, client-side interface helping you interact with the Ethereum blockchain. Our easy-to-use, open-source platform allows you to generate wallets, interact with smart contracts, and so much more.</p>
          </div>
        <div class="col-4 q-ml-md " style="height:80%"><img  style="height:350px" src="https://lh3.googleusercontent.com/proxy/wKMaV48UBrGYmFaHkkoBPcy5bH2PELrz33WANGDSxYOQe1wKFDq3g4nYKGTPXRxEqqP8xVY6GFKAdcHylWwol2n09A9xvSXDmL6IVeVIg7BE90v9cDica_6enpg=w1200-h630-p-k-no-nu" alt=""></div>
      </div>
      <div class="row justify-center q-mt-lg" >
        <div class="col-3 q-mr-lg" @click="handleClick1()" >
            <q-card
              class="my-card text-white vertical-middle  "
              style="background: #5a78f0; height:93%"
            >
              <q-card-section>
                <div class="row vertical-middle justify-around ">
                  <div class="col-2 q-mt-xl" >
                    <q-icon
                      size='xl'
                      name="account_balance_wallet"
                    />
                  </div>
                  <div class="col-9">
                    <div class="text-h5 ">Create A New Wallet</div>
                    <div class="text-caption">Generate your own unique Ethereum wallet. Receive a public address (Ox...) and choose a method of address and recovery</div>
                  </div>
                </div>
              </q-card-section>
      </q-card>
        </div>
        <div class="col-3 q-ml-lg" @click="handleClick2()" >
            <q-card
              class="my-card text-white vertical-middle"
              style="background: #05c0a5; height:93% "
            >
              <q-card-section>
                <div class="row justify-around">
                  <div class="col-2" style="height:100%">
                    <q-icon
                     class="q-mt-xl"
                      size='xl'
                      name="https"
                    />
                  </div>
                  <div class="col-9 vertical-middle">
                    <div class="text-h5">Access My Wallet</div>
                      <div class="text-caption">Connect to the blockchain using the wallet of your choice</div>
                      <q-list class="no-padding no-margin text-caption">
                        <div>Send and Swap ETH & Tokens</div>
                        <div>Sign & Verify Messages</div>
                        <div>Interact with Contracts, ENS, Dapps, and more!</div>
                      </q-list>
                        </div>
                </div>

              </q-card-section>
      </q-card>
        </div>
      </div>
      <div class="q-mt-md row justify-evenly" style="height: 50%; background-color: #0b2840">
        <div class="col-2 ">
              <q-list class=""  >
                <q-item clickable v-ripple class="text-white">
                  <q-item-section>Single line item</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Convert Units</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>MEW Wallet</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Buy a hardware wallet</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>MEW CX</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Send Office Helper</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Verify Message</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Submit Dapp</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Press Kit</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Genarate Eth2 Address</q-item-section>
                </q-item>
              </q-list>
        </div>
        <div class="col-2">
              <q-list   >
                <q-item clickable v-ripple class="text-white">
                  <q-item-section>Affiliates</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Ledger Wallet</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Ether Card</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Alchemy</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Bity</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Billfodl</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Finney</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Trezor</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Secalot</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>KeepKey</q-item-section>
                </q-item>
              </q-list>
        </div>
        <div class="col-2">
              <q-list   >
                <q-item clickable v-ripple class="text-white">
                  <q-item-section>MEW</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>About</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Team</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>FAQs</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>MEWtopia</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Customer Support</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Help Center</q-item-section>
                </q-item>
              </q-list>
        </div>
        <div class="col-2">
          <q-list>
            <q-item clickable v-ripple class="text-white">
               <q-item-section>
                 Love  MEW? Donate
               </q-item-section>
            </q-item>
                <q-item  v-ripple class="text-blue-grey-8">
                  <q-item-section>MyEtherWallet is open-source and free to the community. Your donations go a long way towards making that possible.</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Ethereum Donation</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue-grey-8">
                  <q-item-section>Bitcoin Donation</q-item-section>
                </q-item>
          </q-list>
        </div>
      </div>
    </q-page>
</template>
<script>
export default {
  created () {
    this.dialog = true
  },
  data () {
    return {
      dialog: false,
      maximizedToggle: true,
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },
  methods: {
    handleClick1 () {
      this.$router.push('/')
    },
    handleClick2 () {
      this.$router.push('/signin')
    }
  }
}
</script>
