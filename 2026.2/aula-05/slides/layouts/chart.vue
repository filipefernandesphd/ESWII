<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter } = useSlideContext()
const chart = computed(() => $frontmatter.chart || {})
</script>

<template>
  <SlideFrame mode="topic">
    <div class="chart-stage">
      <Plot
        v-if="chart.categories || chart.series"
        :type="chart.type || 'bar'"
        :categories="chart.categories || []"
        :series="chart.series || []"
        :unit="chart.unit || ''"
        :height="chart.height || '100%'"
        :horizontal="chart.horizontal !== false"
      />
    </div>
    <p v-if="$frontmatter.note" class="chart-note dim" v-html="$frontmatter.note" />
  </SlideFrame>
</template>
