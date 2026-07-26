import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./component/ErrorBoundary.jsx";

// Lazy loading components
const Home = lazy(() => import("./containers/Home"));
const NotFound = lazy(() => import("./containers/NotFound"));
const InventorDetail = lazy(() => import("./pages/InventorDetail"));

const LoadingFallback = () => (
  <div style={{ padding: "2rem 1.6rem", maxWidth: "112rem", margin: "0 auto" }}>
    Loading archive view...
  </div>
);

export default function RoutesComponent() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventor/:slug" element={<InventorDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
