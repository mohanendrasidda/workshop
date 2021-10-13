<template>
  <div :class="`alert alert-${theme}`" role="alert">
    <slot name="head"></slot>
    <hr />
    <slot name="body"></slot>
  </div>
</template>

<script>
import ThemeMixin from '@/components/mixins/theme.js'
export default {
  name: "AppAlert",
  mixins:[ThemeMixin]
  
};
</script>

<style scoped>
.alert-heading {
  font-weight: bold;
}
</style>