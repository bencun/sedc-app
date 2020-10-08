<template>
  <!--
    v-bind je :
    v-on je @
  -->
  <div id="app">
    <custom-button :my-count="count"
    @klik-na-dugme="incrementCount"/>
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
    };
  },
  methods: {
    incrementCount(eventData) {
      this.count = this.count + eventData.amount;
    }
  }
}
</script>