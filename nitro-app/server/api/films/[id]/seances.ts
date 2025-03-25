export default defineEventHandler(async (event) => {
    const db = useDatabase();

    const id = getRouterParam(event, 'id')
    const seances = await db.sql`SELECT * FROM seances where film_id =${id};`;

    const seances2 = seances["rows"]

    return {
        status: 'success',
        data: seances2
    }
})