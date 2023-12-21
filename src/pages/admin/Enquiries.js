import React, { useEffect, useState } from 'react';
// import { useMemo } from "react";
import AdminNavbar from '../../components/admin/AdminNavbar';
import Sidebar from '../../components/admin/Sidebar';
import { db } from '../../firebase';
import { CgSpinner } from 'react-icons/cg';
import { getDocs, collection, query, orderBy } from 'firebase/firestore';
import ReactPaginate from 'react-paginate';

function Enquiries() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 10;
  const pageVisited = pageNumber * dataPerPage;
  const displayData = data
    ?.slice(pageVisited, pageVisited + dataPerPage)
    .slice(0, 10)
    .map((item, i) => (
      <tr key={item.id}>
        {/* <td className="border border-slate-300 p-3">
        {i + 1}
      </td> */}
        <td className='border border-slate-300 p-3'>{item.name}</td>
        <td className='border border-slate-300 p-3'>{item.phone}</td>
        <td className='border border-slate-300 p-3'>{item.email}</td>
        <td className='border border-slate-300 p-3'>{item.model}</td>
        <td className='border border-slate-300 p-3'>{item.outlet}</td>
        <td className='border border-slate-300 p-3'>{item.pickup}</td>
        <td className='border border-slate-300 p-3'>{item.comments}</td>
        <th className='border border-slate-300 font-normal p-3'>
          {item.timestamp}
        </th>
      </tr>
    ));

  const pageCount = Math.ceil(data?.length / dataPerPage);

  const handleChange = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let list = [];
      try {
        const collectionRef = collection(db, 'popup');
        const q = query(collectionRef, orderBy('timestamp', 'desc'));
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
    <div className='flex flex-row h-screen'>
      <Sidebar />
      <div className='flex-auto bg-gray-100'>
        <AdminNavbar />
        <div className='m-5'>
          {loading ? (
            <CgSpinner size={50} className='animate-spin' />
          ) : (
            <div className='bg-white rounded p-8 shadow-sm border border-gray-200'>
              <p className='font-semibold mb-5'>Enquiry</p>
              <div>
                <table className='table-auto border-collapse border border-slate-400  w-full  text-sm'>
                  <thead className='bg-gray-800 text-white'>
                    <tr>
                      {/* <th className="border border-slate-300 font-normal p-3">
                        Id
                      </th> */}
                      <th className='border border-slate-300 font-normal p-3'>
                        Name
                      </th>
                      <th className='border border-slate-300 font-normal p-3'>
                        Phone
                      </th>
                      <th className='border border-slate-300 font-normal p-3'>
                        Email
                      </th>
                      <th className='border border-slate-300 font-normal p-3'>
                        Model
                      </th>
                      <th className='border border-slate-300 font-normal p-3'>
                        Outlet
                      </th>
                      <th className='border border-slate-300 font-normal p-3'>
                        Pickup
                      </th>
                      <th className='border border-slate-300 font-normal p-3'>
                        Category / Message
                      </th>
                      <th className='border border-slate-300 font-normal p-3'>
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>{displayData}</tbody>
                </table>
              </div>
              <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={handleChange}
                containerClassName={'paginationButtons'}
                previousLinkClassName={'previousLink'}
                nextLinkClassName={'nextLink'}
                activeClassName={'activePage'}
                disabledClassName={'disabledPage'}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Enquiries;
