<template>
<div :class="[panelClass, cname]">
  <h4>-{{title}}-</h4>
  <slot/>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    cname: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      panelClass: "panel",
    }
  },
}
</script>

<style lang="scss">
  @import '../../css/element.scss';
   .panel {
     @include panel;
  }
</style>
