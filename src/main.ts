import { ApiPetsRequests } from './api/pets/ApiPetsRequests'
import { PetStatus } from './types/IPet'

async function testRequest() {
    try {
        const result = await ApiPetsRequests.findByStatus({
            status: PetStatus.available
        })

        console.log(result)
    } catch (e) {
        console.error(e)
    }
}

testRequest()