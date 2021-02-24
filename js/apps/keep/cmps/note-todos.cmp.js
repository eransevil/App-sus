export default {
    props: ['info'],
    template: `
    <section class="note-todos" >

    <h3>{{info.title}}</h3>
        <li v-for="(todo, idx) in this.info.todos" :key="todo.id">
        {{todo.txt}}
        </li>
    </section>
    `,

}