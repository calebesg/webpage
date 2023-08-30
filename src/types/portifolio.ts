import { ImageType } from './image'

export type Card = {
  title: string
  text: string
  image: ImageType
}

export type PortifolioData = {
  title: string
  cards: Card[]
}
