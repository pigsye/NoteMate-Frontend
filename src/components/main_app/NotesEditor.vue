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
        <button class="search"><img src="@/assets/icons/search.svg" /></button>
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
          <div class="font-size-2">
            <input class="font-size-input" type="number">
            <button class="not-like-the-other-buttons"><img src="@/assets/icons/dropdown.svg" /></button>
         </div>
        </div>
      </div>
      <div class="section-three">
        <div class="text-size">
          <div class="text-size-2">
              <input class="text-size-input">
              <button class="not-like-the-other-buttons"><img src="@/assets/icons/dropdown.svg" /></button>
          </div>
        </div>
        <div class="not-text-size">
          <button class="align-left"><img src="@/assets/icons/align_left.svg" /></button>
          <button class="align-center"><img src="@/assets/icons/align_center.svg" /></button>
          <button class="align-right"><img src="@/assets/icons/align_right.svg" /></button>
        </div>
        </div>
      <div class="section-four">
        <button class="bold active"><img src="@/assets/icons/bold.svg" /></button>
        <button class="itailcs active"><img src="@/assets/icons/itailcs.svg" /></button>
        <button class="underline"><img src="@/assets/icons/underline.svg" /></button>
        <button class="text-color active"><img src="@/assets/icons/text_color.svg" /></button>
        <button class="highlight-color"><img src="@/assets/icons/highlight_color.svg" /></button>
      </div>
      <div class="section-five">
        <button class="link"><img src="@/assets/icons/link.svg" /></button>
        <button class="image"><img src="@/assets/icons/image.svg" /></button>
        <button class="unordered-lists"><img src="@/assets/icons/unordered_list.svg" /></button>
        <button class="ordered-lists active"><img src="@/assets/icons/ordered_list.svg" /></button>
      </div>
    </div>
  </div>
</template>

<script>
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

export default {
  name: 'NotesEditor',
  components: {
    EditorContent
  },
  data () {
    return {
      editor: null
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
        StarterKit
      ],
      content: `
        <p> meow </p>
      `
    })
  },
  beforeUnmount () {
    this.editor.destroy()
  }
}
</script>
