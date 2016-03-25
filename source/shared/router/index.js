import { Router, Route } from 'react-router';

import TestData from 'shared/components/test-data';

export default (React, browserHistory) => () => {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ TestData } />
    </Router>
  );
};
