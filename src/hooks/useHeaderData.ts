import { useContext } from 'react'
import { HeaderContext } from '../contexts'

const useHeaderData = () => useContext(HeaderContext)

export { useHeaderData }
