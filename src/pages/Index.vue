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

  <button @click="show">表示</button>

  <div v-if="isShow">
    <template v-for="modal in modals" :key="modal.id">
      <div v-if="modal.active">
        <div class="modal">
          <Modal :modal="modal" @close="closeModal" />
        </div>
      </div>
    </template>
    <div
      class="overlay"
      @click="hide"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue'
import Modal from '~/components/Modal.vue'
import { createModal } from '~/composables/modal'

export type Checkbox = {
  id: number,
  name: string,
  label: string,
  isCheck: boolean
}

export type Modal = {
  id: number,
  active: boolean,
  visible: boolean
}

export default defineComponent({
  name: 'App',
  components: {
    Modal
  },
  setup() {
    const checkboxes = ref<Checkbox[]>([
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
    const modals = ref<Modal[]>([])

    const isShow = ref(false)
    const show = () => {
      modals.value = checkboxes.value.map(checkbox => {
        return {
          id: checkbox.id,
          active: checkbox.isCheck,
          visible: true
        }
      })

      isShow.value = true
    }
    const hide = () => {
      isShow.value = false
    }

    const closeModal = (modal:Modal) => {
      // modalのvisibleをfalseにする
    }

    return {
      checkboxes,
      modals,
      isShow,
      show,
      hide
    }
  }
})
</script>

<style>
.h1 {
  margin: 0;
  font-size: 16px;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
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
