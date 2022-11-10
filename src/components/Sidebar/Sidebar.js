import {
  Avatar, Layout, ProfileInfo, WrapperMenu,
} from './styles';

export default {
  name: 'Sidebar',
  components: {
    Layout,
    ProfileInfo,
    Avatar,
    WrapperMenu,
  },
  created() {
  },
  methods: {
    changeActiveButton() {
      this.$store.commit('changeActiveButton');
    },
  },
};
