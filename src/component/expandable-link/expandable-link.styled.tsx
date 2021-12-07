import styled from "styled-components";

export const StyledExpandableBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: ${(props => props.theme.link.secondary.backgroundColor)};
    `

export const ProviderBox = styled.div`
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const DetailRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LinkBox = styled.div`
    flex: 1
`