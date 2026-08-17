<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const FLOOR = 0.42
const outer = ref(null)
const inner = ref(null)
const scale = ref(1)
const overflow = ref(false)
let observer
let warned = false

function pixels(value) {
  const parsed = Number.parseFloat(value)
  return Number.isFinite(parsed) ? parsed : 0
}

function availableHeight() {
  let available = outer.value.clientHeight
  const frame = outer.value.closest('.slidev-layout')

  if (frame) {
    let top = 0
    let element = outer.value

    while (element && element !== frame) {
      top += element.offsetTop
      element = element.offsetParent
    }

    const frameStyle = getComputedStyle(frame)
    const framed = frame.clientHeight - top - pixels(frameStyle.paddingBottom)

    if (framed > 0)
      available = available > 0 ? Math.min(available, framed) : framed
  }

  return available
}

function fit() {
  if (!outer.value || !inner.value)
    return

  const available = availableHeight()
  const contentHeight = inner.value.scrollHeight

  if (!available || !contentHeight)
    return

  const ideal = available / contentHeight
  scale.value = contentHeight > available + 1 ? Math.max(FLOOR, ideal) : 1
  overflow.value = ideal < FLOOR

  if (overflow.value && !warned) {
    warned = true
    console.warn(
      `[academic] slide content overflows even at min scale (${FLOOR}): ${Math.round(contentHeight)}px of content in a ${Math.round(available)}px frame — split this slide or trim its content.`,
    )
  }
}

onMounted(() => {
  fit()
  observer = new ResizeObserver(fit)
  observer.observe(inner.value)
  observer.observe(outer.value)
  requestAnimationFrame(fit)

  if (typeof document !== 'undefined' && document.fonts)
    document.fonts.ready.then(fit)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="outer"
    class="fit"
    :data-fit-overflow="overflow || null"
    :style="{ justifyContent: scale < 1 ? 'flex-start' : null }"
  >
    <div
      ref="inner"
      class="fit-inner"
      :style="{ transform: `scale(${scale})` }"
    >
      <slot />
    </div>
  </div>
</template>
