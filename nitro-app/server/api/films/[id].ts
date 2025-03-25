export default defineEventHandler(async (event) => {
    const db = useDatabase();

    const id = getRouterParam(event, 'id')
    const films = await db.sql`SELECT
                                   f.id,
                                   f.titre,
                                   f.realisateur,
                                   f.duree,
                                   f.date_sortie,
                                   f.affiche,
                                   f.genre_id,
                                   f.description,
                                   g.nom AS genre_nom
                               FROM
                                   films f
                                    INNER JOIN
                                genres g ON f.genre_id = g.id 
                               where f.id=${id};`;

    const films2 = films["rows"][0]

    return {
        status: 'success',
        data: films2
    }
})