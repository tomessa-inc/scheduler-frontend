import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetUserById,
    apiPutSalesProduct,
    apiPutUser,
    apiPostWeek,
    apiDeleteSalesProducts,
} from '@/services/WeekService'
import {
    UserData,
    UsherGroupLV,
    FilterQueries,
    SchedulerNewState,
    initialTableData,
} from '../../types'

import {
    getUsherGroupByLabelValue,
} from '@/services/UsherService'

import type { TableQueries } from '@/@types/common'

type GetSalesProductResponse = UserData
type GetSalesTagResponse = UsherGroupLV[]

type GetTagsRequest = TableQueries & { filterData?: FilterQueries }

type GetSalesProductsRequest = TableQueries & { filterData?: FilterQueries }

export const SLICE_NAME = 'SchedulerNew'

export const getUsherGroupList = createAsyncThunk(
    `${SLICE_NAME} + '/getUsherGroups'`,
    async (data: GetSalesProductsRequest) => {

        const response = await getUsherGroupByLabelValue<
            GetSalesTagResponse,
            GetSalesProductsRequest
        >(data)
 
        const noo = response.data.map((test:any) => {
          return  { label : test.label, value: test.value }
        })

        return noo
    }
)


export const updateProduct = async <T, U extends Record<string, unknown>>(
    data: U
) => {
    const response = await apiPutSalesProduct<T, U>(data)
    return response.data
}

export const updateUser = async <T, U extends Record<string, unknown>>(
    data: U
) => {
    const response = await apiPutUser<T, U>(data)
    return response.data
}

export const addWeek = async <T, U extends Record<string, unknown>>(
    data: U
) => {
    const response = await apiPostWeek<T, U>(data)
    return response.data
}


export const deleteProduct = async <T, U extends Record<string, unknown>>(
    data: U
) => {
    const response = await apiDeleteSalesProducts<T, U>(data)
    return response.data
}

const initialState: SchedulerNewState = {
    loading: true,
    userEditData: {},
    usherGroupLV: [],
    tableData: initialTableData,    
}

const productEditSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsherGroupList.fulfilled, (state, action) => {
                state.usherGroupLV = action.payload
                state.loading = false
            })
            .addCase(getUsherGroupList.pending, (state) => {
                state.loading = true
            })

    },
})

export default productEditSlice.reducer
