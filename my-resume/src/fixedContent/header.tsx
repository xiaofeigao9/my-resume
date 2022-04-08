/*
 * @Author: your name
 * @Date: 2022-04-06 18:40:05
 * @LastEditTime: 2022-04-08 10:22:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-resume/src/fixedContent/header.tsx
 */
import React from "react";
import { HomeOutlined, IdcardOutlined, BankOutlined, StopOutlined } from '@ant-design/icons';

export interface menuObj {
    name: string
    text: string
    icon: React.ReactNode
    disable?: boolean
}

interface iHeader {
    menuList: menuObj[]
}

export const headerData:iHeader = {
    menuList: [
        {
            name: 'home',
            text: '首页',
            icon: <HomeOutlined />
        },
        {
            name: 'myresume',
            text: '我的简历',
            icon: <IdcardOutlined />
        },
        {
            name: 'lambcabin',
            text: '羊羔小屋',
            icon: <BankOutlined />
        },
        {
            name: 'undetermined',
            text: '待定',
            disable: true,
            icon: <StopOutlined />
        }
    ]
}