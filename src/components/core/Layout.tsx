// 布局组件
import React, { FC } from "react"

interface Props {
  children:React.ReactNode // 是一个React元素
}

const Layout: FC<Props> = ({ children }) => {
  return <div>Layout {children}</div>
}

export default Layout
