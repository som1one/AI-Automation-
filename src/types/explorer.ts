export type FolderType = 'home' | 'services' | 'process' | 'cases' | 'contacts'

export interface Folder {
  id: FolderType
  name: string
  icon: string
  description?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  details: string
}

export interface ProcessStep {
  id: number
  title: string
  description: string
  icon: string
}

export interface Case {
  id: string
  title: string
  industry: string
  problem: string
  solution: string
  metrics: {
    before: string
    after: string
  }
  image?: string
}
