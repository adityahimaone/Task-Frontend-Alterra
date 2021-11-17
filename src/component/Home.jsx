import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import React, { useEffect, useState } from "react";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";

const GetGuestQuery = gql`
  query getGuest {
    passengers_pengunjung {
      jk
      nama
      umur
      id
    }
  }
`;

const GetGuestLazyQuery = gql`
  query getGuestLazy($id: Int) {
    passengers_pengunjung(where: { id: { _eq: $id } }) {
      id
      jk
      nama
    }
  }
`;

const DeleteGuestMutation = gql`
  mutation deleteGuest($id: Int!) {
    delete_passengers_pengunjung(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

const AddGuest = gql`
  mutation addGuest2($object: passengers_pengunjung_insert_input!) {
    insert_passengers_pengunjung_one(object: $object) {
      id
    }
  }
`;

const EditGuest = gql`
  mutation editGuest($id: Int!, $jk: String, $nama: String, $umur: Int) {
    update_passengers_pengunjung_by_pk(
      pk_columns: { id: $id }
      _set: { jk: $jk, nama: $nama, umur: $umur }
    ) {
      id
      jk
      nama
      umur
    }
  }
`;

export default function Home() {
  //Get Query
  const {
    data: DataGetPassenger,
    loading: loadingGet,
    error,
    refetch,
  } = useQuery(GetGuestQuery);

  //Get Lazy Query
  const [getLazy, { data: DataGetLazy, loading: loadingGetLazy }] =
    useLazyQuery(GetGuestLazyQuery);

  const [guestId, setguestId] = useState(0);
  const [guest, setGuest] = useState([]);

  const onGetData = () => {
    getLazy({ variables: { guestId } });
    setGuest(DataGetLazy?.passengers_pengunjung);
  };

  const onChangeID = (e) => {
    if (e.target) {
      setguestId(e.target.value);
    }
  };

  //Delete
  const [deleteGuest, { data: dataDelete, loading: loadingDelete }] =
    useMutation(DeleteGuestMutation, {
      refetchQueries: ["GetGuestQuery"],
    });

  const handleDelete = (id) => {
    deleteGuest({ variables: { id } });
  };

  //Add
  const [addGuest, { data: dataAdd, loading: loadingAdd }] = useMutation(
    AddGuest,
    {
      refetchQueries: ["GetGuestQuery"],
    }
  );

  const handleAdd = (newGuest) => {
    addGuest({
      variables: {
        object: {
          jk: newGuest.jenisKelamin,
          nama: newGuest.nama,
          umur: newGuest.umur,
        },
      },
    });
  };

  //Edit
  const [editGuest, { data: dataEdit, loading: loadingEdit }] = useMutation(
    EditGuest,
    {
      refetchQueries: ["GetGuestQuery"],
    }
  );

  const handleEdit = (id, newGuest) => {
    editGuest({
      variables: {
        id,
        jk: newGuest.jenisKelamin,
        nama: newGuest.nama,
        umur: newGuest.umur,
      },
    });
  };

  //Refetch Data Change
  useEffect(() => {
    if (dataAdd || dataDelete) {
      refetch();
    }
  }, [dataAdd, dataDelete]);

  //Loading
  if (loadingGet || loadingDelete || loadingAdd || loadingEdit)
    return <p>Loading...</p>;

  return (
    <div>
      <Header />
      {/* <div>
        <input type="text" value={guestId} onChange={onChangeID} />
        <button onClick={onGetData}>Get Data</button>
      </div> */}
      <ListPassenger
        data={DataGetPassenger}
        hapusPengunjung={handleDelete}
        editPengunjung={handleEdit}
      />
      <PassengerInput tambahPengunjung={handleAdd} />
    </div>
  );
}
