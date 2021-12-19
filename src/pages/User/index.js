import { Route, Routes } from "react-router";
import { Feed } from "../Feed";
import { UserHeader } from "../../components/UserHeader";
import { UserPhotoPost } from "../UserPhotoPost";
import { UserStats } from "../UserStats";
import { useContext } from "react";
import { UserStorageContext } from "../../contexts/UserContext";

export function User() {
    const { data } = useContext(UserStorageContext)

    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />}></Route>
                <Route path="/postar" element={<UserPhotoPost />}></Route>
                <Route path="/estatisticas" element={<UserStats />}></Route>
            </Routes>
        </section>
    )
}