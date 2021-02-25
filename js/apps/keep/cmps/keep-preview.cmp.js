import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteNavEdit from './note-nav-edit.cmp.js'
import { keepService } from '../services/keep.service.js'

export default {
    props: ['keep'],
    template: `
    <section  class="keep-preview" :style="keep.style">
        <div>
            <component :is="keep.type" :info="keep.info" :edit="isEdit" key="keep.id" @editSrc="onEditSrc" @editTxt="onEditTxt"></component>
        </div>
        <note-nav-edit  @deleteNote="deleteNote" @edit="editNote" @setBgC="newBgC"/>
    </section>
    `,
    data() {
        return {
            isEdit: false,
        }
    },
    methods: {
        deleteNote() {
            console.log('this.keep.id:', this.keep.id)
            this.$emit('deleteNote', this.keep.id);
        },
        editNote() {
            this.isEdit = !this.isEdit;
            this.$emit('edit', this.keep);
        },
        newBgC(color) {
            console.log(color)
            const setColor = {
                color,
                id: this.keep.id
            }
            console.log(setColor)

            this.$emit('changeBgc', setColor);
        },
        onEditTxt(isDone, txt) {
            this.isEdit = isDone;
            this.keep.info.txt = txt;
            keepService.updateNoteProp(this.keep.id, '[info][txt]', txt);

        },
        onEditSrc(isDone, newUrl) {
            this.isEdit = isDone;
            this.keep.info.url = newUrl;
            keepService.updateNoteProp(this.keep.id, '[info][url]', newUrl);
        }

    },

    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteNavEdit
    }
}