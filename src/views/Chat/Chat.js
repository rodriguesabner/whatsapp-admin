import {
  ChatContainer, ContactItem, ContactsContainer, ContactsList, Container, Layout,
} from './styles';

export default {
  name: 'Chat',
  components: {
    Layout,
    Container,
    ContactsContainer,
    ChatContainer,
    ContactsList,
    ContactItem,
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          avatar: 'https://randomuser.me/api/portraits/',
        },
      ],
    };
  },
  methods: {
    selectContact(contact) {
      alert(`Selected contact: ${contact.name}`);
    },
  },
};
