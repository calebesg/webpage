import { useContext } from 'react'
import { HeaderContext } from './HeaderContext'

const useHeaderData = () => useContext(HeaderContext)

export { useHeaderData }
