export default {
    template: `
    <section class="note-nav-edit"> 

        <datalist id="colorList">
            <option value="#ffab73"></option>
            <option value="#ffd384"></option>
            <option value="#d0e8f2"></option>
            <option value="#fff9b0"></option>
            <option value="#ffaec0"></option>
            <option value="#79a3b1"></option>
        </datalist>

        <i class="fas fa-edit" title="edit" @click="doneEdit"></i>

        <i class="far fa-save" title="save" @click="saveEdit"></i>
       
        <button><input @change="setBgC" type="color" v-model="color" list="colorList" value="#ffab73"/></button> <i class="fas fa-palette"></i>
        
        <i class="fas fa-trash-alt" title="delete" @click="deleteNoteById"></i>
        
        
    
    </section>
    `,
    data() {
        return {
            color: '#ffab73',
        };
    },
    methods: {
        saveEdit(id) {

            this.$emit('saveNote');
        },
        doneEdit() {
            this.$emit('edit')
        },

        deleteNoteById() {
            this.$emit('deleteNote');
        },
        setBgC() {
            this.$emit('setBgC', this.color)
        },

    },
};