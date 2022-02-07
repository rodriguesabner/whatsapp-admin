import {
  Container, Layout, WrapperContainers, LeftContainer, RightContainer,
} from './styles';
import Stats from '../../components/Home/Stats/index.vue';
import Instances from '../../components/Home/Instances/index.vue';

export default {
  name: 'Home',
  components: {
    Layout,
    Container,
    WrapperContainers,
    LeftContainer,
    RightContainer,
    Stats,
    Instances,
  },
};
