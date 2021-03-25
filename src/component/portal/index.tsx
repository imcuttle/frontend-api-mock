import React, { useReducer } from 'react'
import { Button, Dropdown, Menu, Input, Modal, Drawer, Typography, ConfigProvider, notification } from 'antd'
import p from 'prefix-classname'
import zhCN from 'antd/es/locale/zh_CN'

const cn = p()
const c = p('fam')

import './style.sass'

const Portal: React.FC<{}> = ({}) => {
  return (
    <ConfigProvider locale={zhCN}>
      <h1>?</h1>
    </ConfigProvider>
  )
}

export default Portal
