import { utilService } from '../../../util.service.js';
import { storageService } from '../../../async-storage.service.js';

const EMAILS_KEY = 'emails';

const gEmailsDB = [
  {
    id: utilService.makeId(),
    subject: 'dear friend',
    sender: 'me',
    senderAdress: 'eransevil@gmail.com',
    body: 'please call me urgently',
    isRead: false,
    sentAt: new Date(),
    starred: false,
    type: 'sent',
  },
  {
    id: utilService.makeId(),
    subject: 'Your receipt for Avocode',
    sender: 'Avocode',
    senderAdress: 'avocode@walla.com',
    body:
      'Your payment #2021AVO-3422r4 was processed. The payment for your invoice is processed by Amazon Payments, Inc. P.O. Box 81226 Seattle, Washington 98108-1226. If you need more information, please contact (866) 216-1075',
    isRead: true,
    sentAt: new Date(),
    starred: false,
    type: 'inbox',
  },
  {
    id: utilService.makeId(),
    subject: 'Your Amazon order',
    sender: 'Amazon',
    senderAdress: 'amazon-info@amazon.com',
    body:
      'Thank you for shopping with us. We’ll send a confirmation when your item ships.',
    isRead: false,
    sentAt: new Date(),
    starred: false,
    type: 'inbox',
  },
  {
    id: utilService.makeId(),
    subject: 'Your McAfee Monthly for February',
    sender: 'McAfee',
    senderAdress: 'McAfee@McAfee.com',
    body:
      'Just a quick reminder that we’re always here and ready to help with 24/7 support. Contact us for free basic support via chat',
    isRead: false,
    sentAt: new Date(),
    starred: true,
    type: 'inbox',
  },
  {
    id: utilService.makeId(),
    subject: 'Don’t miss out, eran!',
    sender: 'me ',
    senderAdress: 'eransevil@gmail.com',
    body:
      'f you do not wish to receive further communications like this, please click here to unsubscribe. Alternatively, you can change your Notification Preferences in My eBay by clicking here. Please note that it may take up to 10 days to process your request.',
    isRead: true,
    sentAt: new Date(),
    starred: false,
    type: 'sent',
  },
  {
    id: utilService.makeId(),
    subject: 'Publicly Accessible Google API Key ',
    sender: 'google-cloud',
    senderAdress: 'cloud@gmail.com',
    body:
      'We have detected a publicly accessible Google API key associated with the following Google Cloud Platform project',
    isRead: true,
    sentAt: new Date(),
    starred: true,
    type: 'inbox',
  },
];

export const emailService = {
  query,
  save,
  getById,
  getNextEmailId,
  update,
  remove,
  createSentEmail,
};

createEmails();

function createSentEmail(to, subject, body) {
   const email = {
    id: utilService.makeId(),
    subject,
    sender: 'me',
    senderAdress: 'me@gmail.com',
    body,
    isRead: false,
    sentAt: new Date(),
    starred: true,
    type: 'sent',
  };
 return save(email);
}

function createEmails() {
  let emails = utilService.loadFromStorage(EMAILS_KEY);
  if (!emails || !emails.length) {
    emails = [...gEmailsDB];
    utilService.saveToStorage(EMAILS_KEY, emails);
  }
}

function getNextEmailId(emailId) {
  const emails = utilService.loadFromStorage(EMAILS_KEY);
  const emailIdx = emails.findIndex((email) => {
    return emailId === email.id;
  });
  if (emailIdx === emails.length - 1) return emails[0].id;
  else return emails[emailIdx + 1].id;
}

function query() {
  return storageService.query(EMAILS_KEY).then((emails) => {
    return emails;
  });
}

function save(email) {
  return storageService.post(EMAILS_KEY, email);
}

function update(newEmail) {
  return storageService.put(EMAILS_KEY, newEmail);
}

function getById(id) {
  return storageService.get(EMAILS_KEY, id);
}

function remove(id) {
  return storageService.remove(EMAILS_KEY, id);
}

// function filterBy(value) {
//   ret storageService.query(EMAILS_KEY).then((emails) => {
//     console.log(value)
//     if(value==='inbox'){
//       return emails.filter((email) =>{
//         return email.type === 'inbox'
//       } )  
//     }
//     else if(value === 'sent'){
//       return emails.filter((email) =>{
//         return email.type === 'sent'
//       } )  
//     }
//     else{
//       return emails.filter((email) =>{
//         return email.starred === true
//       } )  
//     }
  
//   });
// }

