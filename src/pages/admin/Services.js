import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import Sidebar from "../../components/admin/Sidebar";
// import { useTable, usePagination } from "react-table";
import { db } from "../../firebase";
import { CgSpinner } from "react-icons/cg";
import { getDocs, collection, query, orderBy } from "firebase/firestore";

function Services() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let list = [];
      try {
        const collectionRef = collection(db, "services");
        const q = query(collectionRef, orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
          setData(list);
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div>
        <AdminNavbar />
        <div className="mt-20">
          {loading ? (
            <CgSpinner
              size={50}
              className="animate-spin ml-[550px] mt-[400px]"
            />
          ) : (
            <table className="table-auto border-collapse border border-slate-400 rounded w-full container mx-auto text-sm">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="border border-slate-300 font-normal p-3">
                    Id
                  </th>
                  <th className="border border-slate-300 font-normal p-3">
                    Name
                  </th>
                  <th className="border border-slate-300 font-normal p-3">
                    Phone
                  </th>
                  <th className="border border-slate-300 font-normal p-3">
                    Email
                  </th>
                  {/* <th className="border border-slate-300 font-normal p-3">
                    Date
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={item.id}>
                    <td className="border border-slate-300 p-3">{index + 1}</td>
                    <td className="border border-slate-300 p-3">{item.name}</td>
                    <td className="border border-slate-300 p-3">
                      {item.phone}
                    </td>
                    <td className="border border-slate-300 p-3">
                      {item.email}
                    </td>
                    {/* <td className="border border-slate-300 p-3">
                      {new Date(item.timestamp)}
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
