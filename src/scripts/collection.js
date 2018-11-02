
 const contactData = {

    getContacts: () => {
      return fetch("http://localhost:8088/contacts")
        .then(contacts => contacts.json())
        .then(parsedContacts => {
          console.table(parsedContacts)
})
}
}

export default contactData