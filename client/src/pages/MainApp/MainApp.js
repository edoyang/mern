import React, { useState } from 'react';
import { Footer, Gap, Header, Navbar } from '../../components';
import AddProductForm from '../../components/molecules/AddProductForm';
import UpdateProductForm from '../../components/molecules/UpdateProductForm'; 
import DeleteProduct from '../../components/molecules/DeleteProduct'; // Import the DeleteProduct component
import './MainApp.scss';

const MainApp = () => {
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false); // State for delete mode

  return (
    <div>
      <Navbar />
      <Gap height={50} />
      <Header />

      <div className="button-group">
        <button className="button" onClick={() => { setAddFormVisible(!isAddFormVisible); setUpdateFormVisible(false); setIsDeleteMode(false); }}>
          {isAddFormVisible ? 'Hide Form' : 'Add Product'}
        </button>
        <button className="button" onClick={() => { setUpdateFormVisible(!isUpdateFormVisible); setAddFormVisible(false); setIsDeleteMode(false); }}>
          {isUpdateFormVisible ? 'Hide Update Form' : 'Update Product'}
        </button>
        <button className="button" onClick={() => { setIsDeleteMode(!isDeleteMode); setAddFormVisible(false); setUpdateFormVisible(false); }}>
          {isDeleteMode ? 'Hide Delete Mode' : 'Delete Data'}
        </button>
      </div>

      {isAddFormVisible && <AddProductForm />}
      {isUpdateFormVisible && <UpdateProductForm productId="some-product-id" />} {/* Adjust this as necessary */}
      {isDeleteMode && <DeleteProduct />}  {/* Render the DeleteProduct component when in delete mode */}

      <Footer />
    </div>
  );
}

export default MainApp;
