export default defineEventHandler(async (event) => {
    const db = useDatabase();

    const id = getRouterParam(event, 'id')
    await db.sql`DELETE FROM films WHERE id=${id};`;


    return {
        status: 'success'
    }
})