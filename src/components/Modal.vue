<template>
  <h2>モーダル</h2>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modal: {
      type: Object,
    }
  },
  setup(props, context) {
  }
}
</script>

<style>
.modal {
  padding: 15px;
  width: 480px;
  z-index: 15;
  background-color: #fff;
}

</style>
