import type {TableQueries} from "@/@types/common";
import {FormModel, SetSubmitting} from "@/views/Schedule/Form";

export type UserData = {
    ID?: string
    Name?: string
    UsherGroup?: UsherGroupLV[],
    Phone?: string
    Email?: string
    Description?: string
    tags? :string
}


export type ImagesData = {

    id?: string
    key?: string
    gallery?: string
    name?: string
    updatedAt?: string
    createdAt?: string
}

export type FilterQueries = {
    name: string
    category: string[]
    status: number[]
    productStatus: number
}

export type Tag = {
    id: string
    name: string
    description: string
}

export type UsherGroupLV = {
    label: string
    value: string
}

type GetTagsResponse = {
    data: Tag[]
    total: number
}

export const initialTableData: TableQueries = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
}

export type SchedulerNewState = {
    loading: boolean
    userEditData: UserData
    tableData: TableQueries
    usherGroupLV: UsherGroupLV[]
}


type userGroupList = {
    Label: string,
    Value: string
}

export type RangeSchema = {
    start: {
        day: number,
        month: number,
        year: number,

    },
    end: {
        day: number,
        month: number,
        year: number,

    },
}

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>

type OnDelete = (callback: OnDeleteCallback) => void


export type ScheduleFormOptions = {
    initialData?: InitialData
    usherGroupLV: UsherGroupLV[],
    type: 'edit' | 'new'
    onDiscard?: () => void
    onDelete?: OnDelete
    onFormSubmit: (formData: FormModel, setSubmitting: SetSubmitting, type: string) => void
}

export type InitialData = {
    ID?: string
    Range?: RangeSchema
    UsherGroup?: userGroupList[],
}
