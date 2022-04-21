import React from 'react'
import {Link} from 'react-router-dom'
import {HeaderContainer,HeaderContender} from './styles'

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContender>
        <nav>
          <Link to="/">Repositories</Link>
          <Link to="/repositories-liked">Repositories liked</Link>
        </nav>
      </HeaderContender>
    </HeaderContainer>
  )
}