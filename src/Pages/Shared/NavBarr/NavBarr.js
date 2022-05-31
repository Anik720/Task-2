import React from 'react';

const NavBarr = () => {
  return (
    <div>
      <div class='navbar bg-base-100'>
        <div class='flex-1'>
          <a class='btn btn-ghost normal-case text-xl'>Home</a>
        </div>
        <div class='flex-none'>
          <ul class='menu menu-horizontal p-0'>
            <li tabindex='0'>
              <a>
                Product and services
                <svg
                  class='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              <ul class='p-2 bg-base-100'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li tabindex='0'>
              <a>
                Become a client
                <svg
                  class='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              <ul class='p-2 bg-base-100'>
                <li>
                  <a>CopperTech Industries Ltd</a>
                </li>
                <li>
                  <a>Onimex electrolide ltd</a>
                </li>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li tabindex='0'>
              <a>
                About Us
                <svg
                  class='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              <ul class='p-2 bg-base-100'>
                <li>
                  <a>Capital Profile</a>
                </li>
                <li>
                  <a>Mission and vissoin</a>
                </li>
                <li>
                  <a>Board of directors</a>
                </li>
                <li>
                  <a>Management executive</a>
                </li>
                <li>
                  <a>Circulation</a>
                </li>
                <li>
                  <a>Career opportunity</a>
                </li>
                <li>
                  <a>Contacts</a>
                </li>
              </ul>
            </li>
            <li>
              <button class='btn btn-sm text-white'>Login</button>
              <button class='btn btn-sm text-white'>Sign up</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarr;
