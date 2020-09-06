import React, { useContext, useState, useEffect, useRef } from 'react';
import { Card, Table, Input, Button, Popconfirm, Form } from 'antd';
import { queryAllScenery } from '../../api/scenery';
import './Scenery.scss';



function SceneryTable() {
  const col = [
    {
      title: '名称',
      dataIndex: 'name',
      className: 'link'
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {}
    },
  ];
  const [columns, setColumns] = useState(col);
  const [list, setList] = useState([]);

  useEffect(() => {
    query();
  }, []);

  useEffect(() => {


  });

  const query = function() {
    queryAllScenery()
      .then(res => {
        console.log(res);
        const { data } = res;
        const arr = data.map(item => {
          return {
            key: item.code,
            name: item.name,
            address: item.address,
          };
        });
        // 更新
        setList(arr);
      })
      .catch(err => {
        console.log(err);
      });
  }


  // setColumns(list.map(col => {
  //   return {
  //     ...col,
  //     onCell: record => ({
  //       record,
  //       editable: col.editable,
  //       dataIndex: col.dataIndex,
  //       title: col.title,
  //       handleSave: this.handleSave,
  //     }),
  //   };
  // }));

  return (
    <Card>
      <Input.Search
        placeholder="名称搜索"
        onSearch={value => console.log(value)}
        enterButton
        style={{ width: 200, marginBottom: 30 }}
      />
      <Table
        bordered
        dataSource={list}
        columns={columns}
        loading={false}
      >
      </Table>
    </Card>
  );
}

export default SceneryTable;