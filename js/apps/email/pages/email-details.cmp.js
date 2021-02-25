import { emailService } from '../services/email.service.js';
import { eventBus } from '../services/event-bus.service.js';

export default {
  name: 'emailDetails',
  template: `
      <section v-if="email" class=" mail-details-container">
      <router-link  class="x-btn" :to="'/email/'">✖</router-link>
      <div class="email-info"> 
        <p class="email-subject"> {{email.subject}}</p>
        <p  class="email-subtitle-container"> <span class="email-sender"> {{email.sender}}</span> <span class="email-adress"> {{email.senderAdress}}</span> <span class="email-date"> {{email.sentAt}} </span> </p>
        <p class="email-body" >{{email.body}}</p>
        <button class="reply-btn"  @click.prevent="Reply">Reply</button>
        </div>       
          
      </section>
      `,

  data() {
    return {
      email: null,
      nextEmailId: null,
      previousEmailId: null,
    };
  },
  methods: {
    loadEmail() {
      const id = this.$route.params.id;
      emailService.getById(id).then((email) => {
        this.email = email;
        //  this.nextBookId = bookService.getNextBookId(book.id)
        //  this.PreviousBookId = bookService.getPreviousBookId(book.id)
      });
    },
    toggleStar() {
      console.log(this.email);
    },
    Reply() {
      this.$router.push(`/email/compose`)
    },
  },

  created() {
    this.loadEmail();
  },
  watch: {
    '$route.params.id'(id) {
      console.log(id);
      this.loadEmail();
    },
  },
};
