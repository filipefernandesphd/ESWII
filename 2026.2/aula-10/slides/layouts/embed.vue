<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $frontmatter } = useSlideContext()
</script>

<template>
  <SlideFrame mode="topic">
    <div class="embed-stage">
      <div class="embed">
        <iframe v-if="$frontmatter.iframe" :src="$frontmatter.iframe" allowfullscreen />
        <video v-else-if="$frontmatter.video" :src="$frontmatter.video" controls />
        <slot v-else />
      </div>
    </div>
  </SlideFrame>
</template>
