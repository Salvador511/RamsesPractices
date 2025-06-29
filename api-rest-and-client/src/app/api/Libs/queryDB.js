import prisma from '~/app/api/Libs/prisma'
import ERROR from '~/Libs/error'

export const getOptions = ({ filter, data: d }) => {
  const filters = filter ? { where: { ...filter } } : {}
  const data = d ? { data: d } : {}
  return Object.assign(filters, data)
}

const createMany = async data => {
  try {
    const response = Promise.all(
      data.map(async obj => {
        const objFound = await prisma.competitor.findUnique({ where: { email: obj.email } })
        if (objFound) {
          const payload = await prisma.competitor.update({ where: { email: obj.email }, data: obj })
          return payload
        } else {
          return await prisma.competitor.create({ data: obj })
        }
      })
    )
    return response
  } catch (error) {
    return ERROR.INVALID_FIELDS()
  }
}

/*
 * Executes various database operations based on the specified query type.
 *
 * **Supported Query Types:**
 * - `findUnique`: Retrieves a single record by unique identifier.
 * - `findMany`: Retrieves multiple records based on filters.
 * - `create`: Creates a new record.
 * - `createMany`: Creates or updates multiple records.
 * - `update`: Updates an existing record if found.
 * - `delete`: Deletes an existing record if found.
 *
 * **Responses:**
 * - Returns the result of the database operation or null if not found.
 * - Returns `ERROR.NOT_FOUND()` for missing update/delete targets.
 *
 * @param {Object} params - Parameters for the database query.
 * @param {string} params.entity - The database entity name (table/model).
 * @param {Object} [params.filter] - Filter conditions for the query.
 * @param {string} params.queryType - The type of query operation to perform.
 * @param {Object} [params.data] - Data for create or update operations.
 * @returns {Promise<Object|null>} - The result of the database operation or null if not found.
 */
const queryDB = async ({ entity, filter, queryType, data }) => {
  const opts = queryType !== 'createMany' ? getOptions({ filter, data }) : { data }
  let payload
  let element
  let options
  switch(queryType){
    case 'findUnique':
      return await prisma[entity].findUnique({ ...opts })

    case 'findMany':
      payload = await prisma[entity].findMany({ ...opts })
      return payload.length ? payload : null

    case 'create':
      return await prisma[entity].create({ ...opts })

    case 'createMany':
      return await createMany(data)

    case 'update':
      if (!opts?.where?.id) return ERROR.NOT_FOUND()
      options = getOptions({ filter })
      element = await prisma[entity].findUnique(options)
      payload = element ? await prisma[entity].update({ ...opts }) : null
      return payload

    case 'delete':
      options = getOptions({ filter })
      element = await prisma[entity].findUnique(options)
      payload = element ? await prisma[entity].delete({ ...opts }) : null
      return payload

    default:
      return null
  }
}

export default queryDB