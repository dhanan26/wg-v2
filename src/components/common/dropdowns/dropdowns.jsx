import { Select, styled, FormControl, MenuItem,Stack } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const StyledDropDown = styled(Select)(({ theme }) => ({
    width: 137,
    height: 39,
    borderRadius: 2,
    textTransform: "none",
    boxShadow: 'none',
    backgroundColor: theme.palette.painColor.main,
    ".MuiSelect-icon": {
        color: theme.palette.textSecondary.main,
        fontSize: 30,
    },
    ".MuiSelect-select": {
        color: theme.palette.textSecondary.main,
        paddingTop: "15px",
        paddingRight: "40px",
        fontFamily: theme.fontFamily.primary,
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
        border: 0,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize:14,
        width:126

    }
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
        </FormControl>
    )
}




