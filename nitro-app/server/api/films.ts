export default defineEventHandler(async () => {
  const db = useDatabase();

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
                                  genres g ON f.genre_id = g.id;`;

  const films2 = films["rows"]

  return {
    status: 'success',
    data: films2
  }
});