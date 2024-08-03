import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./component/ErrorBoundary.jsx"; // Custom Error Boundary Component

// Lazy loading components
const Home = lazy(() => import("./containers/Home"));
const NotFound = lazy(() => import("./containers/NotFound"));

// Loading fallback component
const LoadingFallback = () => <div>Loading...</div>;

export default function RoutesComponent() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
