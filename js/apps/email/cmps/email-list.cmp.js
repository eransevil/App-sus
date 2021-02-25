import emailPreview from '../cmps/email-preview.cmp.js';
import emailCompose from '../pages/email-compose.cmp.js'

export default {
  props: ['emails'],
  template: `
    <ul class="email-list">
    <router-link title="Compose" class="compose-link" :to="'/email/'+compose" > ➕</router-link> 
    <li v-for="email in emails" :key="email.id" class="email-preview-container">
    <router-link  class="open-mail" :to="'/email/'+email.id">  <email-preview @markRead="mark"  @starredToggle="toggleStar"  :email="email"/>  </router-link>
     <div title="Mark As UnRead"  @click="MarkUnRead(email.id)" class="unread-btn"> 📩 </div>
     <div title="Delete"  @click="showDeleteModal(email.id)" class="delete-btn"> ✖ </div>
   
    </li>
    </ul>
    `,
  methods: {
    toggleStar(emailId) {
      console.log(emailId)
      this.$emit('starredToggle', emailId);
    },
    showDeleteModal(emailId) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(emailId)
          this.$emit('deleteEmail', emailId);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

    },
    mark(id){
      console.log(id)
      this.$emit('markRead' , id)
    },
    MarkUnRead(id){
      console.log(id)
      this.$emit('UnRead' , id)


    }

  },

  computed:{
    compose(){
      return 'compose'
    }
  },

  components: {
    emailPreview,
    emailCompose
  },
};
