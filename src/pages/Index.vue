<template>
  <h1>
    modal challenge
  </h1>
  <button @click="showModal">表示</button>
  <div v-show="activateModal">
    <div
      class="overlay"
      @click="closeModal"
    />
    <div class="modal">
      <h2>モーダル</h2>
      <p>
        テストテストテスト
      </p>
      <button @click="closeModal">閉じる</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const activateModal = ref(false)
    
    const showModal = () => {
      activateModal.value = true
    }

    const closeModal = () => {
      activateModal.value = false
    }

    return { activateModal, closeModal, showModal }
  }
})
</script>

<style>
.overlay {
  background-color: #000;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  transition: all .5s ease;
  opacity: 0.7;
}

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
