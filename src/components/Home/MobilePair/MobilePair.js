import QRCodeVue from 'qrcode.vue';
import { Container, Layout } from './styles';

export default {
  name: 'MobilePair',
  data() {
    return {
      value: 'https://google.com',
      size: 200,
    };
  },
  components: {
    Layout,
    Container,
    'qrcode-vue': QRCodeVue,
  },
  mounted() {},
  methods: {},
};
