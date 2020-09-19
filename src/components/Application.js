import React from 'react';

import Users from './Users';
import CreateList from './CreateList';
import ListContainer from '../containers/ListsContainer';

const Application = () => {
  return (
    <main className="Application">
      <Users />
      <section>
        <CreateList />
        <ListContainer />
      </section>
    </main>
  );
};

export default Application;
