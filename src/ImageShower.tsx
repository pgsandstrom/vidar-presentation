import React from 'react'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'

const StyledDiv = styled.div`
  .header {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }

  .body {
    display: flex;
    justify-content: center;

    img {
      width: 50%;
    }
  }
`

const pad = (n: number) => (n > 9 ? `${n}` : `0${n}`)

export type Props = {} & RouteComponentProps<{ page?: string }>

export default (props: Props) => {
  const page = props.match.params.page !== undefined ? Number(props.match.params.page) : 1

  const imageUrl = `/img/Komplett TIFF - redigerad_Sida_${pad(page)}.tiff`

  const gotPrevPage = page > 1
  const gotNextPage = page < 88

  return (
    <StyledDiv>
      <div className="header">
        <div style={{ width: '200px' }}>
          <a href="/">Huvudsida</a>
        </div>
        <div style={{ width: '200px' }}>
          {gotPrevPage && (
            <a href={`/images/${page - 1}`} style={{ opacity: gotPrevPage ? 1 : 0 }}>
              Tidigare sida
            </a>
          )}
        </div>
        <div style={{ width: '200px' }}>
          {gotNextPage && <a href={`/images/${page + 1}`}>Nästa sida</a>}
        </div>
      </div>
      <div className="body">
        <img src={imageUrl} alt="boksida" />
      </div>
    </StyledDiv>
  )
}
