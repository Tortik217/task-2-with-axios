import type { AxiosRequestConfig } from 'axios'
import { ApiPetsEndpoints } from './ApiPetsEndpoints'
import { IPet, PetStatus } from '../../types/IPet'
import { fetcher } from '../utils/axios'

export async function findByStatus(params: {
    status: PetStatus
}, init?: AxiosRequestConfig): Promise<IPet[]> {
    return await fetcher(ApiPetsEndpoints.findByStatus.url, {
        ...init,
        method: ApiPetsEndpoints.findByStatus.method,
        params: {
            status: params.status
        }
    })
}

export async function findById(params: {
    id: number
}, init?: AxiosRequestConfig): Promise<IPet[]> {
    return await fetcher(ApiPetsEndpoints.findById.url(params.id), {
        ...init,
        method: ApiPetsEndpoints.findById.method
    })
}

export async function findByTags(params: {
    tags: string[]
}, init?: AxiosRequestConfig): Promise<IPet[]> {
    return await fetcher(ApiPetsEndpoints.findByTags.url, {
        ...init,
        method: ApiPetsEndpoints.findByTags.method,
        params: {
            status: params.tags
        }
    })
}

export const ApiPetsRequests = {
    findByStatus,
    findByTags,
    findById
}