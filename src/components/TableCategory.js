import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { listCategories } from "../services/CategoryService";
import ModeAddCate from "./ModanAddCate";
import ModeEditCate from "./ModanEditCate";
import ModalConfirm from "./ModalConfirm";

const TableCategory = (props) => {
  const [listCate, setListCate] = useState([]);
  const [isShowModalAddCategory, setIsShowModalAddCategory] = useState(false);
  const [isShowModalEditCategory, setIsShowModalEditCategory] = useState(false);
  const [dataEditCate, setDataEditCate] = useState({});
  const [dataDeleteCate, setDataDeleteCate] = useState({});
  const [isShowModalDeleteCategory, setIsShowModalDeleteCategory] =
    useState(false);

  const getCate = async () => {
    let res = await listCategories();
    console.log("okok", res);
    if (res && res.object) {
      console.log("okok", res);
      setListCate(res.object);
    }
  };
  useEffect(() => {
    getCate();
  }, []);
  const handleEditCate = (cate) => {
    setIsShowModalEditCategory(true);
    console.log("catecate", cate);
    setDataEditCate(cate);
  };
  const handleClose = () => {
    setIsShowModalAddCategory(false);
    setIsShowModalEditCategory(false);
    setIsShowModalDeleteCategory(false);
  };
  const handleDeleteCate = (cate) => {
    setIsShowModalDeleteCategory(true);
    setDataDeleteCate(cate);
  };

  return (
    <>
      <div className="my-3 add-new">
        <span>
          <b>List Category</b>
        </span>
        <button
          className="btn btn-success"
          onClick={() => setIsShowModalAddCategory(true)}
        >
          Add new category
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Translate</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {listCate &&
            listCate.length > 0 &&
            listCate.map((item, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.symbol}</td>
                  <td>{item.translate}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleEditCate(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteCate(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ModeAddCate show={isShowModalAddCategory} handleClose={handleClose} />
      <ModeEditCate
        show={isShowModalEditCategory}
        handleClose={handleClose}
        dataEditCate={dataEditCate}
      />
      <ModalConfirm
        show={isShowModalDeleteCategory}
        handleClose={handleClose}
        dataDeleteCate={dataDeleteCate}
        getCate={getCate}
      />
    </>
  );
};

export default TableCategory;
