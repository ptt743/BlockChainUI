<template>
  <p-page>
    <div class="row justify-center">
      <div class="col-3 q-ma-md">
            <q-card class="my-card bg-purple text-white">
              <q-card-section>
                <div class="text-h6">Balance : ${{this.balance}}</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
            </q-card>
      </div>
      <div class="col-3 q-ma-md">
            <q-card class="my-card bg-purple text-white">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
              </q-card-actions>
            </q-card>
      </div>
      <div class="col-3 q-ma-md">
            <q-card class="my-card bg-purple text-white">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
              </q-card-actions>
            </q-card>
      </div>
    </div>
    <div class="row justify-center" style="height:60vh">
      <div class="col-3 q-ma-md">
            <q-card class="my-card bg-purple text-white" style="height:100%">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
              </q-card-actions>
            </q-card>
      </div>
      <div class="col-3 q-ma-md">
            <q-card class="my-card bg-purple text-white" style="height:100%">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
              </q-card-actions>
            </q-card>
      </div>
      <div class="col-3 q-ma-md">
        <div class="column justify-between" style="height:100%">
          <div class="col-4" >
            <q-card class="my-card bg-purple text-white" style="height:100%">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
            </q-card>
          </div>
           <div class="col-3">
            <q-card class="my-card bg-purple text-white" style="height:100%" >
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
            </q-card>
           </div>
            <div class="col-4">
            <q-card class="my-card bg-purple text-white" style="height:100%">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
            </q-card>
            </div>
        </div>

      </div>
    </div>
  </p-page>
</template>
<script>

export default {
  created () {
    this.$axios.get('http://localhost:5000/balance').then((res) => {
      console.log(res.data)
    })
  },
  data () {
    return {
      balance: 0
    }
  },
  methods: {
    handleClick () {
      this.axios.post('http://localhost:5000/transaction/broadcast')
    }
  }
}
</script>
