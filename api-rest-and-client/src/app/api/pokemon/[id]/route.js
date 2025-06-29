import { NextResponse } from 'next/server'
import { Pokemon } from '~/api/entities'
import ERROR from '~/Libs/error'
import queryDB from '~/app/api/Libs/queryDB'
import cleanerData from '~/app/api/Libs/cleanerData'
import validatorFields from '~/app/api/Libs/validatorFields'

export const GET = async ({ params }) => {
  try {
    const { id } = await params
    if (!Number(id)) return ERROR.INVALID_FIELDS()
    const payload = await queryDB({
      entity: 'pokemon',
      queryType: 'findUnique',
      filter: { id: Number(id) }
    })
    if (payload) {
      const response = cleanerData({ payload })
      return NextResponse.json(response, { status: 200 })
    }
    return ERROR.NOT_FOUND()
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}

export const PUT = async (request, { params }) => {
  try {
    const { id } = await params
    const data = await request.json()
    const isValid = validatorFields({ data, shape: Pokemon.shape })
    if (isValid) {
      const payload = await queryDB({
        entity: 'pokemon',
        queryType: 'update',
        filter: { id: Number(id) },
        data
      })
      if (!payload) return ERROR.NOT_FOUND()
      const response = cleanerData({ payload })
      return NextResponse.json(response, { status: 200 })
    }
    return ERROR.FORBIDDEN()
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}

export const PATCH = async (request, { params }) => {
  try {
    const { id } = await params
    const data = await request.json()
    const payload = await queryDB({
      entity: 'pokemon',
      queryType: 'update',
      filter: { id: Number(id) },
      data
    })
    if (payload) {
      const response = cleanerData({ payload })
      return NextResponse.json(response, { status: 200 })
    }
    return ERROR.NOT_FOUND()
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}

export const DELETE = async (request, { params }) => {
  try {
    const { id } = await params
    const payload = await queryDB({
      entity: 'pokemon',
      queryType: 'delete',
      filter: { id: Number(id) }
    })
    if (payload) {
      const response = cleanerData({ payload })
      return NextResponse.json(response, { status: 200 })
    }
    return ERROR.NOT_FOUND()
  } catch (error) {
    console.error('Error in DELETE /pokemon/[id]:', error)
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}
