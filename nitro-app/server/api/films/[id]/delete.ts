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
        // Exécuter la requête SQL de suppression
        const result = await db.sql`
            DELETE FROM films WHERE id=${id};`;

        // Retourner la reussite
        return {
            status: 'success',
        };

    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Erreur lors de la suppression film',
            data: error
        });
    }
})