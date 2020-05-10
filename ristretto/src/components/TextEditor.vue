<template>
	<div class="editor">
		<editor-menu-bubble :editor="editor" :keep-in-bounds="keepInBounds" @hide="hideLinkMenu" v-slot="{ commands, isActive, getMarkAttrs, menu }">
			<div class="menububble" :class="{ 'is-active': menu.isActive }" :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`">
                <form class="menububble__form" v-if="linkMenuIsActive" @submit.prevent="setLinkUrl(commands.link, linkUrl)">
                    <input class="menububble__input" type="text" v-model="linkUrl" placeholder="https://" ref="linkInput" @keydown.esc="hideLinkMenu"/>
                    <button class="menububble__button" @click="setLinkUrl(commands.link, null)" type="button">
                        <icon name="remove">remove</icon>
                    </button>
                </form>
                <template v-else>
                    <button class="menububble__button" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
                        <icon name="bold">bold</icon>
                    </button>

                    <button class="menububble__button" :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
                        <icon name="italic">italic</icon>
                    </button>

                    <button class="menububble__button" :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
                        <icon name="underline">underline</icon>
                    </button>

                    <button class="menububble__button" :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
                        <icon name="strike">strike</icon>
                    </button>

                    <button class="menububble__button" :class="{ 'is-active': isActive.code() }" @click="commands.code">
                        <icon name="code">code</icon>
                    </button>

                    <button class="menububble__button" :class="{ 'is-active': isActive.link() }" @click="showLinkMenu(getMarkAttrs('link'))">
                        <icon name="link">link</icon>
                    </button>
                </template>
			</div>
		</editor-menu-bubble>
		<editor-content class="editor__content" :editor="editor" />
	</div>
</template>

<script>
	import Icon from './Icon.vue'
	import { Editor, EditorContent, EditorMenuBubble } from 'tiptap'
	import {
		Blockquote,
		BulletList,
		CodeBlock,
		HardBreak,
		Heading,
		ListItem,
		OrderedList,
		Bold,
		Code,
		Italic,
		Link,
		Strike,
		Underline,
		History,
        HorizontalRule,
        Image,
        TrailingNode,
        Placeholder,
	} from 'tiptap-extensions'

	export default 
	{
		components: 
		{
			EditorContent,
			EditorMenuBubble,
			Icon,
		},
		data() 
		{
			let vue = this;
			return {
				keepInBounds: true,
				editor: new Editor({
					extensions: [
						new Blockquote(),
						new BulletList(),
						new CodeBlock(),
						new HardBreak(),
						new Heading({ levels: [1, 2, 3] }),
						new ListItem(),
						new OrderedList(),
						new Link(),
						new Bold(),
						new Code(),
						new Italic(),
						new Strike(),
						new Underline(),
						new History(),
                        new HorizontalRule(),
                        new Image(),
                        new TrailingNode({
                            node: 'paragraph',
                            notAfter: ['paragraph'],
                        }),
                        new Placeholder({
                            emptyEditorClass: 'is-editor-empty',
                            emptyNodeClass: 'is-empty',
                            emptyNodeText: 'Write something...',
                            showOnlyWhenEditable: true,
                            showOnlyCurrent: true,
                        }),
					],
					content: vue.$storage.get('content'),
					onUpdate: ({ getHTML }) => vue.$storage.set('content', getHTML()) }),
                linkUrl: null,
                linkMenuIsActive: false,
            }
        },
        methods:
        {
            showLinkMenu(attrs)
            {
                this.linkUrl = attrs.href
                this.linkMenuIsActive = true
                this.$nextTick(() => {
                    this.$refs.linkInput.focus()
                })
            },
            hideLinkMenu()
            {
                this.linkUrl = null
                this.linkMenuIsActive = false
            },
            setLinkUrl(command, url)
            {
                command({ href: url })
                this.hideLinkMenu()
            }
		},
		beforeDestroy() 
		{
			this.editor.destroy()
		}
	}
</script>