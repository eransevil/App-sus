export default {
    props: ['info'],
    template: `
        <section class="note-img" >
            
            <input ref="title" class="title" type="text" v-model="info.title">
            <input type="text" v-model="info.url">
            <img :src="info.url" alt="">  
            
        </section>
        `,

    mounted() {
        this.$refs.title.focus()
    }
}