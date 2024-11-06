'use client';
import AdminFooter from '@/components/layout/admin.footer';
import AdminHeader from '@/components/layout/admin.header';
import AdminSidebar from '@/components/layout/admin.sidebar';
import { Layout, Menu, theme } from 'antd';
import React from 'react';

const DashboardPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  const { Content } = Layout;

    return (
      <Layout>
        <AdminSidebar />
      <Layout>
        <AdminHeader />
      <Content style={{ margin: '24px 16px 0' }}>
      <div
      style={{
      padding: 24,
      minHeight: 360,
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
      }}
      >
      content
      </div>
      </Content>
      <AdminFooter />
      </Layout>
      </Layout>
    );
  };
  
  export default DashboardPage;
