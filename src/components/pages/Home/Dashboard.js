import React, { useState, useEffect } from 'react';
import Table from '../../common/Table';
import { usersService } from '../../../services/modules/usersService';

const Dashboard = () => {
  const [response, setResponse] = useState([]);
  let dataBE = [
    {
      id: 1,
      name: "Gloria O'Hara",
      email: 'Gudrun.Murphy61@gmail.com',
      phone: '451-942-3474',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/knilob/128.jpg',
    },
    {
      id: 2,
      name: 'Era Koepp',
      email: 'Bernadette.Crona83@gmail.com',
      phone: '1-381-927-8462 x968',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/uxward/128.jpg',
    },
    {
      id: 3,
      name: 'Garret Hane',
      email: 'Jesus_Hoppe39@yahoo.com',
      phone: '940-003-8670',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/antongenkin/128.jpg',
    },
    {
      id: 4,
      name: 'Darren Walter',
      email: 'Lindsay90@yahoo.com',
      phone: '(881) 839-6895',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rangafangs/128.jpg',
    },
    {
      id: 5,
      name: 'Jovany Smith',
      email: 'Chris.Schmeler@gmail.com',
      phone: '1-155-984-5870',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/wiljanslofstra/128.jpg',
    },
    {
      id: 4,
      name: 'Darren Walter',
      email: 'Lindsay90@yahoo.com',
      phone: '(881) 839-6895',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rangafangs/128.jpg',
    },
    {
      id: 5,
      name: 'Jovany Smith',
      email: 'Chris.Schmeler@gmail.com',
      phone: '1-155-984-5870',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/wiljanslofstra/128.jpg',
    },
    {
      id: 4,
      name: 'Darren Walter',
      email: 'Lindsay90@yahoo.com',
      phone: '(881) 839-6895',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rangafangs/128.jpg',
    },
    {
      id: 5,
      name: 'Jovany Smith',
      email: 'Chris.Schmeler@gmail.com',
      phone: '1-155-984-5870',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/wiljanslofstra/128.jpg',
    },
    {
      id: 4,
      name: 'Darren Walter',
      email: 'Lindsay90@yahoo.com',
      phone: '(881) 839-6895',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rangafangs/128.jpg',
    },
    {
      id: 5,
      name: 'Jovany Smith',
      email: 'Chris.Schmeler@gmail.com',
      phone: '1-155-984-5870',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/wiljanslofstra/128.jpg',
    },
  ];
  useEffect(() => {
    usersService
      .getUser()
      .then((dt) => {
        setResponse(dt);
      })
      .catch((err) => console.error(err));
  }, []);

  const formatData = () => {
    const data = dataBE.map((dt) => {
      const avatar = <img src="https://s3.amazonaws.com/uifaces/faces/twitter/claudioguglieri/128.jpg" alt="avatar" />;
      return {
        avatar: avatar,
        username: dt.name,
        email: dt.email,
        phone: dt.phone,
      };
    });
    return data;
  };

  return (
    <div className="w-100">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Users management</h4>
            <Table dataSource={formatData()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
