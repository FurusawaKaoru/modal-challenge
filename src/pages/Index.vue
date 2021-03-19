<template>
  <h1>
    modal challenge
  </h1>

  <div v-for="checkbox in checkboxes" :key="checkbox.id">
    <input
      v-model="checkbox.isCheck"
      :id="checkbox.name"
      type="checkbox"
    >
    <label :for="checkbox.name">{{ checkbox.label }}</label>
  </div>

  <button @click="clickActivate">表示</button>

  <div v-if="showModal">
    <div v-for="modal in modals" :key="modal.id">
      <Modal
        :modal="modal"
        @change="changeModalActive"
      />
    </div>
    <div
      class="overlay"
      @click="clickDeactivate"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue'
import Modal from '~/components/Modal.vue'

export default defineComponent({
  name: 'App',
  components: {
    Modal
  },
  setup() {
    const showModal = ref(false)

    const checkboxes = ref([
      {
        id: 1,
        name: 'check1',
        label: 'チェック1',
        isCheck: false,
      },
      {
        id: 2,
        name: 'check2',
        label: 'チェック2',
        isCheck: false,
      },
      {
        id: 3,
        name: 'check3',
        label: 'チェック3',
        isCheck: false,
      }
    ])
    const modals = ref([])

    const clickActivate = () => {
      // FIXME: TSで型を指定しないと…
      modals.value = checkboxes.value.map(checkbox => {
        return {
          id: checkbox.id,
          active: checkbox.isCheck
        }
      })

      showModal.value = true
    }

    const clickDeactivate = () => {
      showModal.value = false
    }

    const changeModalActive = ({ id, active }) => {
      const modalsMap = modals.value.map(modal => {
        if (modal.id == id) {
          return {
            id,
            active
          }
        }
        return modal
      })
      modals.value = modalsMap

      const result = modals.value.find(modal => modal.active)
      if (!result) {
        showModal.value = false
      }
    }

    return {
      showModal,
      count,
      checkboxes,
      modals,
      clickActivate,
      clickDeactivate,
      changeModalActive,
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
</style>
