import React, { Suspense, useEffect } from 'react'
import { Head } from '../../components/Head'
import { Loading } from '../../components/Loading'
import { Error } from '../../components/Error'
import { useFetch } from '../../hooks/useFetch'
import { STATS_GET } from '../../services/api'
const UserStatsGraphs = React.lazy(() => import('../../components/UserStatsGraphs'));

export function UserStats() {
    const { data, error, loading, request } = useFetch()

    useEffect(() => {
        async function getData() {
            const { url, options } = STATS_GET()
            await request(url, options)
        }
        getData()
    }, [request])

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    if (data) {
        return (
            <Suspense fallback={<div></div>}>
                <Head title="Estatisticas" />
                <UserStatsGraphs data={data} />
            </Suspense>
        )
    } else {
        return null
    }
}