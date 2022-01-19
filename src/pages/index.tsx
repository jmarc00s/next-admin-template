import type { NextPage } from 'next';
import Layout from '../components/template/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Página inicial" subTitle="Bem Vindo!">
      <h3>Conteudo</h3>
    </Layout>
  );
};

export default Home;
