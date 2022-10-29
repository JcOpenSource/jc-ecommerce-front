// 路由组件
import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"

import Home from "./components/core/Home"
import Shop from "./components/core/Shop"

/**
 * exact 精确匹配
*/
const AppRoutes = () => {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </HashRouter>
}

export default AppRoutes
