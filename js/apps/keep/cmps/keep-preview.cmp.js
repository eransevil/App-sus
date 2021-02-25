import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteNavEdit from './note-nav-edit.cmp.js'
import { keepService } from '../services/keep.service.js'
// import { eventBus } from '../../../event-bus.service.js'

export default {
    props: ['keep'],
    template: `
    <section  class="keep-preview">
        <div>
            <component :is="keep.type" :info="keep.info" :edit="isEdit" key="keep.id"></component>
        </div>
        <note-nav-edit  @deleteNote="deleteNote" @edit="editNote"/>
    </section>
    `,
    data() {
        return {
            isEdit: false,
        }
    },
    methods: {
        deleteNote() {
            console.log(' this.keep.id:', this.keep.id)
            keepService.deleteNote(this.keep.id)
        },
        editNote() {
            this.isEdit = !this.isEdit;
            this.$emit('edit', this.keep);
        }

    },

    components: {
        keepService,
        noteTxt,
        noteImg,
        noteTodos,
        noteNavEdit
    }
}