import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../services/UserServices";
import ReactPaginate from "react-paginate";
import ModeAddNew from "./ModalAddNew";
import ModeEditUser from "./ModalEditUser";

const TableUsers = (props) => {
  const [listUsers, setListUser] = useState([]);

  const [totalUser, setTotalUser] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const [isShowModalEditNew, setIsEdiModalEditUer] = useState(false);
  const [dataUserEdit, setUserEdit] = useState({});

  const handleClose = () => {
    setIsShowModalAddNew(false);
    setIsEdiModalEditUer(false);
  };
  const handleUser = (user) => {
    setListUser([user, ...listUsers]);
  };

  useEffect(() => {
    getUsers(1);
  }, []);

  const getUsers = async (page) => {
    let res = await fetchAllUser(page);
    if (res && res.data) {
      console.log("tttttttt", res);
      setTotalUser(res.total);
      setTotalPage(res.total_pages);
      setListUser(res.data);
    }
  };
  const handlePageClick = (event) => {
    console.log("chhhhh", event);
    getUsers(+event.selected + 1);
  };

  const handleEditUser = (user) => {
    console.log("user", user);
    setUserEdit(user);
    setIsEdiModalEditUer(true);
  };

  console.log("rcheck: ", listUsers);
  return (
    <>
      <div className="my-3 add-new">
        <span>
          <b>List user:</b>
        </span>
        <button
          className="btn btn-success"
          onClick={() => setIsShowModalAddNew(true)}
        >
          Add new user
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Email</th>
            <th>Firt Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleEditUser(item)}
                    >
                      Edit
                    </button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
      <ModeAddNew
        show={isShowModalAddNew}
        handleClose={handleClose}
        handleUser={handleUser}
      />
      <ModeEditUser
        show={isShowModalEditNew}
        handleClose={handleClose}
        dataUserEdit={dataUserEdit}
      />
    </>
  );
};

export default TableUsers;
