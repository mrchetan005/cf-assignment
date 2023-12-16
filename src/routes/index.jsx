import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import TestDataTable from "../components/TestDataTable";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" index element={<Home />} />
            <Route path="data-table" index element={<TestDataTable />} />
            <Route path="types-table" index element={<TestDataTable />} />
        </Route>
    )
);

export default router;