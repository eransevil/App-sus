import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import { keepService } from '../services/keep.service.js'

export default {
    props: ['keep'],
    template: `
    <section  class="keep-preview">
    <component :is="keep.type" :info="keep.info"></component>
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
        noteTodos
    }
}