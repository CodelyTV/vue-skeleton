import { expect, test } from 'vitest'
import type { SkeletonProps, SkeletonThemeProps } from '..'
import { Skeleton, SkeletonTheme } from '..'

test('should export Skeleton and friends', () => {
  expect(typeof Skeleton).toBe('object')
  expect(typeof SkeletonTheme).toBe('object')

  /* eslint-disable unused-imports/no-unused-vars */
  // @ts-expect-error no-unused-var
  const skeletonProps = { count: 3, borderRadius: '1rem' } as SkeletonProps
  // @ts-expect-error no-unused-var
  const skeletonThemeProps: SkeletonThemeProps = {
    baseColor: '#3a3a3a',
    highlightColor: 'white',
  }
  /* eslint-enable unused-imports/no-unused-vars */
})
