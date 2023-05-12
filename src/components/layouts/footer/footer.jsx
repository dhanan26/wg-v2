import { StyledSwitch } from "../../common/switch/switch"
import { FormControlLabel } from "@mui/material"

export const Footer = () => {
    return (

        <FormControlLabel control={<StyledSwitch sx={{ m: 1 }} defaultChecked />} label="iOS style"/>

    )
}