import React from 'react';
import { Heading } from '@chakra-ui/react';
import Link from 'next/link';

function Header(props) {
    return (
        <div className='headerContainer'>
            <Heading size='lg'>DEV Analytics</Heading>
            <ul className='headerList'>
                <li className='headerListItem'>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className='headerListItem'>
                    <Link href="/dashboard">
                        <a>Dashboard</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;