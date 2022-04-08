import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Home } from './home/Home';
import { MyFooter } from '../Components/layout/Footer';
import { MyHeader } from '../Components/layout/Header';
const { Header, Footer, Content } = Layout;

export const Main = () => {
    return (
        <Layout>
            <Header>
                <MyHeader />
            </Header>
            <Content>
                <BrowserRouter>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </Content>
            <Footer>
                <MyFooter />
            </Footer>
        </Layout>
    );
};
