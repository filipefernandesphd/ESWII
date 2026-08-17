import {
  defineCodeblockTransformer,
  defineTransformersSetup,
} from '@slidev/types'

const codeFontPattern = /^([\w'+-]+)\[font=([^\]]*)\]$/u
const supportedCodeFonts = new Set(['normal', 'large', 'extralarge'])

const transformCodeFont = defineCodeblockTransformer(
  async ({ info, renderHighlighted }) => {
    const match = info.match(codeFontPattern)
    if (!match)
      return

    const [, language, fontSize] = match
    if (!supportedCodeFonts.has(fontSize)) {
      throw new Error(
        `Tamanho de fonte inválido em bloco de código: ${fontSize}. `
        + 'Use normal, large ou extralarge.',
      )
    }

    const highlightedCode = await renderHighlighted({ info: language })
    return `<CodeBlockWrapper class="slidev-code-font--${fontSize}">${highlightedCode}</CodeBlockWrapper>`
  },
)

export default defineTransformersSetup(() => ({
  codeblocks: [transformCodeFont],
}))
