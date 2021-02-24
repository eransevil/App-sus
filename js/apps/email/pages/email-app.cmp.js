import { emailService } from '../services/email.service.js';
import emailList from '../cmps/email-list.cmp.js';

export default {
    name:'emailApp',
    template: `
    <section class= "main-app">
    <!-- <book-list v-if="!selectedBook" :books="booksToShow" @selected="selectBook"></book-list> -->

        <h1 class="">email-app</h1>

    </section>

    `,
  data() {
    return {
      emails: emailService.query(),
      selecetMail: null,
      filterBy: null,
    };
  },
  methods: {
    loadEmails() {
      emailService.query().then((emails) => (this.emails = emails));
      
    },
  },
  components: {
    emailList,
  },
  created(){
      this.loadEmails()
  }
};
