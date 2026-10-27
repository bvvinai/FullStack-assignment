import React, { Suspense } from 'react';

const FsadApp = React.lazy(() => import('fsadApp/FsadApp'));
const ApiProductsApp = React.lazy(() => import('apiProducts/ApiProductsApp'));

export default function App() {
  return (
    <div className="shell">
      <h1>Microfrontend Shell</h1>
      <div className="grid">
        <Suspense fallback={<div>Loading FSAD module...</div>}>
          <FsadApp />
        </Suspense>
        <Suspense fallback={<div>Loading ApiProducts module...</div>}>
          <ApiProductsApp />
        </Suspense>
      </div>
    </div>
  );
}
