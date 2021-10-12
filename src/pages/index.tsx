import React from 'react'
type Props = {
  title: string
}
const bla = 'var'

export default function Home({ title = 'React' }: Props) {
  return (
    <>
      <div>{title}</div>
      <div>{title}</div>
    </>
  )
}
