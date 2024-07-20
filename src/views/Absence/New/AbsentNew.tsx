import AbsentForm, {
    FormModel,
    SetSubmitting,
} from '../Form'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useNavigate } from 'react-router-dom'
import { apiCreateAbsence } from '@/services/AbsenceService'
import {useAppSelector} from "@/store";


export const datesToCreate = {
    start: {
        day: 0,
        month: 0,
        year: 0,

    },
    end: {
        day: 0,
        month: 0,
        year: 0,

    },
}



const AbsentNew = () => {
    const navigate = useNavigate()

    const { avatar, Name, authority, Email, ID } = useAppSelector(
        (state) => state.auth.user
    )



    const addAbsence = async (data: FormModel) => {

        const response = await apiCreateAbsence<boolean, FormModel>(data)
        console.log('tje response');
        console.log(response.data)
        return response.data
    }

    const handleFormSubmit = async (
        values: FormModel,
        setSubmitting: SetSubmitting
    ) => {



        values.ID = ID;
        values.Range = datesToCreate;
        console.log('the week')
        console.log(datesToCreate);
        console.log('the values');
        console.log(values);


        setSubmitting(true)
        const success = await addAbsence(values)
        setSubmitting(false)
        console.log('the succ')
        console.log(success);
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Tag successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/app/sales/product-list')
        }
    }

    const handleDiscard = () => {
        navigate('/app/sales/product-list')
    }

    return (
        <>
            <AbsentForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default AbsentNew
