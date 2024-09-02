import { Highlight as OriginalHighlight } from '@tiptap/extension-highlight'

const Highlight = OriginalHighlight.extend({
  addOptions () {
    return {
      multicolor: true, // Allows multiple colors for highlighting
      HTMLAttributes: {}
    }
  },
  addAttributes () {
    return {
      color: {
        default: null,
        parseHTML: element => {
          // Parse the background color from the HTML element
          return element.style.backgroundColor || null
        },
        renderHTML: attributes => {
          // If no color is provided, don't apply any styles
          if (!attributes.color) {
            return {}
          }

          // Return the style to set the background color
          return {
            style: `background-color: ${attributes.color};`
          }
        }
      }
    }
  },
  addProseMirrorPlugins () {
    return [
      // Optional: You could add plugins here to handle specific cases
    ]
  }
})

export default Highlight
