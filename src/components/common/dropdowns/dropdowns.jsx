import { Select, styled, FormControl, MenuItem, Stack } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const StyledDropDown = styled(Select)(({ theme, style }) => ({
    height: 39,
    width: 137,

    borderRadius: 2,
    textTransform: "none",
    boxShadow: 'none',
    backgroundColor: theme?.palette?.painColor?.main,
    ".MuiSelect-icon": {
        color: theme.palette.textSecondary.main,
        fontSize: 30,
        [theme.breakpoints.down("sm")]: {
            fontSize: 10,
          },
    },
    ".MuiSelect-select": {
        color: theme.palette.textSecondary.main,
        paddingTop: "15px",
        paddingRight: "40px",
        fontFamily: theme.fontFamily.primary,
        [theme.breakpoints.down("xs")]: {
            fontSize: 12,
          },
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
        border: 0,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        width: 126
    },
    [theme.breakpoints.down("xs")]: {
        width: 100,

      },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    borderRadius: "none",
    fontSize: 14,
    fontFamily: theme.fontFamily.primary,
    justifyContent: "center",
    ":focus": {
        backgroundColor: theme.palette.buttonSecondary.main,
        color: theme.palette.textSecondary.main,
    },


}));


export const ButtonDropdown = ({ items, defaultValue }) => {
    return (
        <FormControl>
            <StyledDropDown
                MenuProps={{
                    PaperProps: {
                        sx: {
                            borderRadius: 0,
                        },
                    },
                }}
                IconComponent={ExpandMoreIcon}
                defaultValue={defaultValue}
            >
                {
                    items?.map((item) => (
                        <StyledMenuItem key={item} value={item}>{item}</StyledMenuItem>
                    ))
                }
            </StyledDropDown>
        </FormControl>
    )
}


const StyledExpertDropdown =  styled(StyledDropDown)(({ theme }) => ({
    width:207,
    height:42,
    backgroundColor:theme.palette.textSecondary.main,
    ".MuiSelect-icon": {
        color: theme.palette.textPrimary.main,
    },
    ".MuiSelect-select": {
        color: theme.palette.textPrimary.main,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        width: 176
    }
}));


export const ExpertDropdown = ({ items, placeholder }) => {
    return (
        <FormControl>
            <StyledExpertDropdown
                MenuProps={{
                    PaperProps: {
                        sx: {
                            borderRadius: 0,
                        },
                    },
                }}
                IconComponent={ExpandMoreIcon}
            >
                {
                    items?.map((item) => (
                        <StyledMenuItem key={item} value={item}>{item}</StyledMenuItem>
                    ))
                }
            </StyledExpertDropdown>
        </FormControl>
    )
}











