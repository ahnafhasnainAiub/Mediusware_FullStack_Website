import React from 'react';

const Modal = ({ isOpen, closeModal, inquiries }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-xl">
            <h2 className="text-2xl font-bold mb-4">All Inquiries</h2>
            <div className="overflow-y-auto max-h-96">
              <table className="border-collapse w-full">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-4 py-2">Name</th>
                    <th className="border border-gray-400 px-4 py-2">Email</th>
                    <th className="border border-gray-400 px-4 py-2">Company</th>
                    <th className="border border-gray-400 px-4 py-2">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inquiry, index) => (
                    <tr key={index}>
                      <td className="border border-gray-400 px-4 py-2">{inquiry.name}</td>
                      <td className="border border-gray-400 px-4 py-2">{inquiry.email}</td>
                      <td className="border border-gray-400 px-4 py-2">{inquiry.company}</td>
                      <td className="border border-gray-400 px-4 py-2">{inquiry.number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
