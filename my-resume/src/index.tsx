/*
 * @Author: your name
 * @Date: 2022-03-31 18:03:04
 * @LastEditTime: 2022-04-06 17:44:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-resume/src/index.tsx
 */
import { createRoot } from 'react-dom/client';
import './assets/css/index.css';
import { Main } from './Pages/index';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Main />);