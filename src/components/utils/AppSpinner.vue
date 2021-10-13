<template>
<div :class="[spinnerSizeClass,spinnerThemeClass]">
  
<slot name="head"></slot>
<hr>
<slot name="body"></slot>
</div>

</template>

<script>
import ThemeMixin from "@/components/mixins/theme.js";
export default {
  name: "AppSpinner",
  mixins: [ThemeMixin],
  props: {
    theme: {
      type: String,
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  computed: {
    spinnerSizeClass() {
      return {
        "spinner-border-large": this.size === "large",
        "spinner-border-medium": this.size === "medium",
        "spinner-border-small": this.size === "small",
      };
    },
    spinnerThemeClass() {
      return {
        " text-primary": this.theme === "primary",
        "text-secondary": this.theme === "secondary",
        "text-success": this.theme === "success",
        " text-info": this.theme === "info",
        "text-warning": this.theme === "warning",
        " text-danger": this.theme === "danger",
        "text-light": this.theme === "light",
        " text-dark": this.theme === "dark",
      };
    },
  },
};
</script>


<style scoped>
.spinner-border-large {
  width: 3rem;
  height: 3rem;
}

.spinner-border-medium {
  width: 1.75rem;
  height: 1.75rem;
}

.spinner-border-small {
  width: 1rem;
  height: 1rem;
  border-width: 1px;
}
</style>
