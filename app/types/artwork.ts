export interface Artwork {
  id: string
  title: string
  category: ArtworkCategory
  medium: string
  description: string
  src: string
  aspect: 'tall' | 'wide' | 'square'
  year: number
  featured?: boolean
}

export type ArtworkCategory = 'portraits' | 'landscapes' | 'abstract' | 'surreal' | 'anime' | 'sci-fi'

export interface CategoryFilter {
  id: string
  label: string
}
