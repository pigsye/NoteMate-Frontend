<template>
  <div class="NotesEditor">
    <div class="notes">
      <h1 class="topic-name">{{ info.topic }}</h1>
      <div class="notes-editor">
        <EditorContent :editor="editor" class="editor-content"></EditorContent>
      </div>
    </div>
    <div class="toolbar">
      <div class="section-one">
        <button class="undo"><img src="@/assets/icons/undo.svg" /></button>
        <button class="redo"><img src="@/assets/icons/redo.svg" /></button>
        <button class="print"><img src="@/assets/icons/print.svg" /></button>
        <button class="spellcheck"><img src="@/assets/icons/spellcheck.svg" /></button>
      </div>
      <div class="section-two">
        <div class="not-font-size">
          <button class="format-paint"><img src="@/assets/icons/paint_format.svg" /></button>
          <button class="format-clear"><img src="@/assets/icons/clear_format.svg" /></button>
          <button class="zoom-in"><img src="@/assets/icons/zoom_in.svg" /></button>
          <button class="zoom-out"><img src="@/assets/icons/zoom_out.svg" /></button>
        </div>
        <div class="font-size">
            <input class="font-size-input" type="number">
        </div>
      </div>
      <div class="section-three">
        <div class="text-size">
          <div class="text-size-2">
              <input class="text-size-input">
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
      <div class="section-three-point-five" v-if="showHeaders">
        <h1 class="heading-title" :class="{ active: isHeader1Active }" @click="setHeader1">Heading 1</h1>
        <h2 class="heading-title" :class="{ active: isHeader2Active }" @click="setHeader2">Heading 2</h2>
        <h3 class="heading-title" :class="{ active: isHeader3Active }" @click="setHeader3">Heading 3</h3>
        <h4 class="heading-title" :class="{ active: isHeader4Active }" @click="setHeader4">Heading 4</h4>
        <p class="heading-title" :class="{ active: isParagraphActive }" @click="setParagraph">Paragraph</p>
      </div>
      <div class="section-four">
        <button class="bold" :class="{ active: isBoldActive }" @click="toggleBold">
          <img src="@/assets/icons/bold.svg" />
        </button>
        <button class="italics" :class="{ active: isItalicActive }" @click="toggleItalic">
          <img src="@/assets/icons/italics.svg" />
        </button>
        <button class="underline" :class="{ active: isUnderlineActive }" @click="toggleUnderline">
          <img src="@/assets/icons/underline.svg" /></button>
        <button class="text-color"><img src="@/assets/icons/text_color.svg" /></button>
        <button class="highlight-color"><img src="@/assets/icons/highlight_color.svg" /></button>
      </div>
      <div class="section-five">
        <button class="link"><img src="@/assets/icons/link.svg" /></button>
        <button class="image"><img src="@/assets/icons/image.svg" /></button>
        <button class="unordered-lists"><img src="@/assets/icons/unordered_list.svg" /></button>
        <button class="ordered-lists"><img src="@/assets/icons/ordered_list.svg" /></button>
      </div>
    </div>
  </div>
</template>

<script>
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

export default {
  name: 'NotesEditor',
  components: {
    EditorContent
  },
  data () {
    return {
      editor: null,
      showHeaders: false
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
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        TextStyle.configure({ types: [ListItem.name] }),
        TextAlign.configure({ types: ['heading', 'paragraph'] }),
        Underline,
        StarterKit
      ],
      content: `
      <p> meow </p>
      `
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
      }
    },
    setHeader1 () {
      if (this.editor) {
        this.editor.chain().focus().toggleHeading({ level: 1 }).run()
      }
    },
    setHeader2 () {
      if (this.editor) {
        this.editor.chain().focus().toggleHeading({ level: 2 }).run()
      }
    },
    setHeader3 () {
      if (this.editor) {
        this.editor.chain().focus().toggleHeading({ level: 3 }).run()
      }
    },
    setHeader4 () {
      if (this.editor) {
        this.editor.chain().focus().toggleHeading({ level: 4 }).run()
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
    }
  }
}
</script>
