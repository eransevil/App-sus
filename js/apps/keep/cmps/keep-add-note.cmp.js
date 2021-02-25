import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteNavEdit from './note-nav-edit.cmp.js'
import { keepService } from '../services/keep.service.js'

export default {
    template: `
    <section  class="note-edit flex">
        <div class= "edit-container flex wrap">
        <input ref="inputNote" :placeholder="place[noteType]"  v-if="newNote" v-model="newNote.info.txt" @keyup.enter.prevent="addNewNote(newNote)" />
            <div class="btn-add">
                <button title="Text" @click.stop="setNoteType('noteTxt')">
                <i class="fas fa-font"></i>
                </button>
                <button title="Image" @click.stop="setNoteType('noteImg')"> 
                    <i class="fas fa-camera-retro"></i>
                </button>
            </div>
        </div>
</section>
    `,
    data() {
        return {
            noteType: 'noteTxt',
            newNote: null,
            place: {
                noteTxt: 'write something...',
                noteImg: 'Upload an image url...',
                noteTodos: 'Write here a todo list...',
            }
        }
    },
    methods: {

        setNoteType(type) {
            console.log('type', type);
            this.noteType = type;
            this.newNote = keepService.getEmptyNote(this.noteType)
            console.log('this.newNote:', this.newNote)
        },
        addNewNote(newNote) {
            keepService.addNewNote(newNote);
            this.newNote = keepService.getEmptyNote(this.noteType);
        },

    },

    mounted() {
        this.$refs.inputNote.focus()
    },

    created() {
        this.newNote = keepService.getEmptyNote("noteTxt");
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteNavEdit,
    }
}