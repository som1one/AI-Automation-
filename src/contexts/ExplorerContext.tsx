import { createContext, useContext } from 'react'
import type { FolderType } from '@/types/explorer'

interface ExplorerContextType {
  activeFolder: FolderType
  setActiveFolder: (folder: FolderType) => void
  isSidebarOpen: boolean
  setIsSidebarOpen: (open: boolean) => void
}

export const ExplorerContext = createContext<ExplorerContextType | undefined>(undefined)

export const useExplorer = () => {
  const context = useContext(ExplorerContext)
  if (!context) {
    throw new Error('useExplorer must be used within ExplorerContext.Provider')
  }
  return context
}
