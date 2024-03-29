import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <Link href="./">
          <a className="hover:underline">PractiLabs™</a>
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="./about">
            <a className="mr-4 hover:underline md:mr-6 ">About</a>
          </Link>
        </li>
        <li>
          <Link href="./">
            <a className="mr-4 hover:underline md:mr-6">Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="./contact">
            <a className="hover:underline">Contact</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
