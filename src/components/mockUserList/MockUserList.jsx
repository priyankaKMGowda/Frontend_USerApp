import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/action";
import useFetch from "../customHook/useFetch";

export default function MockUserList() {
  const dispatch = useDispatch();
  const usersData = useSelector(state => {
    return state?.postReducer?.users?.mockUsers;
  });

  const { data: fetchedUsers, loading: loadingUsers } = useFetch(
    "http://localhost:5000/api/users"
  );

  useEffect(() => {
    dispatch(fetchUsers(fetchedUsers));
  }, [dispatch, fetchedUsers]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ background: "#efefef" }}>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Name
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Email
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Age
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              City
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loadingUsers ? (
            <>
              <p>Loading Users.....</p>
            </>
          ) : (
            <>
              {usersData && usersData.length > 0 ? (
                <>
                  {usersData?.map(user => (
                    <TableRow
                      key={user.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {user.name}
                      </TableCell>
                      <TableCell align="center">{user.email}</TableCell>
                      <TableCell align="center">{user.age}</TableCell>
                      <TableCell align="center">{user.city}</TableCell>
                    </TableRow>
                  ))}
                </>
              ) : (
                <>
                  <p>No User data available.</p>
                </>
              )}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
