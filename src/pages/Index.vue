<template>
  <h1>
    modal challenge
  </h1>
  <div>
    <input
      id="check1"
      type="checkbox"
      name="check1"
      v-model="checkbox1"
    >
    <label for="check1">チェック1</label>

    <input
      id="check2"
      type="checkbox"
      name="check2"
      v-model="checkbox2"
    >
    <label for="check2">チェック2</label>

    <input
      id="check3"
      type="checkbox"
      name="check3"
      v-model="checkbox3"
    >
    <label for="check3">チェック3</label>
  </div>
  <button @click="showModals">表示</button>

  <div v-if="activateModal">
    <div v-if="modal1" class="modal">
      <h2>モーダル1</h2>
      <p>
        テストテストテスト
      </p>
      <button @click="modal1 = !modal1">閉じる</button>
    </div>

    <div v-if="modal2" class="modal">
      <h2>モーダル2</h2>
      <p>
        テストテストテスト
      </p>
      <button @click="modal2 = !modal2">閉じる</button>
    </div>

    <div v-if="modal3" class="modal">
      <h2>モーダル3</h2>
      <p>
        テストテストテスト
      </p>
      <button @click="modal3 = !modal3">閉じる</button>
    </div>

    <div
      class="overlay"
      @click="closeModals"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const activateModal = ref(false)
    const checkbox1 = ref(false)
    const checkbox2 = ref(false)
    const checkbox3 = ref(false)
    const modal1 = ref(false)
    const modal2 = ref(false)
    const modal3 = ref(false)
    
    const showModals = () => {
      modal1.value = checkbox1.value
      modal2.value = checkbox2.value
      modal3.value = checkbox3.value

      activateModal.value = true
    }

    const closeModals = () => {
      modal1.value = false
      modal2.value = false
      modal3.value = false

      activateModal.value = false
    }

    return {
      activateModal,
      closeModals,
      showModals,
      checkbox1,
      checkbox2,
      checkbox3,
      modal1,
      modal2,
      modal3
    }
  }
})
</script>

<style>
.h1 {
  margin: 0;
  font-size: 16px;
}

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
