import React from 'react'


function Layout({children}: ILayout) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">{children}</div>
  )
}

export default Layout