import { emailService } from '../services/email.service.js';


export default {
    name:emailDetails,
    template: `
      <section v-if="email" class="mail-details-container">
      <router-link class="x-btn" :to="'/email/'"> ✖</router-link>
      <div class="email-details"> 
      <div class="email-info"> 
        <p class="email-subject"> {{email.subject}}</p>
        <p  class="email-subtitle-container"> <span class="email.sender"> {{email.sender}}</span> <span class="email-date"> {{email.sentAt}} </span> </p>
        <p class="email-body" >{{email.body}}</p>
        </div> 
        </div>       
          
      </section>
      `,
     
  data() {
    return {
       email: null
    };

}
  
}

