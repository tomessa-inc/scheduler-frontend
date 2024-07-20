import AdaptableCard from '@/components/shared/AdaptableCard'
import RichTextEditor from '@/components/shared/RichTextEditor'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Field, FormikErrors, FormikTouched, FieldProps } from 'formik'
import CreatableSelect from 'react-select/creatable'
import Select from '@/components/ui/Select'

import { DateRange } from 'rsuite/esm/DateRangePicker'

import { DateRangePicker } from 'rsuite';
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';
import 'rsuite/styles/index.less';
import { datesToCreate } from '@/views/Absence/New/AbsentNew'
import { RangeSchema } from  '@/@types/common'

type Options = {
    label: string
    value: string
}[]


type FormFieldsName = {
    ID: string
    Range: RangeSchema
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
    values: {
        Day: number
        Hour: number
        Minute: number
        [key: string]: unknown
    }
}


const BasicInformationFields = (props: BasicInformationFields) => {
  //  const { touched, errors } = props
   // const { values = { tags: [] }, touched, errors } = props
    const { values = { Day: 'sunday',  Hour: 9, Minute: 30   }, touched, errors } = props


    const handleRange = (range:DateRange |null ) => {

        if  (range === null) {
          return;
        }

        datesToCreate.start.day = new Date(range[0]).getDate()
        datesToCreate.start.month = new Date(range[0]).getMonth() + 1;
        datesToCreate.start.year = new Date(range[0]).getUTCFullYear()
        datesToCreate.end.day = new Date(range[1]).getDate()
        datesToCreate.end.month = new Date(range[1]).getMonth() + 1;
        datesToCreate.end.year =  new Date(range[1]).getUTCFullYear()
        
      }

    return (
        <AdaptableCard divider className="mb-4">
            <h5>Basic Information</h5>
            <p className="mb-6">Section to config galldddey information</p>

           
             <DateRangePicker hoverRange="week" ranges={[]} onChange={handleRange}  />
        </AdaptableCard>
    )
}

export default BasicInformationFields
