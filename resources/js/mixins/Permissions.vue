<script>
  export default {
    methods: {
      $can(permissionName) {
        return this.$store.state.permisos.indexOf(permissionName) !== -1;
      },
    },
  };
</script>