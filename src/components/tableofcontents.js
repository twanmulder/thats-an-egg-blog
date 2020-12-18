import React, { Fragment, useEffect, useState } from "react"
import styled from "styled-components"

const Toc = styled.aside`
  position: sticky;
  padding-left: 50px;
  top: 90px;
  margin-top: 60px;
  max-height: 70vh;
  width: 350px;
  display: none;

  h2 {
    font-size: 16px;
    margin: 0 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  a {
    display: inline-block;
    font-size: 15px;
    box-shadow: none;
    margin: 10px 0 0 0;
    opacity: 0.8;

    &.active {
      color: var(--linkTitleHover);
    }

    &:hover {
      opacity: 1;
    }
  }

  @media (min-width: 1025px) {
    display: block;
  }
`
const InnerScroll = styled.nav`
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      acc.push(item.url.slice(1))
    }
    if (item.items) {
      acc.push(...getIds(item.items))
    }
    return acc
  }, [])
}

function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(``)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )
    itemIds.forEach(id => {
      observer.observe(document.getElementById(id))
    })
    return () => {
      itemIds.forEach(id => {
        observer.unobserve(document.getElementById(id))
      })
    }
  }, [itemIds])
  return activeId
}

function renderItems(items, activeId, shouldIndent) {
  return (
    <Fragment>
      {items.map(item => {
        return (
          <Fragment>
            <a key={item.url} href={item.url} className={activeId === item?.url?.slice(1) ? "active" : ""} style={shouldIndent ? "padding-left: 12px; margin-top: 5px; font-size: 14px;" : ""}>
              {item.title}
            </a>
            {item.items && renderItems(item.items, activeId, true)}
          </Fragment>
        )
      })}
    </Fragment>
  )
}

export default function TableOfContents(props) {
  const table = props.table["items"]
  console.log(table)
  const idList = getIds(table)
  const activeId = useActiveId(idList)

  return (
    <Toc>
      <InnerScroll>
        <h2>Table of contents</h2>
        {renderItems(table, activeId, false)}
      </InnerScroll>
    </Toc>
  )
}
