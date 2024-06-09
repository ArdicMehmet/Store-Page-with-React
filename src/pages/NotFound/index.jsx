import React from "react";
import Header from "../../components/Header";
function NotFound() {
  return (
    <>
      <Header />
      <main className="h-dvh flex justify-center items-center">
        <h1 className="title">Aradığınız sayfa mevcut değil.</h1>
      </main>
    </>
  );
}

export default NotFound;
