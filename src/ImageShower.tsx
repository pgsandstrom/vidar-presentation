import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
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

const getImageUrl = (page: number) => {
  // return `/img/tiff/Komplett TIFF - redigerad_Sida_${pad(page)}.tiff`
  return `/img/jpg/Komplett - redigerad_Sida_${pad(page)}.jpg`
}

const pad = (n: number) => (n > 9 ? `${n}` : `0${n}`)

export type Props = {} & RouteComponentProps<{ page?: string }>

export default (props: Props) => {
  const page = props.match.params.page !== undefined ? Number(props.match.params.page) : 1

  const gotPrevPage = page > 1
  const gotNextPage = page < 88

  return (
    <StyledDiv>
      <div className="header">
        <div style={{ width: '200px' }}>
          {gotPrevPage && (
            <Link to={`/images/${page - 1}`} style={{ opacity: gotPrevPage ? 1 : 0 }}>
              Tidigare sida
            </Link>
          )}
        </div>
        <div style={{ width: '200px' }}>
          {gotNextPage && <Link to={`/images/${page + 1}`}>Nästa sida</Link>}
        </div>
      </div>
      <div className="body">
        <img src={getImageUrl(page)} alt="boksida" />
      </div>
    </StyledDiv>
  )
}
