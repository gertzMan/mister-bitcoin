<template>
  <article class="contact-preview">
    <div class="name">
      <v-icon fill="hsla(160, 100%, 37%, 1)" name="ri-contacts-line" />
      <p>{{ contact?.name }}</p>
    </div>
    <div class="email">
      <v-icon fill="hsla(160, 100%, 37%, 1)" name="md-email-outlined" />
      <p>{{ contact?.email }}</p>
    </div>
    <div class="phone">
      <v-icon fill="hsla(160, 100%, 37%, 1)" name="bi-telephone" />
      <p>{{ contact?.phone }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    contact: { type: Object, required: true },
  },
}
</script>

<style lang="scss" scoped></style>
