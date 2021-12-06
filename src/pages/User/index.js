import { Route, Routes } from "react-router";
import { Feed } from "../Feed";
import { UserHeader } from "../../components/UserHeader";
import { UserPhotoPost } from "../UserPhotoPost";
import { UserStats } from "../UserStats";

export function User() {
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed />}></Route>
                <Route path="/postar" element={<UserPhotoPost />}></Route>
                <Route path="/estatisticas" element={<UserStats />}></Route>
            </Routes>
        </section>
    )
}