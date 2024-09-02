<template>
  <div class="NotesEditor">
    <div class="notes">
      <h1 class="topic-name">{{ info.topic }}</h1>
      <div class="notes-editor">
        <EditorContent :editor="editor" class="editor-content"></EditorContent>
      </div>
    </div>
    <div class="toolbar">
      <div class="section-one" v-if="isEditable">
        <button class="undo"><img src="@/assets/icons/undo.svg" /></button>
        <button class="redo"><img src="@/assets/icons/redo.svg" /></button>
        <button class="print"><img src="@/assets/icons/print.svg" /></button>
        <button class="spellcheck"><img src="@/assets/icons/spellcheck.svg" /></button>
      </div>
      <div class="section-two" v-if="isEditable">
        <div class="not-font-size">
          <button class="format-clear" @click="formatClears">
            <img src="@/assets/icons/clear_format.svg" />
          </button>
          <button class="zoom-in"><img src="@/assets/icons/zoom_in.svg" /></button>
          <button class="zoom-out"><img src="@/assets/icons/zoom_out.svg" /></button>
        </div>
        <div class="font-size">
            <input class="font-size-input" type="number" v-model="fontSize" @keyup.enter="applyFontSize" min="8" max="72"/>
        </div>
      </div>
      <div class="section-three" v-if="isEditable">
        <div class="text-size">
          <div class="text-size-2">
              <input class="text-size-input" :value="currentHeader" readonly>
              <button class="not-like-the-other-buttons" @click="showHeaders = !showHeaders" :class="{ active: showHeaders }">
                <img src="@/assets/icons/dropdown.svg" />
              </button>
          </div>
        </div>
        <div class="not-text-size">
          <button class="align-left" :class=" {active: isTextAlignLeft }" @click="alignTextLeft">
            <img src="@/assets/icons/align_left.svg" />
          </button>
          <button class="align-center" :class=" {active: isTextAlignCenter }" @click="alignTextCenter">
            <img src="@/assets/icons/align_center.svg" />
          </button>
          <button class="align-right" :class=" {active: isTextAlignRight }" @click="alignTextRight">
            <img src="@/assets/icons/align_right.svg" />
          </button>
        </div>
      </div>
      <div class="section-three-point-five" v-if="showHeaders && isEditable">
        <h1 class="heading-title" :class="{ active: isHeader1Active }" @click="setHeader1">Heading 1</h1>
        <h2 class="heading-title" :class="{ active: isHeader2Active }" @click="setHeader2">Heading 2</h2>
        <h3 class="heading-title" :class="{ active: isHeader3Active }" @click="setHeader3">Heading 3</h3>
        <h4 class="heading-title" :class="{ active: isHeader4Active }" @click="setHeader4">Heading 4</h4>
        <p class="heading-title" :class="{ active: isParagraphActive }" @click="setParagraph">Paragraph</p>
      </div>
      <div class="section-four" v-if="isEditable">
        <button class="bold" :class="{ active: isBoldActive }" @click="toggleBold">
          <img src="@/assets/icons/bold.svg" />
        </button>
        <button class="italics" :class="{ active: isItalicActive }" @click="toggleItalic">
          <img src="@/assets/icons/italics.svg" />
        </button>
        <button class="underline" :class="{ active: isUnderlineActive }" @click="toggleUnderline">
          <img src="@/assets/icons/underline.svg" /></button>
        <button class="text-color" :class="{ active: showTextColors }" @click="showTextColorsFunction">
          <img src="@/assets/icons/text_color.svg" />
        </button>
        <button class="highlight-color" :class="{ active: showHighlightColors }" @click="showHighlightColorsFunction">
          <img src="@/assets/icons/highlight_color.svg" />
        </button>
      </div>
      <div class="section-four-point-five" v-if="showTextColors">
        <div class="line-one">
          <button class="red not-like-the-other-buttons" :class="{ active: isColorActive('#B22222') }" @click="setcolor('#B22222')"></button>
          <button class="green not-like-the-other-buttons" :class="{ active: isColorActive('#008000') }" @click="setcolor('#008000')"></button>
          <button class="lime not-like-the-other-buttons" :class="{ active: isColorActive('#32CD32') }" @click="setcolor('#32CD32')"></button>
          <button class="yellow not-like-the-other-buttons" :class="{ active: isColorActive('#FFD700') }" @click="setcolor('#FFD700')"></button>
          <button class="white not-like-the-other-buttons" :class="{ active: isColorActive(' #FFFFFF') }" @click="setcolor(' #FFFFFF')"></button>
        </div>
        <div class="line-two">
          <button class="blue not-like-the-other-buttons" :class="{ active: isColorActive('#0000FF') }" @click="setcolor('#0000FF')"></button>
          <button class="aqua not-like-the-other-buttons" :class="{ active: isColorActive('#00FFFF') }" @click="setcolor('#00FFFF')"></button>
          <button class="purple not-like-the-other-buttons" :class="{ active: isColorActive('#800080') }" @click="setcolor('#800080')"></button>
          <button class="pink not-like-the-other-buttons" :class="{ active: isColorActive('#FF00FF') }" @click="setcolor('#FF00FF')"></button>
          <button class="black not-like-the-other-buttons" :class="{ active: isColorActive('#000000') }" @click="setcolor('#000000')"></button>
        </div>
      </div>
      <div class="section-four-point-seven-five" v-if="showHighlightColors">
        <div class="line-one">
          <button class="red not-like-the-other-buttons" :class="{ active: isHighlightActive('#B22222') }" @click="setHighlightColor('#B22222')"></button>
          <button class="green not-like-the-other-buttons" :class="{ active: isHighlightActive('#008000') }" @click="setHighlightColor('#008000')"></button>
          <button class="lime not-like-the-other-buttons" :class="{ active: isHighlightActive('#32CD32') }" @click="setHighlightColor('#32CD32')"></button>
          <button class="yellow not-like-the-other-buttons" :class="{ active: isHighlightActive('#FFD700') }" @click="setHighlightColor('#FFD700')"></button>
          <button class="white not-like-the-other-buttons" :class="{ active: isHighlightActive('#FFFFFF') }" @click="setHighlightColor(' #FFFFFF')"></button>
        </div>
        <div class="line-two">
          <button class="blue not-like-the-other-buttons" :class="{ active: isHighlightActive('#0000FF') }" @click="setHighlightColor('#0000FF')"></button>
          <button class="aqua not-like-the-other-buttons" :class="{ active: isHighlightActive('#00FFFF') }" @click="setHighlightColor('#00FFFF')"></button>
          <button class="purple not-like-the-other-buttons" :class="{ active: isHighlightActive('#800080') }" @click="setHighlightColor('#800080')"></button>
          <button class="pink not-like-the-other-buttons" :class="{ active: isHighlightActive('#FF00FF') }" @click="setHighlightColor('#FF00FF')"></button>
          <button class="black not-like-the-other-buttons" :class="{ active: isHighlightActive('#000000') }" @click="setHighlightColor('#000000')"></button>
        </div>
      </div>
      <div class="section-five" v-if="isEditable">
        <button class="link" :class="{ active: isLink }" @click="toggleLink"><img src="@/assets/icons/link.svg" /></button>
        <button class="image"><img src="@/assets/icons/image.svg" /></button>
        <button class="unordered-lists" :class="{ active: isBulletList }" @click="toggleBulletList">
          <img src="@/assets/icons/unordered_list.svg" />
        </button>
        <button class="ordered-lists" :class="{ active: isOrderedList }" @click="toggleOrderedList">
          <img src="@/assets/icons/ordered_list.svg" />
        </button>
      </div>
      <div class="section-six">
        <button class="enable-editing" :class="{ active: isEditable }" @click="enableEditing">
          <img src="@/assets/icons/edit.svg" />
        </button>
        <button class="disable-editing" :class="{ active: !isEditable }" @click="disableEditing">
          <img src="@/assets/icons/view.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@/extentions/highlight'
import FontSize from 'tiptap-extension-font-size'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import { Editor, EditorContent } from '@tiptap/vue-3'

export default {
  name: 'NotesEditor',
  components: {
    EditorContent
  },
  data () {
    return {
      editor: null,
      showHeaders: false,
      currentHeader: 'P',
      fontSize: 16,
      isEditable: true,
      showTextColors: false,
      showHighlightColors: false
    }
  },
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.editor = new Editor({
      extensions: [
        TextStyle, // Ensure TextStyle is added before Color
        Color.configure({
          types: ['textStyle']
        }),
        FontSize,
        Highlight.configure({ multicolor: true }),
        TextAlign.configure({ types: ['heading', 'paragraph'] }),
        Link.configure({
          openOnClick: false,
          linkOnPaste: true
        }),
        Underline,
        StarterKit
      ],
      content: `
      <p> meow </p>
      `,
      editable: true // Ensure that the editor starts in edit mode
    })

    this.editor.on('selectionUpdate', () => {
      this.updateFontSize()
    })
  },
  beforeUnmount () {
    if (this.editor) {
      this.editor.destroy()
    }
  },
  computed: {
    isBoldActive () {
      return this.editor && this.editor.isActive('bold')
    },
    isItalicActive () {
      return this.editor && this.editor.isActive('italic')
    },
    isUnderlineActive () {
      return this.editor && this.editor.isActive('underline')
    },
    isParagraphActive () {
      return this.editor && this.editor.isActive('paragraph')
    },
    isHeader1Active () {
      return this.editor && this.editor.isActive('heading', { level: 1 })
    },
    isHeader2Active () {
      return this.editor && this.editor.isActive('heading', { level: 2 })
    },
    isHeader3Active () {
      return this.editor && this.editor.isActive('heading', { level: 3 })
    },
    isHeader4Active () {
      return this.editor && this.editor.isActive('heading', { level: 4 })
    },
    isTextAlignRight () {
      return this.editor && this.editor.isActive('textAlign', { textAlign: 'right' })
    },
    isTextAlignLeft () {
      return this.editor && this.editor.isActive('textAlign', { textAlign: 'left' })
    },
    isTextAlignCenter () {
      return this.editor && this.editor.isActive('textAlign', { textAlign: 'center' })
    },
    isBulletList () {
      return this.editor && this.editor.isActive('bulletList')
    },
    isOrderedList () {
      return this.editor && this.editor.isActive('orderedList')
    },
    isLink () {
      return this.editor && this.editor.isActive('link')
    },
    isColorActive () {
      return (color) => this.editor && this.editor.isActive('textStyle', { color })
    },
    isHighlightActive () {
      return (color) => this.editor && this.editor.isActive('highlight', { color })
    }
  },
  methods: {
    toggleBold () {
      if (this.editor) {
        this.editor.chain().focus().toggleBold().run()
      }
    },
    toggleItalic () {
      if (this.editor) {
        this.editor.chain().focus().toggleItalic().run()
      }
    },
    toggleUnderline () {
      if (this.editor) {
        this.editor.chain().focus().toggleUnderline().run()
      }
    },
    setParagraph () {
      if (this.editor) {
        this.editor.chain().focus().setParagraph().run()
        this.editor.chain().focus().setFontSize('1rem').run()
        this.currentHeader = 'P'
      }
    },
    setHeader1 () {
      if (this.editor) {
        this.editor.chain().focus().toggleHeading({ level: 1 }).run()
        this.editor.chain().focus().setFontSize('2rem').run()
        this.currentHeader = 'H1'
      }
    },
    setHeader2 () {
      if (this.editor) {
        this.editor.chain().focus().toggleHeading({ level: 2 }).run()
        this.editor.chain().focus().setFontSize('1.5rem').run()
        this.currentHeader = 'H2'
      }
    },
    setHeader3 () {
      if (this.editor) {
        this.editor.chain().focus().toggleHeading({ level: 3 }).run()
        this.editor.chain().focus().setFontSize('1.17rem').run()
        this.currentHeader = 'H3'
      }
    },
    setHeader4 () {
      if (this.editor) {
        this.editor.chain().focus().toggleHeading({ level: 4 }).run()
        this.editor.chain().focus().setFontSize('1rem').run()
        this.currentHeader = 'H4'
      }
    },
    alignTextRight () {
      if (this.editor) {
        this.editor.chain().focus().setTextAlign('right').run()
      }
    },
    alignTextCenter () {
      if (this.editor) {
        this.editor.chain().focus().setTextAlign('center').run()
      }
    },
    alignTextLeft () {
      if (this.editor) {
        this.editor.chain().focus().setTextAlign('left').run()
      }
    },
    toggleBulletList () {
      if (this.editor) {
        this.editor.chain().focus().toggleBulletList().run()
      }
    },
    toggleOrderedList () {
      if (this.editor) {
        this.editor.chain().focus().toggleOrderedList().run()
      }
    },
    applyFontSize () {
      if (this.editor && this.fontSize) {
        this.editor.chain().focus().setFontSize(`${this.fontSize}px`).run()
      }
    },
    updateFontSize () {
      if (this.editor) {
        // Get the attributes for the 'textStyle' mark
        const attrs = this.editor.getAttributes('textStyle')
        let currentFontSize = attrs.fontSize
        if (currentFontSize) {
          if (currentFontSize.includes('rem')) {
            // Convert rem to px based on the root font size (assuming default 16px)
            const remValue = parseFloat(currentFontSize.replace('rem', ''))
            const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) // Typically 16px
            currentFontSize = remValue * rootFontSize
          } else if (currentFontSize.includes('px')) {
            // Extract the numeric part for px values
            currentFontSize = parseFloat(currentFontSize.replace('px', ''))
          }
          if (!isNaN(currentFontSize)) {
            this.fontSize = currentFontSize // Update the fontSize data property
          } else {
            this.fontSize = 16 // Default to 16px if parsing fails
          }
        } else {
          this.fontSize = 16 // Default if no fontSize is set
        }
      }
    },
    async toggleLink () {
      if (this.editor) {
        const isActive = this.editor.isActive('link')

        if (isActive) {
          // If the link is active, remove it
          this.editor.chain().focus().unsetLink().run()
        } else {
          // If the link is not active, prompt the user for a URL
          const url = prompt('Enter the URL for the link:')

          // Only set the link if the user provided a URL
          if (url) {
            this.editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
          }
        }
      }
    },
    disableEditing () {
      if (this.editor) {
        this.editor.setEditable(false)
        this.isEditable = false
      }
    },
    enableEditing () {
      if (this.editor) {
        this.editor.setEditable(true)
        this.isEditable = true
      }
    },
    showTextColorsFunction () {
      if (this.showTextColors) {
        this.showTextColors = false
      } else {
        this.showHighlightColors = false
        this.showTextColors = true
      }
    },
    showHighlightColorsFunction () {
      if (this.showHighlightColors) {
        this.showHighlightColors = false
      } else {
        this.showTextColors = false
        this.showHighlightColors = true
      }
    },
    setcolor (color) {
      if (this.editor) {
        this.editor.chain().focus().setColor(color).run()
      }
    },
    setHighlightColor (color) {
      if (this.editor) {
        this.editor.chain().focus().setHighlight({ color }).run()
      }
    },
    formatClears () {
      if (this.editor) {
        this.editor.chain().focus()
          .unsetBold()
          .unsetItalic()
          .unsetUnderline()
          .unsetColor()
          .unsetHighlight() // Custom highlight extension
          .setTextAlign('left') // Reset text alignment to left
          .unsetLink() // Unset any links
          .setFontSize('1rem') // Reset font size to default
          .setParagraph()
          .run()
      }
    }
  }
}
</script>
