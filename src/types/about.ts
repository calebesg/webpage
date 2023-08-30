export type InfoData = {
  title: string
  text: string
}

export type AboutData = {
  title: string
  info: {
    objective: InfoData
    public: InfoData
    target: InfoData
  }
  contact: {
    title: string
    text: string
    whatsapp: number
    email: string
  }
  social: {
    title: string
    text: string
    url: string
  }
}
