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

        <button @click="saveEdit">Save</button>
       
        <button><input @change="setBgC" type="color" v-model="color" list="colorList" value="#ffab73"/></button>
        
        <button @click="deleteNoteById">Delete</button>
        
    
    </section>
    `,
    data() {
        return {
            color: '#ffab73',
        };
    },
    methods: {
        saveEdit() {
            this.$emit('saveEdit');
        },
        deleteNoteById() {
            this.$emit('deleteNote');
        },
        setBgC() {
            this.$emit('setBgC', this.color)
        },

    },
};