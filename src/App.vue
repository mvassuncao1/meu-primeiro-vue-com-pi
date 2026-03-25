<script setup lang="ts">
import { PiLayoutPadrao, PiPainelConteudo } from '@ti-arquitetura-corporativa/pi-vue'
</script>

<template>
  <PiLayoutPadrao :trilha-navegacao="true">
    <div>
      <h1>Título da página</h1>
      <p class="lead">Subtítulo da página</p>
      <PiPainelConteudo class="mt-3"> Conteúdo da página </PiPainelConteudo>
    </div>
  </PiLayoutPadrao>
</template>

<style scoped></style>
