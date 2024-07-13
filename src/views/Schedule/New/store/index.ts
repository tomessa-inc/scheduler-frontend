import { combineReducers } from '@reduxjs/toolkit'
import reducers, { SLICE_NAME } from './productEditSlice'
import {SchedulerNewState} from "@/views/Schedule/types";
import { useSelector } from 'react-redux'

import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '@/store'

const reducer = combineReducers({
    data: reducers,
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME]: {
            data: SchedulerNewState
        }
    }
> = useSelector

export * from './productEditSlice'
export { useAppDispatch } from '@/store'
export default reducer
