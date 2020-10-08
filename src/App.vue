<template>
  <!--
    v-bind je :
    v-on je @
    v-model
  -->
  <div id="app">
    <input type="text" v-model="message"/>
    <input type="checkbox" v-model="check"/>
    <custom-button :my-count="count"
    @klik-na-dugme="incrementCount"/>
    <div>{{ message }}</div>
  </div>
</template>

<script>
import CustomButton from './components/CustomButton.vue';
// MojaVelikaKomponenta => <moja-velika-komponenta/>
export default {
  name: 'App',
  // register the components
  components: { CustomButton },
  data() {
    return {
      count: 0,
      message: 'Testiram Vue',
      check: false,
    };
  },
  methods: {
    incrementCount(eventData) {
      this.count = this.count + eventData.amount;
    }
  }
}
</script>