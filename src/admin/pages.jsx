import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./editupdate.css";

function UserPage() {
  const [data_login, setDataLogin] = useState([]);

  const GetDataLogin = async () => {
    const getData = await axios.get("http://localhost:8080/users/");
    setDataLogin(getData.data.data);
    console.log(getData);
  };

  useEffect(() => {
    GetDataLogin();
  }, []);

  const deleteusers = async (id) => {
    // Menampilkan konfirmasi sebelum menghapus
    const shouldDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus produk ini?"
    );

    if (shouldDelete) {
      try {
        await axios.delete(`http://localhost:8080/delete-users/${id}`);
        GetDataLogin();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <div className="body-flex admin">
      <div className="body-flex admin">
        <div className="body-flex admin">
          <h1 className="py-1">Data User</h1>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Tabel User</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Tabel ini menampilkan seluruh data user yang masih aktif
              </p>
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Password</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data_login.map((item, index) => {
                    return (
                      <CTableRow key={index}>
                        <CTableDataCell>{item.username}</CTableDataCell>
                        <CTableDataCell>{item.password}</CTableDataCell>
                        <CTableDataCell>
                          <Link
                            className="custom-button1"
                            to={`/update/${item.id}`}
                          >
                            Edit
                          </Link>
                          <CButton
                            onClick={() => deleteusers(item.id)}
                            className="custom-button"
                          >
                            Delete
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    );
                  })}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  );
}
export default UserPage;
