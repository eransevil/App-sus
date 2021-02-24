// import {bookDetailsService} from '../services/bookDetails-service.js'

export default {
  props: ['email'],
  template: `
    <section :class="isRead" class="email-preview">
        <p class="email-sender"> {{email.sender}}</p>
        <p class="email-subject"> {{email.subject}}</p>
        <p class="email-date"> {{convertDate}}</p>
    </section>
    `,
  methods: {
    
  },
  computed: {
    isRead() {
      return true;
    },
    convertDate() {
        var date = this.email.sentAt;
        date =  date.substring(0,10).split('-')
           date = date[1] + '-' + date[2] + '-' + date[0]
        return date;
        ;

    },
  },
};
