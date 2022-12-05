import { HeaderContainer, HeaderImg } from "./styles"

import logo from '../../assets/logo.svg'
import effectRight from '../../assets/effectRight.svg'
import effectLeft from '../../assets/effectLeft.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={effectLeft} alt="" width={340} />
      <HeaderImg>
        <img src={logo} alt="" width={148} />
      </HeaderImg>
      <img src={effectRight} alt="" width={340} />
    </HeaderContainer>
  )
}