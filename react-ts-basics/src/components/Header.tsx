import React, { PropsWithChildren } from 'react'

type ImageProps = {
    src: string
    alt: string
};

type HeaderProps = {
    image: ImageProps
};

type HeaderPropsWithChildren = PropsWithChildren<HeaderProps>;

function Header({image, children}: HeaderPropsWithChildren) {
  return (
    <header>
        <img src={image.src} alt={image.alt} />
        {children}
    </header>
  )
}

export default Header