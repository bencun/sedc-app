<template>
  <button @click="handleClick" class="custom-button">
    <span class="button-text">
      Klikni me: {{ doubleCount }}
    </span>
  </button>
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
      myCount: {
        type: Number
      }
    },
    methods: {
      handleClick() {
        // NE NE NE this.myCount += 1;
        this.$emit('klik-na-dugme', {amount: 1}); // DA DA DA
      }
    },
    computed: {
      doubleCount() {
        return this.myCount * 10;
      },
    },
}
</script>

<style lang="scss" scoped>
$button-color: #333333;
$text-color: #EEEEEE;

.custom-button {
  background-color: $button-color;
  
  .button-text {
    color: $text-color;
  }
}
</style>