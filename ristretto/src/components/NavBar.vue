<template>
	<header :class="(getScroll > 2) ? 'scrolled' : ''">
		<a class="logo" href="./">
			<img class="logo" src="../assets/logo.png" width="24px" height="24px">
			<h1 class="logo">Ristretto</h1>
		</a>
		<button :class="getSettingsVisible ? 'clicked' : ''" @click="showSettings">
			<svg height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/>
				<path d="M19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01s-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.07.65-.07.99s.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
			</svg>
		</button>

		<div :class="getSettingsVisible ? 'settings open' : 'settings closed'">
			<div class="full-height">
				<section>
					<p :style="{ opacity: 0.5 }"><em>a small but mighty notepad.</em></p>
				</section>
				<section>
					<h3>Theme</h3>
					<button :style="{ background: '#fff' }" :class="(theme == 'light') ? 'theme-btn selected' : 'theme-btn'" @click="setTheme('light')" data-theme="Light"></button>
					<button :style="{ background: '#151515' }" :class="(theme == 'dark') ? 'theme-btn selected' : 'theme-btn'" @click="setTheme('dark')" data-theme="Dark"></button>
					<button :style="{ background: '#d6cfac' }" :class="(theme == 'sand') ? 'theme-btn selected' : 'theme-btn'" @click="setTheme('sand')" data-theme="Sand"></button>
					<button :style="{ background: '#264a4f' }" :class="(theme == 'sea') ? 'theme-btn selected' : 'theme-btn'" @click="setTheme('sea')" data-theme="Deep-Sea"></button>
					<button :style="{ background: '#8a3a1b' }" :class="(theme == 'caramel') ? 'theme-btn selected' : 'theme-btn'" @click="setTheme('caramel')" data-theme="Caramel"></button>
					<button :style="{ background: '#c5c5c5' }" :class="(theme == 'concrete') ? 'theme-btn selected' : 'theme-btn'" @click="setTheme('concrete')" data-theme="Concrete"></button>
				</section>
				<section>
					<h3>Markdown Guide</h3>
					<div class="grid">
						<p>Heading 1:</p> <p><code>#</code> <code>Space</code></p>
						<p>Heading 2:</p> <p><code>##</code> <code>Space</code></p>
						<p>Heading 3:</p> <p><code>###</code> <code>Space</code></p>
						<p><strong>Bold:</strong></p> <p><code>**bold**</code></p>
						<p><em>Italic:</em></p> <p><code>*italic*</code></p>
						<p><s>Strikethrough:</s></p> <p><code>~strikethrough~</code></p>
						<p><u>Underline:</u></p> <p><code>⌘</code> + <code>U</code></p>
						<p><code>Code:</code></p> <p><code>`code`</code></p>
						<p><code>Codeblock:</code></p> <p><code>```</code></p>
						<blockquote>Blockquote:</blockquote> <p><code>></code> <code>Space</code></p>
						<p><ul><li>Unordered list:</li></ul></p> <p><code>-</code> <code>Space</code></p>
						<p><ol><li>Ordered list:</li></ol></p> <p><code>1.</code> <code>Space</code></p>
						<p>Image:</p> <p><code>![](https://...)</code></p>
						<p>Horizontal rule:</p> <p><code>---</code></p>
					</div>
				</section>
			</div>
		</div>
	</header>
</template>

<script>
export default 
{
	data() 
	{
		return {	
			scrollPosition: 0,
			settingsVisible: false,
			colorTheme: 'light'
        }
	},
	mounted() 
	{
		window.addEventListener('scroll', this.updateScroll);
		this.setTheme(this.$storage.get('theme'));
	},
	methods: 
	{
		updateScroll: function() 
		{
			this.scrollPosition = window.scrollY;
		},
		showSettings: function()
		{
			this.settingsVisible = !this.settingsVisible;
		},
		setTheme(themeName)
		{
			document.body.className = themeName + "-theme";
			this.colorTheme = themeName;
			this.$storage.set('theme', themeName);
		}
	},
	computed:
	{
		getScroll: function()
		{
			return this.scrollPosition;
		},
		getSettingsVisible: function()
		{
			return this.settingsVisible;
		},
		theme: function()
		{
			return this.colorTheme;
		}
	},
	beforeDestroy() 
	{
		window.removeEventListener('scroll', this.updateScroll);
	}
}
</script>