import styled from 'styled-components'
import border from 'components/styled/border'

const UserBindContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
`


const BorderDiv = border({
  width: '1px',
  color: '#fff',
  radius: 5,
  comp: styled.div``
})

export {
  UserBindContainer,
  BorderDiv
}