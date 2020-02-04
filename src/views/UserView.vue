<script>
  import VUserProfile from '@/components/VUserProfile'
  import VUserSearchForm from '@/components/VUserSearchForm'
  import userMixin from '@/mixins/userMixin'

  export default {
    mixins: [userMixin],
    name: 'UserView',
    components: {
      VUserSearchForm,
      VUserProfile,
    },
  }
</script>

<template>
  <div>
    <VUserSearchForm
      @submitted="mix_user_searchUser"
    />
    <VUserProfile :user="mix_user_user"/>
  </div>
</template>
