import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 350;
const appBar = '172.8';
export const UseStyles = makeStyles(theme => (
{
    root: {
      display: 'inline-flex',
      width: '100%'
    },
    drawer: {
      width: '400px',
      // borderRight: '1px solid black',
      height: '100vh', 
      background: '#fff'
    },
    searchInput:{
      width: '100%',
      height: '2.5rem',
      border: '1px solid transparent',
      borderRadius: '2rem',
      fontSize: '.9rem',
      color: '#00000090',
      fontWeight: '500', 
      paddingLeft: '2rem',
      paddingRight: '.5rem',
      // marginRight: '-2rem'
    },
    search: {
      display: 'flex',
      margin: '0rem 3rem 0rem 3rem',
      paddingTop: '2rem'
    },
    searchIcon: {
      height: '2.5rem',
      marginLeft: '-2rem'
    },
    drawerTitle: {
      marginLeft: '3rem',
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
      height: '4rem',
      cursor: 'pointer',
      paddingLeft: '1.5rem'

    },
    verticalAlignMiddle: {
      verticalAlign: 'Middle'
    },
    //display
    dTable: {
      display: 'table'
    },
    dTableCell: {
      display: 'table-cell'
    },
    //display end
    //width
    w100: {
      width: '100%'
    },
    w2rem:{
      width: '2rem'
    },
    //width end
    //height
    h100: {
      height: '100%'
    },
    hInherit: {
      height: 'inherit'
    },
    //height end
    fW600:{
      fontWeight: '600'
    },
    bgWhite: {
      background: '#fff'
    },
    contentSection: {
      width: '100%'
    },
    //margin
    m2rem:{
      margin: '2rem'
    },
    //margin end
    bgBase:{
      background: '#f5f7f8'
    },
    //padding
    ptrr3rem: {
      borderTopRightRadius: '3rem'
    },
    p2rem:{
      padding: '2rem'
    },
    pt1rem:{
      paddingTop: '1rem'
    },
    pt2rem:{
      paddingTop: '2rem'
    },
    pr2rem:{
      paddingRight: '2rem'
    },
    pb2rem:{
      paddingBottom: '2rem'
    },
    pbrr3rem: {
      borderBottomRightRadius: '3rem'
    },
    //padding end
    card:{
      width: '14rem',
      height: '19rem',
      // background: ,
      margin: '2rem0'
    }
}
  
));

export default UseStyles;