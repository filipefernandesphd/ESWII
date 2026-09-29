import {
  defineCodeblockTransformer,
  defineMarkdownTransformer,
  defineTransformersSetup,
} from '@slidev/types'

const citationPattern = /\[@([A-Za-z0-9][A-Za-z0-9_:./+-]*)\]/g
const fontMetadataPattern = /^([\w'-]+)\[font=([^\]]+)\](.*)$/
const trailingMetadataPattern = /^(?:[ \t]*\[([^\]]*)\])?[ \t]*(?:\{([\w,|\-*]+)\})?[ \t]*(\{[^}]*\})?(.*)$/
const supportedCodeFonts = ['normal', 'large', 'extralarge'] as const

type CodeFont = (typeof supportedCodeFonts)[number]

function isCodeFont(value: string): value is CodeFont {
  return supportedCodeFonts.includes(value as CodeFont)
}

function escapeVueInterpolation(html: string): string {
  return html.replace(/\{\{/g, '&lbrace;&lbrace;')
}

const transformCitationSyntax = defineMarkdownTransformer(({ s }) => {
  s.replace(
    citationPattern,
    (_match, citationKey: string) => `<Cite bref="${citationKey}" />`,
  )
})

const transformCodeFontMetadata = defineCodeblockTransformer(
  async ({ info, renderHighlighted }) => {
    const match = info.match(fontMetadataPattern)

    if (!match) {
      if (info.includes('[font=')) {
        throw new Error(
          `[slidev] Invalid code block font metadata "${info}". `
          + 'Use language[font=normal|large|extralarge].',
        )
      }

      return undefined
    }

    const [, language, font, trailingMetadata] = match

    if (!isCodeFont(font)) {
      throw new Error(
        `[slidev] Unsupported code block font "${font}". `
        + `Expected one of: ${supportedCodeFonts.join(', ')}.`,
      )
    }

    const [, title = '', rangeString = '', options = '', rest = '']
      = trailingMetadata.match(trailingMetadataPattern) ?? []
    const ranges = rangeString
      ? rangeString.split('|').map(range => range.trim())
      : []
    const highlightedCode = await renderHighlighted({
      info: `${language} ${rest}`.trim(),
    })
    const optionsBinding = options ? `v-bind="${options}"` : ''

    return `<CodeBlockWrapper class="code-font code-font--${font}" ${optionsBinding} title=${JSON.stringify(title)} :ranges='${JSON.stringify(ranges)}'>${escapeVueInterpolation(highlightedCode)}</CodeBlockWrapper>`
  },
)

export default defineTransformersSetup(() => ({
  pre: [transformCitationSyntax],
  codeblocks: [transformCodeFontMetadata],
}))
