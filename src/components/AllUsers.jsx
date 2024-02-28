import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Input } from "antd";

const { Search } = Input;

function AllUsers() {
  const allUsers = useSelector((state) => state.createUsers.createUsers);
  console.log("All users line 6", allUsers);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = allUsers.filter((user) =>
    user.user_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: "Sr. #",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "user_name",
      key: "user_name",
      render: (text, record) => (
        <span className="user-name">{record.user_name}</span>
      ),
    },
    {
      title: "Phone No.",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text, record) => (
        <span className="user-email">{record.email}</span>
      ),
    },
  ];

  const dataSource = searchTerm
    ? filteredUsers.map((user, index) => ({ ...user, index: index + 1 }))
    : allUsers.map((curElem, index) => ({ ...curElem, index: index + 1 }));

  return (
    <>
      <div className="container all-users">
        <h2 className="pb-4 text-center">All Users</h2>

        <Search
          className="mb-2 w-25 ms-auto d-flex btn-outline-dark"
          placeholder="Search user"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          locale={{
            emptyText: (
              <h3>
                {searchTerm
                  ? "No users found with the given search"
                  : "No users have been found"}
              </h3>
            ),
          }}
        />
      </div>
    </>
  );
}

export default AllUsers;
