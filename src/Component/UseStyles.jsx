import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 350;
const appBar = '172.8';
export const UseStyles = makeStyles(theme => (
{
    drawer: {
      width: '300px',
      borderRight: '1px solid black',
      height: '100vh'
    },
    searchInput:{
      width: '100%',
      height: '2.5rem',
      border: '1px solid #ccc',
      borderRadius: '.5rem',
      fontSize: '.9rem',
      color: '#00000090',
      fontWeight: '500', 
      paddingRight: '2rem',
      paddingLeft: '.5rem'
    },
    search: {
      display: 'flex',
      margin: '0rem 2rem 0rem 2rem',
      paddingTop: '2rem'
    },
    searchIcon: {
      height: '2.5rem',
      marginLeft: '-2rem'
    },
    drawerTitle: {
      marginLeft: '2rem',
      color: '#00000090',
      fontWeight: '500',
      marginTop: '1rem',
      fontSize: '.8rem'
    },
    drawerMenu: {
      marginLeft: '1.5rem',
    },
    menuList: {
        listStyle: 'none',
        padding: 0,
        overflow: 'auto'
    },
    menuItem: {
      height: '3rem',
      cursor: 'pointer',
      paddingLeft: '.5rem'

    },
    verticalAlignMiddle: {
      verticalAlign: 'Middle'
    },
    dTable: {
      display: 'table'
    },
    dTableCell: {
      display: 'table-cell'
    },
    w100: {
      width: '100%'
    },
    hInherit: {
      height: 'inherit'
    },
    fW600:{
      fontWeight: '600'
    }
}
  
));

export default UseStyles;