export default defineEventHandler(async (event) => {
    const db = useDatabase();

    // Récupérer l'ID du film depuis les paramètres de la route
    const id = getRouterParam(event, 'id');

    // Récupérer les données du body de la requête
    const body = await readBody(event);

    // Vérifier que l'ID existe et que le body contient des données
    if (!id || !body) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID manquant ou données invalides'
        });
    }

    try {
        // Exécuter la requête SQL de mise à jour
        await db.sql`
            UPDATE films SET
                titre = ${body.titre},
                realisateur = ${body.realisateur},
                duree = ${body.duree},
                date_sortie = ${body.date_sortie},
                affiche = ${body.affiche},
                genre_id = ${body.genre_id},
                description = ${body.description}
            WHERE id = ${id}`;


        // Retourner le film modifié
        return {
            status: 'success',
        };

    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Erreur lors de la mise à jour du film',
            data: error
        });
    }
});