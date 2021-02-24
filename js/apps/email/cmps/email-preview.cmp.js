import {bookDetailsService} from '../services/bookDetails-service.js'


export default {
    props:['email'],
    template:`
    <section :class="isRead" class="book-preview">
        <p class="email-sender"> {{email.sender}}</p>
        <p class="email-subject"> {{email.subject}}</p>
    </section>
    `,
        computed:{
            isRead(){
                return true;
            }

        }
}

