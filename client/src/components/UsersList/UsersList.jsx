import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../actions/userAction";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { useToasts } from "react-toast-notifications";
import "./UsersList.css";

function UsersList() {
  const getallusersstate = useSelector((state) => state.getAllUsersReducer);

  const { users, loading, error } = getallusersstate;

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <h2 className="usertitle">Users List</h2>

      <table className="tbadmin table table-bodered ">
        <thead>
          <tr>
            <th>Users ID</th>
            <th>Users Name</th>
            <th>Users E-mail</th>
            <th>Delete Users</th>
          </tr>
        </thead>

        <tbody>
          {loading && <Loader />}
          {error && <Error error="Something wrong!" />}
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td className="delete">
                    <i
                      class="far fa-trash-alt "
                      style={{ color: "red" }}
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                        addToast("User deleted succesfully ", {
                          appearance: "success",
                        });
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
