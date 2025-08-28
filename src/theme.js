import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#666666',  // very fade gray for normal state
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                        borderWidth: '2px',
                    },
                    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'red',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'gray',
                    '&.Mui-focused': {
                        color: 'white',
                    },
                    '&.Mui-error': {
                        color: 'red',
                    },
                },
            },
        },

        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: 'white', // change input text color
                },
            },
        },

        MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: 'black',   // card background
                color: 'white',             // text color
              },
            },
          },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'white',             // all Typography text in InfoBox will be white
                },
            },
        },
    },
})

export default theme;