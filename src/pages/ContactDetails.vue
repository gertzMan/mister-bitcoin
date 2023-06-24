<template>
  <article v-if="contact" class="contact-details">
    <img
      class="contact-avatar"
      :src="`https://robohash.org/${contact._id}.png?set=set5`"
    />
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
    <RouterLink class="prev-btn" to="/contact">Back</RouterLink>
  </article>
</template>

<script>
import { contactService } from '../services/contact.service.js'
export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    const contactId = this.$route.params.id
    this.contact = await contactService.getContactById(contactId)
  },
}
</script>

<style lang="scss" scoped></style>
