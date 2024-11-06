'use client';
import { Layout } from 'antd';

const AdminFooter = () => {
  const { Footer } = Layout;
    return (
      <>

        <Footer style={{ textAlign: 'center' }}>
        ThanhLS ©{new Date().getFullYear()} Created by ThanhLS
        </Footer>
      </>
    );
  }
  
  export default AdminFooter;