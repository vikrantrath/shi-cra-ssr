import React from 'react';
import Layout from '../components/Base/Layout';
import Home from '../components/Home/Home'

import '../styles/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default function index() {
    return (
        <Layout >
            <Home />
        </Layout>
    )
}