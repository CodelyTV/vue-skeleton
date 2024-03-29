import type { ComputedRef, CSSProperties, Ref } from 'vue';
import { computed, inject, ref } from 'vue';
import { parseVal } from '../utils/number';
import type { SkeletonProps } from './Skeleton';
import { SkeletonThemePropsKey } from './Skeleton';

export function useSkeleton(props: SkeletonProps): {
  className: ComputedRef<string>;
  elements: Ref<{ style: CSSProperties }[]>;
} {
  const themeProps = inject(SkeletonThemePropsKey, {}) as ComputedRef;
  const elements = ref<{ style: CSSProperties }[]>([]);
  const className = computed(() => (props.className ? props.className : ''));
  const countCeil = Math.ceil(props.count);

  const definedProps = computed(() => {
    return Object.fromEntries(Object.entries(props).filter(([key, value]) => value !== undefined && key !== 'style'));
  });

  const style = computed(() => {
    const allProps = { ...props.style, ...themeProps.value, ...definedProps.value };
    const styles: CSSProperties = {};

    if (allProps.baseColor) {
      styles['--base-color'] = allProps.baseColor;
    }

    if (allProps.highlightColor) {
      styles['--highlight-color'] = allProps.highlightColor;
    }

    if (allProps.width) {
      styles.width = parseVal(allProps.width);
    }

    if (allProps.height) {
      styles.height = parseVal(allProps.height);
    }

    if (allProps.borderRadius) {
      styles.borderRadius = parseVal(allProps.borderRadius);
    }

    if (allProps.duration) {
      styles['--animation-duration'] = parseVal(allProps.duration, 's');
    }

    if (allProps.direction) {
      styles['--animation-direction'] = allProps.direction === 'rtl' ? 'reverse' : 'normal';
    }

    if (allProps.noAnimate) {
      styles['--pseudo-element-display'] = 'none';
    }

    if (allProps.circle) {
      styles.borderRadius = '50%';
      styles.height = allProps.height ? parseVal(allProps.height) : parseVal(allProps.width);
    }

    return styles;
  });

  for (let i = 0; i < countCeil; i++) {
    let elStyle = style.value;

    if (countCeil > props.count && i === countCeil - 1) {
      const width = style.value.width ?? '100%';
      const fractionalPart = props.count % 1;

      const fractionalWidth = typeof width === 'number' ? width * fractionalPart : `calc(${width} * ${fractionalPart})`;

      elStyle = { ...style.value, width: fractionalWidth };
    }

    elements.value.push({
      style: elStyle,
    });
  }

  return {
    className,
    elements,
  };
}
