import { Layout } from '@douyinfe/semi-ui';
import Header from 'layout/Header';
import Content from 'layout/Content';
import Footer from 'layout/Footer';

const App = () => {
  return (
    <Layout style={{ border: '1px solid var(--semi-color-border)', backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};

export default App;
