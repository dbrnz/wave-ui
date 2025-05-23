<template lang="pug">
component.w-button(
  :is="!disabled && route ? 'a' : 'button'"
  :type="!route && type"
  :href="(!disabled && route && (externalLink ? route : resolvedRoute)) || null"
  :class="classes"
  :disabled="!!disabled || null"
  v-bind="attrs"
  :style="styles")
  w-icon(v-if="icon" v-bind="iconProps || {}") {{ icon }}
  slot(v-else)
  transition(name="scale-fade")
    .w-button__loader(v-if="loading")
      slot(name="loading")
        svg(viewBox="0 0 40 40")
          circle(
            cx="20" cy="20" r="18"
            fill="transparent"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round")
</template>

<script>
export default {
  // Fully handle the attrs and listeners manually for the case of a router link that has both a
  // route and onClick.
  inheritAttrs: false,

  props: {
    color: { type: String },
    bgColor: { type: String },
    dark: { type: Boolean },
    light: { type: Boolean },
    outline: { type: Boolean },
    text: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    route: { type: [String, Object] }, // Creates a link.
    // Force use of `a` instead of router-link.
    // Router link does not go to a url starting with `#` with history mode.
    forceLink: { type: Boolean },
    type: { type: String, default: 'button' },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    // If an icon is passed, no text will display.
    icon: { type: String, default: null },
    iconProps: { type: Object, default: () => ({}) },
    // Positions.
    absolute: { type: Boolean },
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    zIndex: { type: [Number, String] },
    // Sizes.
    width: { type: [Number, String] },
    height: { type: [Number, String] },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean }
  },

  emits: [],

  computed: {
    hasRouter () {
      return '$router' in this
    },
    resolvedRoute () {
      return this.hasRouter ? this.$router.resolve(this.route).href : this.route
    },
    attrs () {
      const isValidRouterLink = this.route && this.hasRouter && !this.forceLink && !this.externalLink
      // If the button is a router-link, we can't apply events on it since vue-router needs the .native
      // modifier but it's not available with the v-on directive.
      // So do a manual router.push if $router is present.
      const onRouterLinkClick = e => {
        if (this.$attrs.onClick) this.$attrs.onClick(e)

        this.$router.push(this.route)
        e.stopPropagation() // If going to a route, no need to bubble up the event.
        e.preventDefault()
      }

      return {
        ...this.$attrs,
        onClick: !this.disabled && !this.loading && (isValidRouterLink ? onRouterLinkClick : this.$attrs.onClick)
      }
    },
    size () {
      return (
        (this.xs && 'xs') ||
        (this.sm && 'sm') ||
        (this.lg && 'lg') ||
        (this.xl && 'xl') ||
        'md'
      )
    },
    position () {
      return [
        (this.top && 'top') || (this.bottom && 'bottom') || 'top',
        (this.left && 'left') || (this.right && 'right') || 'right'
      ]
    },
    externalLink () {
      return /^(https?:)?\/\/|mailto:|tel:/.test(this.route)
    },
    classes () {
      return {
        // If no color / bg color is set, set a primary color by default.
        'primary--bg': !this.bgColor && !this.color && !(this.outline || this.text),
        primary: !this.bgColor && !this.color && !this.dark && (this.outline || this.text),

        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-button--dark': this.dark,
        'w-button--light': this.light,
        'w-button--outline': this.outline,
        'w-button--text': this.text,
        'w-button--round': this.round,
        'w-button--tile': this.tile,
        'w-button--shadow': this.shadow,
        'w-button--loading': this.loading,
        'w-button--icon': this.icon,
        [`size--${this.size}`]: true,
        'w-button--absolute': this.absolute,
        'w-button--fixed': this.fixed,
        [`w-button--${this.position.join(' w-button--')}`]: this.absolute || this.fixed
      }
    },
    styles () {
      return {
        width: (!isNaN(this.width) ? `${this.width}px` : this.width) || null,
        height: (!isNaN(this.height) ? `${this.height}px` : this.height) || null,
        zIndex: this.zIndex || this.zIndex === 0 || null
      }
    }
  }
}
</script>

<style lang="scss">
@use "sass:math";

$spinner-size: 40;

.w-button {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  outline: none;
  border-radius: $border-radius;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding-left: 2 * $base-increment;
  padding-right: 2 * $base-increment;
  box-shadow: 0 0 0 transparent;
  vertical-align: middle;
  align-self: center;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  cursor: pointer;
  color: inherit; // Override the default color in Safari.
  font-family: inherit;
  z-index: 1;
  // Background-color must not transition to not affect the hover & focus states
  // in :before & :after.
  transition: all $transition-duration, background-color 0s, padding 0s;
  -webkit-tap-highlight-color: transparent;

  @include themeable;

  // In w-flex wrapper, allow overriding the default `align-self: center`.
  .w-flex.align-start > & {align-self: flex-start;}
  .w-flex.align-end > & {align-self: flex-end;}

  // Position.
  &--absolute {position: absolute;}
  &--fixed {position: fixed;}
  &--top {top: 2 * $base-increment;}
  &--bottom {bottom: 2 * $base-increment;}
  &--left {left: 2 * $base-increment;}
  &--right {right: 2 * $base-increment;}

  &--dark {
    color: rgba(255, 255, 255, 0.95);
    background-color: rgba(255, 255, 255, 0.15);
  }
  &--outline {
    background-color: transparent;
    border-color: currentColor;
  }
  &--text {
    background-color: transparent;
    border-color: transparent;
  }
  &--round {
    border-radius: 99em;
    padding-left: 3 * $base-increment;
    padding-right: 3 * $base-increment;
  }
  &--icon {
    aspect-ratio: 1;
    border-radius: 99em;
    padding: 0;
    min-width: 0; // Safari ratio fix (e.g. losing ratio if height is set and side padding are added).
  }
  &--tile {border-radius: initial;}
  &--shadow {box-shadow: $box-shadow;}
  &--loading {cursor: wait;opacity: 0.8;}
  &[disabled] {
    cursor: not-allowed;
    box-shadow: none;
    opacity: 0.4;
    -webkit-tap-highlight-color: transparent;
  }
  &--dark[disabled] {
    background-color: rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.3);
  }

  // Sizes adjustments (always an even number for easier vertical alignments).
  &.size--xs {height: math.round(1.25 * divide($base-font-size, 2)) * 2;}
  &.size--sm {height: math.round(1.55 * divide($base-font-size, 2)) * 2;}
  &.size--md {height: math.round(1.85 * divide($base-font-size, 2)) * 2;}
  &.size--lg {height: math.round(2.2 * divide($base-font-size, 2)) * 2;}
  &.size--xl {height: math.round(2.5 * divide($base-font-size, 2)) * 2;}

  &.size--xs {padding-left: $base-increment;padding-right: $base-increment;}
  &.size--xl {padding-left: 3 * $base-increment;padding-right: 3 * $base-increment;}
  &--round.size--xs {padding-left: math.round(1.5 * $base-increment);padding-right: math.round(1.5 * $base-increment);}
  &--round.size--xl {padding-left: math.round(4.5 * $base-increment);padding-right: math.round(4.5 * $base-increment);}
  &--icon.size--xs {padding-left: 0;padding-right: 0;}
  &--icon.size--xl {padding-left: 0;padding-right: 0;}

  // Overlay to mark the focus, hover and active state.
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    background-color: #000;
    border-radius: inherit;
    @include default-transition;
  }

  &--dark:before, &.primary--bg:before,
  &.success--bg:before, &.error--bg:before, &.warning--bg:before, &.info--bg:before {background-color: #fff;}
  &--outline:before, &--text:before {background-color: currentColor;}

  // Button states.
  // ------------------------------------------------------
  // Hover & focus states - inside button.
  &:hover:before, &:focus-visible:before {opacity: 0.2;}
  &--dark:hover:before, &--dark:focus-visible:before {opacity: 0.4;}
  &--outline:hover:before, &--outline:focus-visible:before,
  &--text:hover:before, &--text:focus-visible:before {opacity: 0.12;}

  // Focus state - outside button.
  &:after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background-color: inherit;
    opacity: 0;
    border-radius: inherit;
    z-index: -1;
    transition: opacity 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95), transform 0.25s ease-in;
    transform: scale(0.85, 0.7);
  }
  &:focus-visible:after {
    opacity: 0.4;
    transform: scale(1);
    transition: opacity 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95), transform 0.25s ease-out;
  }
  &--dark:focus-visible:after {opacity: 0.2;}

  // Active state.
  &:active {transform: scale(1.02);}
  &:active:before {
    opacity: 0.3;
    @include default-transition($fast-transition-duration);
  }
  &--dark:active:before, &.primary--bg:active:before {opacity: 0.35;}

  // Disable visual feedback on loading and disabled buttons.
  &--loading:hover:before,
  &--loading:focus-visible:before,
  &--loading:active:before,
  &[disabled]:before {opacity: 0;}
  &--loading:active,
  &[disabled] {transform: none;}
  // ------------------------------------------------------

  // Disable events binding on nested content.
  & * {pointer-events: none;}

  &__loader {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    border-radius: inherit;

    svg {height: 75%;}
    circle {
      stroke-dasharray: (3.14 * $spinner-size);
      transform-origin: 50%;
      animation: spinner 2s linear infinite;
    }
  }
}

@keyframes spinner {
  0% {transform: rotate(0deg);stroke-dashoffset: (0.66 * $spinner-size);}
  50% {transform: rotate(720deg);stroke-dashoffset: (3.14 * $spinner-size);}
  100% {transform: rotate(1080deg);stroke-dashoffset: (0.66 * $spinner-size);}
}
</style>
