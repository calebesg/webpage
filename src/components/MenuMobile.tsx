import { useRef, useState } from 'react'
import { List } from '@phosphor-icons/react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton } from '@chakra-ui/react'

import { NavOptions } from './NavOptions';

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonMenuRef = useRef(null)

  function handleVisibilitMenu() {
    setIsOpen(oldValue => !oldValue)
  }

  return (
    <>
      <button 
        ref={buttonMenuRef}
        onClick={ handleVisibilitMenu }
        className='text-white lg:hidden'
      >
        <List size={32} />
      </button>

      <Drawer
        isOpen={isOpen}
        onClose={ handleVisibilitMenu }
        finalFocusRef={buttonMenuRef}
        placement='left'
      >
        <DrawerOverlay />
        
        <DrawerContent>
          <DrawerCloseButton left={6} />

          <DrawerBody>
            <NavOptions text='dark' direction='col' />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}