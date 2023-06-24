<template>
  <div class="contact-index main-layout">
    <h1>Contacts</h1>
    <ContactFilter @filter="onSetFilterBy" />
    <ContactList
      @remove="removeContact"
      v-if="contacts"
      :contacts="filteredContacts"
    />
  </div>
</template>

<script>
import { contactService } from '../services/contact.service.js'
import ContactList from '../cmps/ContactList.vue'
import ContactFilter from '../cmps/ContactFilter.vue'

export default {
  data() {
    return {
      contacts: null,
      filterBy: {},
    }
  },
  async created() {
    this.contacts = await contactService.getContacts()
  },
  components: { ContactList, ContactFilter },

  methods: {
    async removeContact(contactId) {
      const newContactsArray = await contactService.deleteContact(contactId)
      this.contacts = [...newContactsArray]
    },
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy
    },
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, 'i')
      return this.contacts.filter(contact => regex.test(contact.name))
    },
  },
}
</script>

<style lang="scss" scoped></style>
