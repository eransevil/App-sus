export default {
    props: ['info'],
    template: `
        <section class = "note-txt">
            <h3>{{info.title}}</h3>
            <h4>{{info.txt}}</h4>
            <input ref="title" class="title" type="text" v-model="info.title">
            <textarea name="" v-model="info.txt" cols="30" rows="10"></textarea>
        </section>
        `,

    mounted() {
        this.$refs.title.focus()
    }
}