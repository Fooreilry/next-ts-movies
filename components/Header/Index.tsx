import { FC } from 'react';
import Image from 'next/image';

const Header:FC = () => {
  return (
    <header>
    <Image src='/image/logo.svg' width={40} height={40} alt='logo'/>
    </header>
  )
}
export default Header