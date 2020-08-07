import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      {/* A propriedade exact é para que a landing page não
      seja exibida nas outras páginas, uma vez que a / contém
      em todos endereços */}
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;