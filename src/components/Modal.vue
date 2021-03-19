<template>
  <div v-if="modal.active" class="modal">
    <h2>モーダル</h2>
    <div>
        {{ modal.id }} 番目のモーダルですよ！
    </div>
    <button @click="clickDeactivate">閉じる</button>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Modal',
  props: {
    modal: {
      type: Object,
    }
  },
  setup(props, context) {
    const modal = reactive(props.modal)

    const clickDeactivate = () => {
      modal.active = false
      context.emit('change', { ...modal })
    }

    return {
      modal,
      clickDeactivate,
    }
  }
}
</script>

<style>
.modal {
  padding: 15px;
  width: 480px;
  z-index: 15;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

</style>
