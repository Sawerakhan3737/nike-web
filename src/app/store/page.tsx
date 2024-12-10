import Image from 'next/image';
import React from 'react';


interface StoreStatus {
  isOpen: boolean;
  timing: string;
}


interface StoreCardProps {
  name: string;
  address: string;
  city: string;
  status: StoreStatus;
}

const StoreCard = ({ name, address, city, status }: StoreCardProps) => (
  <div className="my-5">
    <span className="font-semibold">{name}</span>
    <br />
    <span className="text-gray-500">{address}</span>
    <br />
    <span className="text-gray-500">{city}</span>
    <br />
    <span className={`text-${status.isOpen ? 'green' : 'red'}-500`}>
      {status.isOpen ? 'Open' : 'Closed'}{' '}
      <span className="text-gray-500">• {status.timing}</span>
    </span>
    <hr className="my-5" />
  </div>
);

const Store = () => {
  const stores = [
    {
      name: 'Nike NYC - House of Innovation 000',
      address: '650 5th Ave.',
      city: 'New York, NY, 10019, US',
      status: { isOpen: false, timing: 'Opens at 11:00 am' },
    },
    {
      name: 'Nike By Upper East Side',
      address: '1131 3rd Ave.',
      city: 'New York, NY, 10065, US',
      status: { isOpen: false, timing: 'Opens at 11:00 am' },
    },
    {
      name: 'Nike By Flatiron',
      address: '156 Fifth Ave.',
      city: 'New York, NY, 10010, US',
      status: { isOpen: false, timing: 'Opens at 11:00 am' },
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="flex-1">
          <div className="pt-8">
            <h1 className="text-2xl font-semibold mb-6">Find a Nike Store</h1>
          </div>
          <div className="flex items-center gap-x-4 mb-8">
            <input
              className="w-full lg:w-96 py-3 px-4 text-center border rounded-lg outline-none shadow-sm"
              type="text"
              placeholder="Search Location"
              aria-label="Search Location"
            />
            <svg
              className="absolute left-4 text-gray-500"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471"
                stroke="#111111"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center pb-5">
            <span className="text-gray-500">15 Stores Near You</span>
            <div className="flex items-center">
              <span className="pr-4">Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sliders-horizontal"
                aria-hidden="true"
              >
                <line x1="21" x2="14" y1="4" y2="4" />
                <line x1="10" x2="3" y1="4" y2="4" />
                <line x1="21" x2="12" y1="12" y2="12" />
                <line x1="8" x2="3" y1="12" y2="12" />
                <line x1="21" x2="16" y1="20" y2="20" />
                <line x1="12" x2="3" y1="20" y2="20" />
                <line x1="14" x2="14" y1="2" y2="6" />
                <line x1="8" x2="8" y1="10" y2="14" />
                <line x1="16" x2="16" y1="18" y2="22" />
              </svg>
            </div>
          </div>
          {stores.map((store, idx) => (
            <StoreCard
              key={idx}
              name={store.name}
              address={store.address}
              city={store.city}
              status={store.status}
            />
          ))}
          <div className="text-center mt-7">
            <span className="underline text-black font-semibold text-lg">
              View All Stores
            </span>
          </div>
        </div>
        <div className="mt-8 lg:mt-2 lg:w-1/2">
          <Image
            src="/location.png"
            alt="Map showing store locations"
            width={900}
            height={700}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Store;
