export default defineEventHandler(async (event) => {
    const db = useDatabase();

    const id = getRouterParam(event, 'id')
    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID manquant ou données invalides'
        });
    }

    try {
        // Exécuter la requête SQL de récupération des séances
        const result = await db.sql`
            SELECT * FROM seances where id =${id};`;

        const resultfin = result["rows"]


        // Retourner les séances
        return {
            status: 'success',
            data: resultfin
        };

    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Erreur lors de la récupération des séances',
            data: error
        });
    }
})