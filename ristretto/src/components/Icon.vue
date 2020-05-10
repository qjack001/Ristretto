<template>
    <div class="icon">
        <p v-if="name == 'bold'"><strong>B</strong></p>
        <p v-else-if="name == 'italic'" :style="{ transform: 'translateX(-1px)' }"><em>I</em></p>
        <p v-else-if="name == 'underline'"><u>U</u></p>
        <p v-else-if="name == 'strike'"><s>S</s></p>
        <p v-else-if="name == 'code'" :style="{ fontSize: '14px', transform: 'translateY(-2px)' }">{}</p>
        <svg v-else-if="name == 'link'" class="icon__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8zm9-4h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/>
        </svg>
        <svg v-else-if="name == 'remove'" class="icon__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
        </svg>
    </div>
</template>

<script>
export default
{
    props:
    {
        name: {},
    },
}
</script>