export default {
    props: ['info'],
    template: `
    <section class="note-todos" >
        
    <input ref="title" class="title" type="text" v-model="info.title">
        <li v-for="(todo, idx) in this.info.todos" :key="todo.id">
            <input type="text" v-model="todo.txt">
        </li>
        <li class="done" v-for="(todo, idx) in this.info.todos" :key="todo.id">
            <input type="text" v-model="todo.txt">
        </li>
    </section>
    `,

    mounted() {
        this.$refs.title.focus()
    }
}