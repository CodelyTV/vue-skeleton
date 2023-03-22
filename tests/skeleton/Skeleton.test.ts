import { cleanup, render } from '@testing-library/vue'
import { describe, expect, test } from 'vitest'
import type { SkeletonProps } from '../../src'
import { Skeleton } from '../../src'
import { getAllSkeletons, getSkeleton, hasLineBreak } from '../utils'

describe('Skeleton.vue', () => {
  test('renders a skeleton', () => {
    render(Skeleton)

    const skeletonElements = getAllSkeletons()

    expect(skeletonElements).toHaveLength(1)
    expect(skeletonElements[0]).toBeVisible()
    expect(skeletonElements[0].style.getPropertyValue('--animation-direction')).toBe('normal')
  })

  test('should render the required number of skeletons', () => {
    const props = {
      count: 4,
    } as SkeletonProps

    render(Skeleton, {
      props,
    })

    const skeletonElements = getAllSkeletons()

    expect(skeletonElements).toHaveLength(4)
  })

  test('should change the color of the skeleton', () => {
    const props = {
      baseColor: 'purple',
      highlightColor: 'red',
    } as SkeletonProps

    render(Skeleton, {
      props,
    })

    const skeleton = getSkeleton()

    expect(skeleton.style.getPropertyValue('--base-color')).toBe('purple')
    expect(skeleton.style.getPropertyValue('--highlight-color')).toBe('red')
  })

  test('should render a skeleton with styles', () => {
    const style = { borderRadius: 10, height: 50, width: 50 }
    const props = {
      style,
    } as SkeletonProps

    render(Skeleton, {
      props,
    })

    const skeleton = getSkeleton()

    expect(skeleton).toHaveStyle({
      borderRadius: `${style.borderRadius}px`,
      height: `${style.height}px`,
      width: `${style.width}px`,
    })
  })

  test('should prioritize explicit props over style prop', () => {
    const style = { borderRadius: 10, height: 10, width: 10 }
    const props = {
      borderRadius: 20,
      height: 21,
      width: 22,
      style,
    } as SkeletonProps

    render(Skeleton, {
      props,
    })

    const skeleton = getSkeleton()

    expect(skeleton).toHaveStyle({
      borderRadius: '20px',
      height: '21px',
      width: '22px',
    })
  })

  test('should ignore borderRadius if circle is true', () => {
    const props = {
      borderRadius: 1,
      height: 25,
      width: 25,
      circle: true,
    } as SkeletonProps

    render(Skeleton, {
      props,
    })

    expect(getSkeleton()).toHaveStyle({ borderRadius: '50%' })
  })

  test('should add a line break when inline is false', () => {
    render(Skeleton)
    expect(hasLineBreak()).toBe(true)

    render(Skeleton, {
      props: {
        inline: false,
      },
    })
    expect(hasLineBreak()).toBe(true)

    cleanup()

    render(Skeleton, {
      props: {
        inline: true,
      },
    })
    expect(hasLineBreak()).toBe(false)
  })

  test('should use a custom class name', () => {
    const props = {
      className: 'test-class',
    } as SkeletonProps

    render(Skeleton, {
      props,
    })

    const skeleton = getSkeleton()

    expect(skeleton).toHaveClass('skeleton')
    expect(skeleton).toHaveClass('test-class')
  })

  test('should render a half-width skeleton when count is 1.5', () => {
    const props = {
      count: 1.5,
    } as SkeletonProps

    render(Skeleton, {
      props,
    })

    const skeletons = getAllSkeletons()
    expect(skeletons).toHaveLength(2)

    expect(skeletons[0]).toHaveStyle({ width: '' })
    expect(skeletons[1]).toHaveStyle({ width: 'calc(100% * 0.5)' })
  })

  test('should render a 3/4-width skeleton when count is 1.75 and width is set in pixels', () => {
    const props = {
      count: 1.75,
      width: 100,
    } as SkeletonProps

    render(Skeleton, {
      props,
    })

    const skeletons = getAllSkeletons()
    expect(skeletons).toHaveLength(2)

    expect(skeletons[0]).toHaveStyle({ width: '100px' })
    expect(skeletons[1]).toHaveStyle({ width: 'calc(100px * 0.75)' })
  })
})
