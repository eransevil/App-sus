export default {
    template: `
    <section class="note-nav-edit"> 
        <i class="fas fa-palette" @click="toggleBgc">

        <div v-show="color" id="colorList">
            <button @click="setBgC('#ffab73')" class="bgc bgc-1" value="#ffc097"></button>
            <button @click="setBgC('#ffd384')" class="bgc bgc-2" value="#ff9784"></button>
            <button @click="setBgC('#d0e8f2')" class="bgc bgc-3" value="#d0e8f2"></button>
            <button @click="setBgC('#fff9b0')" class="bgc bgc-4" value="#f2fa7f"></button>
            <button @click="setBgC('#ffaec0')" class="bgc bgc-5" value="#ffaec0"></button>
        </div>
        </i>
        
        <i class="fas fa-thumbtack" @click="pinned"></i>

        <i class="fas fa-edit" title="edit" @click="doneEdit"></i>

        <i class="far fa-save" title="save" @click="saveEdit"></i>
        
        <i class="fas fa-trash-alt" title="delete" @click="deleteNoteById"></i>
        
        
    
    </section>
    `,
    data() {
        return {
            color: false,
        };
    },
    methods: {

        toggleBgc() {
            this.color = !this.color;
        },
        saveEdit(id) {

            this.$emit('saveNote');
        },
        doneEdit() {
            this.$emit('edit')
        },

        deleteNoteById() {
            this.$emit('deleteNote');
        },
        setBgC(color) {
            this.$emit('setBgC', color)
        },
        pinned() {
            this.$emit('doPinned')
        }

    },
};