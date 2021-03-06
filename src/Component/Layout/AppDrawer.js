import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ViewQuiltOutlinedIcon from '@material-ui/icons/ViewQuiltOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import UseStyles from '../UseStyles';
import classNames from 'classnames';


export default () => {
    const classes= UseStyles();
    return (
        <div>
            <div className={classes.drawer}>
                <div className={classes.search}>
                    <input placeholder="Search" className={classes.searchInput}/>
                    <span>
                        <SearchIcon className={classes.searchIcon}/>
                    </span>
                </div>
                <div>
                    <div className={classes.drawerTitle}>
                        Menu
                    </div>
                    <div className={classes.drawerMenu}>
                        <ul className={classes.menuList}>
                            <li className={classNames(classes.menuItem, 'menuItem') }>
                                <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                    <div className={classNames(classes.dTableCell,classes.w2rem, classes.verticalAlignMiddle, classes.fW600)}>
                                        <ViewQuiltOutlinedIcon /> 
                                    </div>
                                    <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, classes.fW600)}>
                                        Dashboard
                                    </div>
                                </div>
                            </li>
                            <li className={classNames(classes.menuItem, 'menuItem') }>
                                <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                    <div className={classNames(classes.dTableCell,classes.w2rem, classes.verticalAlignMiddle, classes.fW600)}>
                                        <GroupWorkOutlinedIcon /> 
                                    </div>
                                    <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, classes.fW600)}>
                                        My Team
                                    </div>
                                </div></li>
                            <li className={classNames(classes.menuItem, 'menuItem') }>
                                <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                    <div className={classNames(classes.dTableCell,classes.w2rem, classes.verticalAlignMiddle, classes.fW600)}>
                                        <WorkOutlineOutlinedIcon /> 
                                    </div>
                                    <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, classes.fW600)}>
                                        Project
                                    </div>
                                </div></li>
                            <li className={classNames(classes.menuItem, 'menuItem') }>
                                <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                    <div className={classNames(classes.dTableCell,classes.w2rem, classes.verticalAlignMiddle, classes.fW600)}>
                                        <FormatListBulletedOutlinedIcon /> 
                                    </div>
                                    <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, classes.fW600)}>
                                        My Task
                                    </div>
                                </div>
                            </li>
                                <ul className={classNames(classes.menuList, classes.drawerMenu)}>
                                    <li className={classes.menuItem}>Recent</li>
                                    <li className={classes.menuItem}>To Do</li>
                                    <li className={classes.menuItem}>In Progress</li>
                                    <li className={classes.menuItem}>Done</li>
                                </ul>
                            {/* </li> */}
                            <li className={classNames(classes.menuItem, 'menuItem') }>
                                <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                    <div className={classNames(classes.dTableCell,classes.w2rem, classes.verticalAlignMiddle, classes.fW600)}>
                                        <EventOutlinedIcon /> 
                                    </div>
                                    <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, classes.fW600)}>
                                    Calendar
                                    </div>
                                </div></li>
                            <li className={classNames(classes.menuItem, 'menuItem') }>
                                <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                    <div className={classNames(classes.dTableCell,classes.w2rem, classes.verticalAlignMiddle, classes.fW600)}>
                                        <TimerOutlinedIcon /> 
                                    </div>
                                    <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, classes.fW600)}>
                                    Time Manage
                                    </div>
                                </div>
                            </li> 
                            <li className={classNames(classes.menuItem, 'menuItem') }>
                                <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                    <div className={classNames(classes.dTableCell,classes.w2rem, classes.verticalAlignMiddle, classes.fW600)}>
                                        <SettingsOutlinedIcon /> 
                                    </div>
                                    <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, classes.fW600)}>
                                    Setting
                                    </div>
                                </div>
                            </li>
                            <li className={classNames(classes.menuItem, 'menuItem') }>
                                <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                <div className={classNames(classes.dTableCell,classes.w2rem, classes.verticalAlignMiddle, classes.fW600)}>
                                        <SmsOutlinedIcon /> 
                                    </div>
                                    <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, classes.fW600)}>
                                    Chat
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
  
        </div>
    );
}