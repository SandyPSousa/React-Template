import React from 'react';
import Header from './Header';
import ProductDetails from './ProductDetails';
import SellerInfo from './SellerInfo';
import Comments from './Comments';
import Questions from './Questions';
import RelatedProducts from './RelatedProducts';
import './styles.css';

export default function App() {
  const productData = {
    name: 'Smartphone Z',
    images: [
      'https://img.freepik.com/free-psd/female-hand-holding-modern-smartphone-with-blank-screen-isolated-white-background_1142-54065.jpg?t=st=1728065590~exp=1728069190~hmac=59baf6433325460c04bcd224012d427660b4047390c52dab282f715cbb3f5971&w=740',
      'https://img.freepik.com/free-psd/smartphone-mockup-white-marble-background-3d-render_1142-52927.jpg?t=st=1728065479~exp=1728069079~hmac=b61260ac02b6593b4eab4822c1f64b09f7e5823beb3f12814423a66e99ba5bf3&w=740',
      'https://img.freepik.com/free-psd/smartphone-mockup-isolated-white-background-3d-rendering_1142-60099.jpg?t=st=1728065552~exp=1728069152~hmac=30ba38c950dba003ef72ea1ef6d79e0a8b7e8b338d5720b9ad32583bb018a589&w=740'
    ],
    description: 'Um smartphone com excelente custo-benefício e recursos avançados.',
    price: 2000.00,
    rating: 4.5,
  };

  const sellerData = {
    name: 'TechStore',
    email: 'techstore@email.com',
    phone: '(11) 99999-9999',
    rating: 4.2,
  };

  const commentsData = [
    { user: 'Alice', date: '30/09/2024', message: 'Ótimo produto!', rating: 5 },
    { user: 'Bob', date: '29/04/2024', message: 'Bom custo-benefício.', rating: 4 },
  ];

  const questionsData = [
    { user: 'Carlos', date: '28/09/2024', question: 'Esse modelo tem garantia?', answer: 'Sim, 1 ano de garantia.' },
    { user: 'Danilo', date: '02/10/2024', question: 'Esse modelo e a prova de água?', answer: 'Sim, até 20m de profundidade.' }
  
  ];

  const relatedProducts = [
    { name: 'PC Vintage', image: 'https://img.freepik.com/free-photo/view-3d-retro-computer-with-cathode-ray-tube_23-2150714019.jpg?t=st=1728064991~exp=1728068591~hmac=5b02f6dec488e4235f23033fd739db7ccb186e91409942a6f5c26b4b84152c16&w=740', price: 3900.00 },
    { name: 'Notebook Ultron', image: 'https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150713937.jpg?t=st=1728064635~exp=1728068235~hmac=c87bcdefad8535fdb149b6c566c29ad41788f48765e80a4a1a053ed23c0cb2e2&w=740', price: 3500.00 },
  ];

  return (
    <div>
      <Header />
      <main>
        <ProductDetails data={productData} />
        <SellerInfo data={sellerData} />
        <Comments data={commentsData} />
        <Questions data={questionsData} />
        <RelatedProducts data={relatedProducts} />
      </main>
    </div>
  );
}
