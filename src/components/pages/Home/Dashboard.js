import React, { useState, useEffect } from 'react';
import { Table, Card } from '../../common';
import { usersService } from '../../../services/modules/usersService';

const Dashboard = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    usersService
      .getUser()
      .then((dt) => {
        setResponse(dt);
      })
      .catch((err) => console.error(err));
  }, []);

  const formatData = () => {
    if (!response || !response.length) return [];
    const data = response.map((dt) => {
      const avatar = (
        <img src={'https://tutaylamhet.r.worldssl.net/static/web_new/css/images/no-avatar.jpg'} alt="avatar" />
      );
      return {
        avatar: avatar,
        username: dt.username,
        email: dt.email,
        country: dt.country,
      };
    });
    return data;
  };

  return (
    <div className="w-100">
      <div className="col-lg-12 grid-margin stretch-card">
        <Card title="Users management">
          {response && response.length ? (
            <Table dataSource={formatData()} />
          ) : (
            <p className="text-center">No results behaviour</p>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
