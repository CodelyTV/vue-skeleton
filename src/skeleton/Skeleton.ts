import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'

export const SkeletonThemePropsKey = Symbol('skeletonThemeProps')

export const skeletonProps = {
  baseColor: {
    type: String,
  },
  highlightColor: {
    type: String,
  },
  width: {
    type: [String, Number],
  },
  height: {
    type: [String, Number],
  },
  radius: {
    type: [String, Number],
  },
  circle: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: [String, Number],
  },
  direction: {
    type: String as PropType<'ltr' | 'rtl'>,
    default: 'ltr',
  },
  noAnimate: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
  },
  style: {
    type: Object as PropType<CSSProperties>,
  },
  count: {
    type: Number,
    default: 1,
  },
}

export const skeletonThemeProps = {
  baseColor: {
    type: String,
  },
  highlightColor: {
    type: String,
  },
  width: {
    type: [String, Number],
  },
  height: {
    type: [String, Number],
  },
  radius: {
    type: [String, Number],
  },
  inline: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: [String, Number],
  },
  direction: {
    type: String as PropType<'ltr' | 'rtl'>,
    default: 'ltr',
  },
  noAnimate: {
    type: Boolean,
    default: false,
  },
}

export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>
export type SkeletonThemeProps = ExtractPropTypes<typeof skeletonThemeProps>
