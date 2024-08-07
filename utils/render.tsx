import type { FC, ReactNode } from 'react'

export function renderComponent<T>(
  ComponentOrNode: FC<T> | ReactNode,
  props?: T
) {
  if (!ComponentOrNode) return null
  if (typeof ComponentOrNode !== 'function') return ComponentOrNode
  return <ComponentOrNode {...props} />
}

export function renderString<T>(
  stringOrFunction?: string | ((props: T) => string),

  props?: T ,
): string {
  const result =
    typeof stringOrFunction === 'function'
      ? stringOrFunction(props)
      : stringOrFunction
  return result || ''
}
