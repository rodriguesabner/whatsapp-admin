import Dropdown from '@/components/Dropdown/Dropdown';
import {
  Container, Layout,
} from './styles';
import Stats from '../../../components/Home/Stats/index.vue';
import Instances from '../../../components/Home/Instances/index.vue';
import MobilePair from '../../../components/Home/MobilePair/index.vue';

export default {
  name: 'Home',
  components: {
    Layout,
    Container,
    Dropdown,
    Stats,
    Instances,
    MobilePair,
  },
};
