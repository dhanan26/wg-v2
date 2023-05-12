import { Button, styled } from "@mui/material";


export const PrimaryButton = styled(Button)(({ theme, color }) => ({
    color: theme?.palette?.[color],
    width: "auto",
    height: 39,
    borderRadius: 2,
    textTransform: "none",
    fontFamily: theme?.fontFamily?.primary,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    boxShadow: 'none',
    ":hover": {
        backgroundColor: theme?.palette?.[color],
        boxShadow: 'none'
    },
    ":active": {
        backgroundColor: theme?.palette?.[color],
        boxShadow: 'none',
    },
    ":focus": {
        borderBottom: `2px solid #00256D`,
        outline: 'none'
    },
    ".MuiTouchRipple-root": {
        display: 'none'
    }
}));


export const SecondaryButton = styled(PrimaryButton)(({ theme, color }) => ({
    ":focus": {
        borderBottom:"none",
    },
}));

export const GetInTouchButton = styled(SecondaryButton)(({ theme, position }) => ({
    fontSize: 15,
    ".MuiButton-startIcon": {
        marginLeft: 10,
        marginBottom: 1
    }
}));