import React from 'react';
import UseStyles from '../UseStyles';
import classNames from 'classnames';
import Ava from '../Assets/Img/ava.png';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
export default () => {
    const classes= UseStyles();

    return <div className={classNames(classes.bgWhite, classes.h100, classes.pt1rem, classes.pr2rem, classes.pb2rem)}>
        <div className={classNames( classes.bgBase, classes.h100, classes.ptrr3rem, classes.pbrr3rem)}>
            <div className={classNames('bgBase', classes.ptrr3rem)}>
                <div className={classNames('dInlineFlex', 'pageNavBar')}>
                    <div className={classNames('pageTitle', 'dTable', 'h100')}>
                        <div className={classNames('dTableCell','vAlignMiddle')}>
                        My Team
                        </div>
 
                    </div>
                    <div className={'search'}>
                        <div className={classNames('dTableCell', 'vAlignMiddle')}>
                            <div className={'dFlex'}>
                                <span>
                                    <SearchIcon className={'searchIcon'}/>
                                </span>
                                <input placeholder="Search" className={classNames('searchInput','bgBase')}/>
                            </div>
                        </div>
                    </div>
                    <div className={classNames('navBarNotif', 'h100', 'dTable')}>
                        {/* <div className={'dTable'}> */}
                            <div className={classNames('dTableCell', 'vAlignMiddle', 'center')}>
                                {/* <span> */}
                                {/* <div> */}
                                <NotificationsNoneOutlinedIcon />
                        {/* <div>test</div> */}
                                {/* </div> */}
                                {/* </span> */}
                            </div>
                        {/* </div> */}
                       
                       
                    </div>
                    {/* <div>|</div> */}
                    <div className={classNames('dTable', 'h100')}>
                        <div className={classNames('navBarUser', 'dTableCell', 'vAlignMiddle')}>
                            <img src={Ava} alt="userphotos" width="100" height="100"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames('w100')}>
                <div className={'actionBar'}>
                    <div className={classNames('p-1rem', 'item', 'active')}>
                        <MenuOutlinedIcon/>
                    </div>
                    <div className={classNames('p-1rem', 'item')}>
                        <AppsOutlinedIcon/>
                    </div>
                    <div className={classNames('p-1rem', 'add')}>
                        <AddOutlinedIcon/>
                    </div>
                </div>

            </div>
            <div className={classNames('ml-2rem')}>
                <div className={classNames(classes.card, 'card')}>
                    <div className={'cardImages'}>
                        <div className={'cardImagesCell'}>
                            <div className={'cardImagesContent'}>
                                <img src={Ava} alt="userphotos" width="100" height="100"/>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className={'cardUserName'}>
                            Rony David Ferdinand S
                        </div>
                        <div className={'cardProjectList'}>
                            <span>Project 1</span>
                            <span>Project 2</span>
                        </div>
                        <div className={classNames('cardActionButton')}>
                            <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, 'center', 'pt4rem')}>
                                    <span>View All</span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className={classNames(classes.card, 'card')}>
                    <div className={'cardImages'}>
                        <div className={'cardImagesCell'}>
                            <div className={'cardImagesContent'}>
                                <img src={Ava} alt="userphotos" width="100" height="100"/>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className={'cardUserName'}>
                            Rony David Ferdinand S
                        </div>
                        <div className={'cardProjectList'}>
                            <span>Project 1</span>
                            <span>Project 2</span>
                        </div>
                        <div className={classNames('cardActionButton')}>
                            <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, 'center', 'pt4rem')}>
                                    <span>View All</span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className={classNames(classes.card, 'card')}>
                    <div className={'cardImages'}>
                        <div className={'cardImagesCell'}>
                            <div className={'cardImagesContent'}>
                                <img src={Ava} alt="userphotos" width="100" height="100"/>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className={'cardUserName'}>
                            Rony David Ferdinand S
                        </div>
                        <div className={'cardProjectList'}>
                            <span>Project 1</span>
                            <span>Project 2</span>
                        </div>
                        <div className={classNames('cardActionButton')}>
                            <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, 'center', 'pt4rem')}>
                                    <span>View All</span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className={classNames(classes.card, 'card')}>
                    <div className={'cardImages'}>
                        <div className={'cardImagesCell'}>
                            <div className={'cardImagesContent'}>
                                <img src={Ava} alt="userphotos" width="100" height="100"/>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className={'cardUserName'}>
                            Rony David Ferdinand S
                        </div>
                        <div className={'cardProjectList'}>
                            <span>Project 1</span>
                            <span>Project 2</span>
                        </div>
                        <div className={classNames('cardActionButton')}>
                            <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, 'center', 'pt4rem')}>
                                    <span>View All</span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className={classNames(classes.card, 'card')}>
                    <div className={'cardImages'}>
                        <div className={'cardImagesCell'}>
                            <div className={'cardImagesContent'}>
                                <img src={Ava} alt="userphotos" width="100" height="100"/>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className={'cardUserName'}>
                            Rony David Ferdinand S
                        </div>
                        <div className={'cardProjectList'}>
                            <span>Project 1</span>
                            <span>Project 2</span>
                        </div>
                        <div className={classNames('cardActionButton')}>
                            <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, 'center', 'pt4rem')}>
                                    <span>View All</span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className={classNames(classes.card, 'card')}>
                    <div className={'cardImages'}>
                        <div className={'cardImagesCell'}>
                            <div className={'cardImagesContent'}>
                                <img src={Ava} alt="userphotos" width="100" height="100"/>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className={'cardUserName'}>
                            Rony David Ferdinand S
                        </div>
                        <div className={'cardProjectList'}>
                            <span>Project 1</span>
                            <span>Project 2</span>
                        </div>
                        <div className={classNames('cardActionButton')}>
                            <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, 'center', 'pt4rem')}>
                                    <span>View All</span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className={classNames(classes.card, 'card')}>
                    <div className={'cardImages'}>
                        <div className={'cardImagesCell'}>
                            <div className={'cardImagesContent'}>
                                <img src={Ava} alt="userphotos" width="100" height="100"/>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className={'cardUserName'}>
                            Rony David Ferdinand S
                        </div>
                        <div className={'cardProjectList'}>
                            <span>Project 1</span>
                            <span>Project 2</span>
                        </div>
                        <div className={classNames('cardActionButton')}>
                            <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, 'center', 'pt4rem')}>
                                    <span>View All</span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className={classNames(classes.card, 'card')}>
                    <div className={'cardImages'}>
                        <div className={'cardImagesCell'}>
                            <div className={'cardImagesContent'}>
                                <img src={Ava} alt="userphotos" width="100" height="100"/>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className={'cardUserName'}>
                            Rony David Ferdinand S
                        </div>
                        <div className={'cardProjectList'}>
                            <span>Project 1</span>
                            <span>Project 2</span>
                        </div>
                        <div className={classNames('cardActionButton')}>
                            <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, 'center', 'pt4rem')}>
                                    <span>View All</span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className={classNames(classes.card, 'card')}>
                    <div className={'cardImages'}>
                        <div className={'cardImagesCell'}>
                            <div className={'cardImagesContent'}>
                                <img src={Ava} alt="userphotos" width="100" height="100"/>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className={'cardUserName'}>
                            Rony David Ferdinand S
                        </div>
                        <div className={'cardProjectList'}>
                            <span>Project 1</span>
                            <span>Project 2</span>
                        </div>
                        <div className={classNames('cardActionButton')}>
                            <div className={classNames(classes.dTable, classes.w100, classes.hInherit)}>
                                <div className={classNames(classes.dTableCell, classes.verticalAlignMiddle, 'center', 'pt4rem')}>
                                    <span>View All</span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
      
            </div>
        </div>
    </div>
}