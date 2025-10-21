import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
 
// Get the default MDX components
const themeComponents = getThemeComponents()
 
// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    // override h2 tags
    h2: ({ children, ...props }) => {
      const text =
        typeof children === 'string'
          ? children
          : Array.isArray(children)
          ? children.join(' ')
          : ''

      const customId = text
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/(^-|-$)/g, '')

      return (
        <h2
          id={customId}
          className="x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-[fade-in_1.5s] x:mt-10 x:border-b x:pb-1 x:text-3xl nextra-border"
          {...props}
        >
          {children}
        </h2>
      )
    },
    // override h3 tags
    h3: ({ children, ...props }) => {
      const text =
        typeof children === 'string'
          ? children
          : Array.isArray(children)
          ? children.join(' ')
          : ''

      const customId = text
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/(^-|-$)/g, '')

      return (
        <h3
          id={customId}
          className="x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-[fade-in_1.5s] x:mt-8 x:text-2xl"
          {...props}
        >
          {children}
        </h3>
      )
    },
    // override h4 tags
    h4: ({ children, ...props }) => {
      const text =
        typeof children === 'string'
          ? children
          : Array.isArray(children)
          ? children.join(' ')
          : ''

      const customId = text
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/(^-|-$)/g, '')

      return (
        <h4
          id={customId}
          className="x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-[fade-in_1.5s] x:mt-8 x:text-xl"
          {...props}
        >
          {children}
        </h4>
      )
    }
  }
}


