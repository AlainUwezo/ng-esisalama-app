export interface Address{
  address: {
    icon: string,
    value: string
  },
  contacts: Array<Contact>;
}

interface Contact{
  icon: string,
  value: string
}
