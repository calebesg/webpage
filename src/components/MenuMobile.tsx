import { useRef, useState } from 'react'
import { List } from '@phosphor-icons/react'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from '@chakra-ui/react'

import { useHeaderData } from '@/hooks'
import { NavOptions } from './NavOptions'

export function MenuMobile() {
  const { headerStatus } = useHeaderData()
  const [isOpen, setIsOpen] = useState(false)

  const buttonMenuRef = useRef(null)

  function handleVisibilitMenu() {
    setIsOpen((oldValue) => !oldValue)
  }

  return (
    <>
      <button
        ref={buttonMenuRef}
        onClick={handleVisibilitMenu}
        className={`${
          headerStatus === 'SCROLL' ? 'text-white' : 'text-zinc-800'
        } lg:hidden`}
      >
        <List className="text-4xl" />
      </button>

      <Drawer
        isOpen={isOpen}
        onClose={handleVisibilitMenu}
        finalFocusRef={buttonMenuRef}
        placement="left"
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton left={6} />

          <DrawerBody>
            <NavOptions
              text="dark"
              direction="col"
              callbackOnClickLink={handleVisibilitMenu}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
