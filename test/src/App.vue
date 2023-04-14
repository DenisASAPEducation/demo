<template>
  <div id="app">
    <HeaderBlock/>
    <MainBlock class="main-block" id="about"/>
    <SkillsBlock class="skills-block" id="skills"/>
    <SocialNetworksBlock class="social-networks-block" id="social"/>
    <LastPostsBlock class="last-posts-block"/>
    <ContactUsBlock class="contact-us-block" id="contacts"/>
    <FooterBlock/>
  </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue';
import MainBlock from '@/components/MainBlock.vue';
import SkillsBlock from '@/components/SkillsBlock.vue';
import SocialNetworksBlock from '@/components/SocialNetworksBlock.vue';
import LastPostsBlock from '@/components/LastPostsBlock.vue';
import ContactUsBlock from '@/components/ContactUsBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  name: 'App',
  components: {
    HeaderBlock,
    MainBlock,
    SkillsBlock,
    SocialNetworksBlock,
    LastPostsBlock,
    ContactUsBlock,
    FooterBlock,
  }
}
</script>

<style>
    @import "@/css/global.css";
    @import "~@/assets/fonts/_fonts.css";
</style>

<style scoped>
  .main-block {
    margin-bottom: 100px;
  }
  .skills-block {
    margin-bottom: 200px;
  }
  .social-networks-block {
    margin-bottom: 120px;
  }
  .last-posts-block {
    margin-bottom: 200px;
  }
  .contact-us-block {
    margin-bottom: 100px;
  }

  @media screen and (max-width: 980px) {
    .main-block {
      margin-bottom: 176px;
    }
    .skills-block {
      margin-bottom: 150px;
    }
    .last-posts-block {
      margin-bottom: 50px;
    }
  }
</style>