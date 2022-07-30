import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { CreateItem } from "./pages";
import { MainContrainer } from "./pages/MainContrainer";
import { useFetchItems } from "./utils/fetchLocalStorageData";

const App = () => {
  const { fetchData } = useFetchItems();

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="md:px-16 px-4 py-4 mt-16 md:mt-20 w-full">
          <Routes>
            <Route path="/*" element={<MainContrainer />} />
            <Route path="/createItem" element={<CreateItem />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
