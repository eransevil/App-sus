export default {
    props: ['info'],
    template: `
    <section class="note-todos" >

    <h3>{{info.title}}</h3>
    <ul class="todos-ul">
    
        <li v-for="(todo, idx) in this.info.todos"  :class="{marked: todo.doneAt}":key="todo.id">
        <span class=""><input type="checkbox"></span>{{todo.txt}}
        </li>
    </ul>
    </section>
    `,

}