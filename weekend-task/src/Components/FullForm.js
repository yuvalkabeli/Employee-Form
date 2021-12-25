import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import EquipmentList from './EquipmentList'
import Worker from './Worker'
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";


export default function FullForm() {
    const { user } = useSelector(({ user }) => user);
    const { equipment } = useSelector(({ equipment }) => equipment)
    const navigate = useNavigate()
    const submit = () => {
        console.log(user)
        console.log(equipment)
        navigate('/send', { state: { user } })
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Worker />
            <EquipmentList />
            <Button
                size='large'
                startIcon={<SaveIcon />}
                variant="contained"
                color="primary"
                size='large'
                onClick={() => submit()}
            >
                submit form
            </Button>
        </div>
    )
}
