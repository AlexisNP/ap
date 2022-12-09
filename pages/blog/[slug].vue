<script setup lang="ts">
import { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';

const route = useRoute()

const { data } = await useAsyncData('article', () => queryContent<MarkdownParsedContent>(`/blog/${route.params.slug}`).findOne())

if (!data.value?.title) {
  throw showError({ statusCode: 404, statusMessage: 'Aucun article ici !'})
}
</script>

<template>
  <main>
    <ContentRenderer v-if="data" :value="data" />
  </main>
</template>
