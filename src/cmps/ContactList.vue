<template>
  <section class="contact-list">
    <ul class="clean-list">
      <li
        @:click="navigateToContact(contact._id)"
        v-for="contact in contacts"
        :key="contact._id"
      >
        <ContactPreview :contact="contact" />
        <section class="contact-actions">
          <button
            class="clean-btn action-item"
            @click="onRemoveContact(contact._id)"
          >
            <v-icon name="md-deleteoutline" />
          </button>
          <RouterLink class="action-item" :to="`/contact/${contact._id}`">
            <v-icon name="la-info-circle-solid" />
          </RouterLink>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from '@/cmps/ContactPreview.vue'
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  components: {
    ContactPreview,
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit('remove', contactId)
    },
    navigateToContact(id) {
      this.$router.push('/contact/' + id)
    },
  },
}
</script>

<style lang="scss" scoped></style>
