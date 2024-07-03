import { useMemo, useState } from 'react';
import './App.less';
import { Button, Layout, Typography } from 'antd';

const { Header, Content, Sider, Footer } = Layout;
const { Title } = Typography;

function App() {
  const [create_dot_status, set_create_dot_status] = useState<boolean>(false);
  const dot_ele = useMemo(
    () => (
      <>
        <Title level={2}>DOT</Title>
        <Button className='delete-dot-btn' onClick={() => set_create_dot_status(false)} danger>
          DELETE
        </Button>
      </>
    ),
    []
  );
  return (
    <Layout id='dot'>
      <Header id='header'>
        <Title>DOT</Title>
      </Header>
      {create_dot_status ? (
        <>
          <Layout className='content '>
            <Content id='content-main'>{dot_ele}</Content>
            <Sider id='sider' width={'25%'}>
              Sider
            </Sider>
          </Layout>
        </>
      ) : (
        <>
          <Layout className='content content-without-dot'>
            <Button className='create-dot-btn' onClick={() => set_create_dot_status(true)}>
              CREATE
            </Button>
          </Layout>
        </>
      )}
      <Footer id='footer'>Footer</Footer>
    </Layout>
  );
}

export default App;
