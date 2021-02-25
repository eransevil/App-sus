import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteNavEdit from './note-nav-edit.cmp.js'
import { keepService } from '../services/keep.service.js'

export default {
    props: ['keep'],
    template: `
    <section  class="note-edit flex">
        <button @click="pinned">📌</button>
        <form  @submit.prevent="saveEdit">
        <component :is="keep.type" :info="keep.info"><component/>
        <note-nav-edit  @save="saveEdit" @changeBgC="changeBgC"/>
        </form>
    </section>
    `,
    data() {
        return {
            bgc: ''
        }
    },
    methods: {
        pinned() {
            console.log("pineed");
        },
        saveEdit() {
            keepService.saveNote(this.keep);
        },
        changeBgC(color) {
            this.style.bgC = color;
        },
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteNavEdit,
    }
}