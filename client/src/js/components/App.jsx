import React from 'react';
import TopNav from './Nav';

type DefaultProps = {};

type Props = {
    children: any
} & DefaultProps;

function App(props: Props) {
    const { children } = props;

    return ( 
      <div className="App">
        <TopNav />
        {children}
      </div>
    )
}

export default App;
