import { NextResponse } from 'next/server'
import { Pokemon } from '~/api/entities'
import ERROR from '~/Libs/error'
import queryDB from '~/app/api/Libs/queryDB'
import cleanerData from '~/app/api/Libs/cleanerData'
import payloadFormatter from '~/app/api/Libs/Utils/payloadFormatter'
import validatorFields from '~/app/api/Libs/validatorFields'
import { EMPTY_OBJECT } from '~/app/Lib/Utils/constants'

export const POST = async request => {
  try{
    const data = await request.json()
    const isValid = validatorFields({ data, shape: Pokemon.shape })
    if(isValid){
      const payload = await queryDB({
        entity: 'pokemon',
        queryType: 'create',
        data: {
          ...data,
          pokedexNumber: Number(data.pokedexNumber),
          height: Number(data.height),
          weight: Number(data.weight)
        }
      })
      const response = cleanerData({ payload })
      return NextResponse.json(response, { status: 201 })
    }
    return ERROR.FORBIDDEN()
  } catch (error) {
    console.error('Error in POST /pokemon:', error)
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}


export const GET = async request => {
  try{
    const filter = Object.fromEntries(request?.nextUrl?.searchParams ?? '')
    const payloads = await queryDB({
      entity: 'pokemon',
      queryType: 'findMany',
      ...(filter.length > 0 ? { filter } : EMPTY_OBJECT)
    })
    if(payloads){
      const response = payloadFormatter(payloads.map(payload => cleanerData({ payload })))
      return NextResponse.json(response, { status: 200 })
    }
    return ERROR.NOT_FOUND()
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 })
  }
}