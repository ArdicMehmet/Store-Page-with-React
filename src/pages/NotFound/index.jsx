import React from "react";
import Header from "../../components/Header";
function NotFound() {
  return (
    <>
      <Header />
      <main className="h-dvh flex justify-center items-center">
        <h1 className="title">The page you are looking for does not exist.</h1>
      </main>
    </>
  );
}

export default NotFound;
