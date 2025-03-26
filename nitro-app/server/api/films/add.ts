export default defineEventHandler(async (event) => {

    const db = useDatabase();

        // Récupérer le corps de la requête
        const body = await readBody(event)

        // Vérifier que tous les paramètres sont présents
        if (!body.titre || !body.realisateur || !body.duree || !body.date_sortie || !body.affiche || !body.genre_id || !body.description) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Tous les champs sont obligatoires'
            })
        }

        try {

            const films = await db.sql`INSERT INTO films VALUES (NULL,${body.titre}, ${body.realisateur}, ${body.duree}, ${body.date_sortie}, ${body.affiche}, ${body.genre_id}, ${body.description})`;

            return {
                status: 'success',
            }

        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: 'Erreur lors de la création du films',
                data: error.message // Optionnel: retourner le message d'erreur SQL
            })
        }
})