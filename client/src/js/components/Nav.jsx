import React from 'react';

type DefaultProps = {};

type Props = {
} & DefaultProps;

function TopNav(props: Props) {

    return ( 
        <div class="topnav">
            <a href="login">Login</a>
        </div>
    )
}

export default TopNav;