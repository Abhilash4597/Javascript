import React from 'react';
import Form from './Conditional-rendering/Form';
import './Form.css'
// import './keeper.css';
// import Header from './Keeper-App/Header';
// import Footer from './Keeper-App/Footer';
// import Note from './Keeper-App/Note';
// import data from './Keeper-App/Data';

function App() {
  return (
    <>
      {/* <Header />
      <Note data={ data } />
      <Footer /> */}
      <div className="container">
        <Form />
      </div>
    </>
  );
}

export default App;
