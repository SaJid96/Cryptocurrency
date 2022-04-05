import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import {useGetCryptosQuery} from '../services/CryptoApi'
import {useGetCryptoNewsQuery} from '../services/CryptoNewsApi'

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {

   const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
   const {data}=useGetCryptosQuery(10);
   const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory,count:simplified ? 6 :12})

   if(!cryptoNews?.value) return 'Loading...'
  return (
  <Row gutter={[24, 24]}>
    {!simplified && (
      <Col span={24}>
        <Select
          showSearch
          className="select-news"
          placeholder="select a Crypto"
          optionFilterProp="children"
          onChange={(value) => setNewsCategory(value)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="Cryptocurrency">Cryptocurrency</Option>

          {data?.data?.coins?.map((currency) => (
            <Option value={currency.name}>{currency.name}</Option>
          ))}
        </Select>
      </Col>
    )}
   
  </Row>
)}

export default News;
