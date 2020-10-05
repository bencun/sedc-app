<template>
  <div id="app">
    Hello, world!
    <custom-button/>
    <custom-button/>
    <custom-button/>
    <custom-button/>
    <custom-button/>
  </div>
</template>

<script>
import CustomButton from './components/CustomButton.vue';
// MojaVelikaKomponenta => <moja-velika-komponenta/>
export default {
  name: 'App',
  // register the components
  components: { CustomButton }
}
</script>

<style lang="scss">
</style>
