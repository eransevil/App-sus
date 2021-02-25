import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteNavEdit from './note-nav-edit.cmp.js'
import { keepService } from '../services/keep.service.js'

export default {
    props: ['keep'],
    template: `
    <section  class="keep-preview">
        <div>
            <component :is="keep.type" :info="keep.info"></component>
        </div>
        <note-nav-edit/>
    </section>
    `,
    data() {
        return {}
    },
    methods: {},

    components: {
        keepService,
        noteTxt,
        noteImg,
        noteTodos,
        noteNavEdit
    }
}