import { Select, styled, FormControl, MenuItem,Stack } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const StyledDropDown = styled(Select)(({ theme }) => ({
    width: 137,
    height: 39,
    borderRadius: 2,
    textTransform: "none",
    boxShadow: 'none',
    backgroundColor: theme.palette.textSecondary.main,
    ".MuiSelect-icon": {
        color: theme.palette.buttonSecondary.main,
        fontSize: 30,
    },
    ".MuiSelect-select": {
        color: theme.palette.buttonSecondary.main,
        paddingTop: "15px",
        paddingRight: "40px",
        fontFamily: theme.fontFamily.primary,
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
        border: 0,
    },
    '@media(max-width:600px)': {
        fontSize: 14
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


export const ButtonDropdown = ({ items, icon, defaultValue }) => {
    return (
        <FormControl>
            <Stack direction={"row"}>
                {icon}
                <StyledDropDown
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                borderRadius:0,
                            },
                        },
                    }}
                    IconComponent={ExpandMoreIcon}
                    defaultValue={defaultValue}
                >
                    {
                        items?.map((item) => (
                            <StyledMenuItem  key={item} value={item}>{item}</StyledMenuItem>
                        ))
                    }
                </StyledDropDown>
            </Stack>
        </FormControl>
    )
}




