import emailPreview from '../cmps/email-preview.cmp.js';
import emailCompose from '../pages/email-compose.cmp.js';
import { emailService } from '../services/email.service.js';

export default {
  props: ['emails'], 
  template: ` 
      <ul class="scroll-container">
        <div class="nav-bar-btn-container"> 
        <div class="filter-btn inbox-filter-btb" @click="filterby('all')">All</div>
        <div class="filter-btn inbox-filter-btb" @click="filterby('inbox')">Inbox</div>
        <div class="filter-btn  sent-filter-btb" @click="filterby('sent')">Sent</div>
        <div class="filter-btn  sent-filter-btb" @click="filterby('starred')">Starred</div>
        <!-- <div @click="filterby()">Starred</div> -->
        </div>
      <router-link title="Compose" class="compose-link" :to="'/email/'+compose" > ➕</router-link> 
      <li v-for="email in emails" :key="email.id" class="email-preview-container">
         <email-preview @click.native="renderPreview(email.id)"  @markRead="mark"  @starredToggle="toggleStar"  :email="email"/>  
        <div title="Mark As UnRead"  @click="MarkUnRead(email.id)" class="unread-btn"> 📩 </div>
        <div title="Delete"  @click="showDeleteModal(email.id)" class="delete-btn"> ✖ </div>
      </li>
    </ul>
    `,
  methods: {
    toggleStar(emailId) {
      console.log(emailId);
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
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(emailId);
          this.$emit('deleteEmail', emailId);
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    },
    mark(id) {
      console.log(id);
      this.$emit('markRead', id);
    },
    MarkUnRead(id) {
      console.log(id);
      this.$emit('UnRead', id);
    },
    filterby(value) {
      this.$emit('renderEmails', value);
    },
    renderPreview(emailId){
      this.$router.push(`/email/${emailId}`);
    }
  },

  computed: {
    compose() {
      return 'compose';
    },
  },

  components: {
    emailPreview,
    emailCompose,
  },
};
