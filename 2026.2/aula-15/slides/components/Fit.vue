<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const MINIMUM_SCALE = 0.42

const outer = ref<HTMLElement | null>(null)
const inner = ref<HTMLElement | null>(null)
const scale = ref(1)
const overflow = ref(false)

let observer: ResizeObserver | undefined
let warned = false

function offsetTopWithin(element: HTMLElement, ancestor: HTMLElement): number {
  let current: HTMLElement | null = element
  let top = 0

  while (current && current !== ancestor) {
    top += current.offsetTop
    current = current.offsetParent as HTMLElement | null
  }

  return current === ancestor ? top : 0
}

function availableHeight(): number {
  if (!outer.value)
    return 0

  let available = outer.value.clientHeight
  const frame = outer.value.closest<HTMLElement>('.slidev-layout')

  if (frame) {
    const top = offsetTopWithin(outer.value, frame)
    const paddingBottom = Number.parseFloat(getComputedStyle(frame).paddingBottom) || 0
    const frameBottom = frame.clientHeight - paddingBottom
    const framedAvailable = frameBottom - top

    if (framedAvailable > 0)
      available = Math.min(available, framedAvailable)
  }

  return available
}

function fit(): void {
  if (!outer.value || !inner.value)
    return

  const available = availableHeight()
  const contentHeight = inner.value.scrollHeight

  if (!available || !contentHeight)
    return

  const idealScale = available / contentHeight
  scale.value = contentHeight > available + 1
    ? Math.max(MINIMUM_SCALE, idealScale)
    : 1
  overflow.value = idealScale < MINIMUM_SCALE

  if (overflow.value && !warned) {
    warned = true
    console.warn(
      `[tahta] slide content overflows even at min scale (${MINIMUM_SCALE}): `
      + `${Math.round(contentHeight)}px of content in a ${Math.round(available)}px frame `
      + '— split this slide or trim its content.',
    )
  }
}

onMounted(async () => {
  await nextTick()
  fit()

  observer = new ResizeObserver(fit)
  if (inner.value)
    observer.observe(inner.value)
  if (outer.value)
    observer.observe(outer.value)

  requestAnimationFrame(fit)
  if (document.fonts)
    document.fonts.ready.then(fit)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="outer"
    class="fit"
    :data-fit-overflow="overflow || undefined"
    :style="{ justifyContent: scale < 1 ? 'flex-start' : undefined }"
  >
    <div
      ref="inner"
      class="fit-inner"
      :style="{
        '--fit-scale': scale,
        transform: `scale(${scale})`,
      }"
    >
      <slot />
    </div>
  </div>
</template>
