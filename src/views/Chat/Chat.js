import BaseApi from '../../common/BaseApi';
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
      baseApi: new BaseApi(),
      contacts: [],
    };
  },
  async mounted() {
    await this.getContacts();
  },
  methods: {
    async getContacts() {
      const { data } = await this.baseApi.get('https://jsonplaceholder.typicode.com/users');
      // eslint-disable-next-line no-restricted-syntax
      for (const user of data) {
        Object.assign(user, { avatar: `https://ui-avatars.com/api/?name=${user.name}` });
      }

      this.contacts = data;
    },
    selectContact(contact) {
      alert(`Selected contact: ${contact.name}`);
    },
  },
};
