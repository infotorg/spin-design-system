<template>
  <div class="font-weight">
    <div
      v-for="(prop, index) in tokens"
      :key="index"
      class="font"
      v-if="prop.category === 'font-weight'"
      :style="{ fontWeight: prop.value }"
    >
      ${{prop.name.replace(/_/g, "-")}}
      <span>({{prop.value}})</span>
    </div>
  </div>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import orderBy from "lodash/orderBy"

/**
 * This typographic scale makes it easier to achieve visual harmony in the
 * interface. It’s purposefully designed to keep the number of separate font
 * sizes to a minimum. To edit font-weight, see
 * [/src/tokens/font-weight.yml](https://github.com/viljamis/vue-design-system/blob/master/src/tokens/font-weight.yml).
 */
export default {
  name: "FontWeight",
  methods: {
    orderData: function(data) {
      let order = orderBy(data, "value", "desc")
      return order
    },
  },
  data() {
    return {
      tokens: this.orderData(designTokens.props),
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../docs.tokens.scss";

/* STYLES
--------------------------------------------- */

.font-weight {
  margin-top: $space-l;
  overflow: hidden;
  width: 100%;
}
.font {
  @include reset;
  font-family: $font-heading;
  font-weight: $weight-bold;
  line-height: $line-height-xs;
  color: $color-rich-black;
  margin-bottom: $space-s;
  font-style: normal;
  span {
    letter-spacing: -0.02em;
    margin-left: 10px;
    font-weight: $weight-normal;
    color: $color-silver;
    user-select: none;
    font-style: normal;
  }
}
</style>

<docs>
  ```jsx
  <FontWeight/>
  ```
</docs>
