import Dropdown from '@/components/Dropdown/Dropdown';
import Stats from '@/components/Home/Stats/index.vue';
import Instances from '@/components/Home/Instances/index.vue';
import LastMessages from '@/components/Home/LastMessages/index.vue';
import SendMessageShortcut from '@/components/Home/SendMessageShortcut/index.vue';
import {
  Container, Layout, WrapperContainers,
} from './styles';

export default {
  name: 'Home',
  components: {
    Stats,
    Instances,
    LastMessages,
    SendMessageShortcut,
    Layout,
    Container,
    Dropdown,
    WrapperContainers,
  },
};
