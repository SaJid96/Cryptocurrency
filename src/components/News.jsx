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

  return 
  (
  <Row gutter={[24,24]}>
    {
      !simplified && (

        <Col span={24}>
        
        


        </Col>

      )
    }
    </Row>
  )
};

export default News;
