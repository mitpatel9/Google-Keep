import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

<div className="remindertopcontainer">
                    <Accordion className='accordian'>
                        <AccordionSummary className='accordian'>
                            <Typography>
                                <div className="remindertopseaarch">
                                    <input type="text" className="remindertopinput" placeholder='Title' />
                                    <CheckBoxIcon className='remindertopIcon'/>
                                    <BrushIcon className='remindertopIcon' />
                                    <ImageIcon className='remindertopIcon' />
                                </div>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className="remindertopserach2">
                                    <textarea name="" id="" cols="20" rows="10" className="remindertopinputtext"></textarea>
                                    <div className="remindertoptextareaicon">
                                        <div className="textarealeft">
                                             <NotificationsIcon className='textareaicon' /> 
                                             <PersonIcon className='textareaicon' /> 
                                             <ColorLensIcon className='textareaicon'/> 
                                             <ImageIcon className='textareaicon'/> 
                                             <ArchiveIcon className='textareaicon'/>  
                                             <MoreVertIcon className='textareaicon'/> 
                                             <UndoIcon className='textareaicon'/> 
                                             <RedoIcon className='textareaicon'/> 
                                        </div>
                                        <div className="textarearight">
                                            <span className="textareatitale">Close</span>
                                        </div>
                                    </div>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>