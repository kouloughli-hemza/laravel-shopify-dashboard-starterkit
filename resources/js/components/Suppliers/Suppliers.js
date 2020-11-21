import React, { useEffect, useState } from 'react';
import { Page } from '@shopify/polaris';
import List from './List';
import LoadingList from '../UI/LoadingList';

const Suppliers = () => {
  const [isLoading, setLoading] = useState(false);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://1575a6ff265c.ngrok.io/api/supplier')
      .then((res) => {
        setSuppliers(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const content = isLoading ? <LoadingList /> : <List suppliers={suppliers} />;
  return <Page title="Suppliers List">{content}</Page>;
};
export default Suppliers;
