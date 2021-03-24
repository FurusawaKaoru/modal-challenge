import {
  inject,
  provide,
  InjectionKey,
} from 'vue'

export type Modal = {
  id: number,
  active: boolean,
  visible: boolean,
  show: () => void
}

export const createModal = (id: number) => {
  const modal: Modal = {
    id,
    active: true,
    visible: false,
    show: () => modal.visible = true
  }

  return { modal }
}
