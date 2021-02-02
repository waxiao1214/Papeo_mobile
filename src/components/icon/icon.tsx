import React from 'react';
import IconProps from './icon.interface';
import ActivityIcon from "../../assets/icons/activityIcon.svg";
import ArrowLeftIcon from "../../assets/icons/arrowIcon_left.svg";
import ArrowRightIcon from "../../assets/icons/arrowIcon_right.svg";
import AttachIcon from "../../assets/icons/attachIcon.svg";
import BinIcon from "../assets/icons/binIcon.svg";
import BookMarkStarOffIcon from "../assets/icons/bookmarkStarIcon_off.svg";
import BookMarkStarOnIcon from "../assets/icons/bookmarkStarIcon_on.svg";
import CallendarIcon from "../assets/icons/callendarIcon.svg";
import CameraRecordIcon from "../assets/icons/cameraBtnIcon_recording.svg";
import CameraIcon from "../assets/icons/cameraBtnIcon.svg";
import CameraFrontIcon from "../assets/icons/cameraIcon_frontView.svg";
import CameraSideView from "../assets/icons/cameraIcon_sideView.svg";
import ChatIcon from "../assets/icons/chatIcon.svg";
import CheckBoxOffIcon from "../assets/icons/checkboxIcon_off.svg";
import CheckBoxOnIcon from "../assets/icons/checkboxIcon_on.svg";
import DoubleCheckMarkIcon from "../assets/icons/checkmarkIcon_doubleCheckmarks.svg";
import VerifiedVideoIcon from "../assets/icons/checkmarkIcon_veryfiedVideo.svg";
import CheckMarkIcon from "../assets/icons/checkmarkIcon_white.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import CommentSIcon from "../assets/icons/commentsIcon.svg";
import CommercialIcon from "../assets/icons/commercialIcon.svg";
import CommentIcon from "../assets/icons/conentIcon.svg";
import CrownIcon from "../assets/icons/crownIcon.svg";
import DropDownArrowUpIcon from "../assets/icons/dropDownArrowIcon_up.svg";
import DropDownArrowLeftIcon from "../assets/icons/dropDownArrowIcon_down-1.svg";
import DropDownArrowRightIcon from "../assets/icons/dropDownArrowIcon_down-2.svg";
import DropDowArrowDownIcon from "../assets/icons/dropDownArrowIcon_down.svg";
import EditIcon from "../assets/icons/editIcon.svg";
import FollowerIcon from "../assets/icons/followerIcon.svg";
import FollowingIcon from "../assets/icons/followingIcon.svg";
import FreeIcon from "../assets/icons/freeIcon.svg";
import GalleryIcon from "../assets/icons/galleryIcon.svg";
import FemaleOffIcon from "../assets/icons/genderIcon_female_off.svg";
import FemaleOnIcon from "../assets/icons/genderIcon_female_on.svg";
import ManOffIcon from "../assets/icons/genderIcon_male_off.svg";
import ManOnIcon from "../assets/icons/genderIcon_male_on.svg";
import OtherOffIcon from "../assets/icons/genderIcon_other_off.svg";
import OtherOnIcon from "../assets/icons/genderIcon_other_on.svg";
import GlassesOffIcon from "../assets/icons/glassesIcon_off.svg";
import GlassesOnIcon from "../assets/icons/glassesIcon_on.svg";
import GlassesWhiteIcon from "../assets/icons/glassesWhiteIcon.svg";
import ContentHideOffIcon from "../assets/icons/hideContentIcon_off.svg";
import ContentHideOnIcon from "../assets/icons/hideContentIcon_on.svg";
import InfoIcon from "../assets/icons/infoIcon.svg";
import InvertCameraIcon from "../assets/icons/invertCameraIcon.svg";
import LetterIcon from "../assets/icons/letterIcon.svg";
import LightIcon from "../assets/icons/lightIcon.svg";
import LikeOffIcon from "../assets/icons/likeBalloonIcon_off.svg";
import LikeOnIcon from "../assets/icons/likeBalloonIcon_on.svg";
import ListIcon from "../assets/icons/listIcon.svg";
import LocationIcon from "../assets/icons/locationIcon.svg";
import LockOffIcon from "../assets/icons/lockIcon_off.svg";
import LockOnIcon from "../assets/icons/lockIcon_on.svg";
import CurrentLocationIcon from "../assets/icons/mapCurrentLocationIcon.svg";
import MapIcon from "../assets/icons/mapIcon.svg";
import MapMarkerOffIcon from "../assets/icons/mapMarkerIcon_off.svg";
import MapMarkerOnIcon from "../assets/icons/mapMarkerIcon_on.svg";
import OptionsIcon from "../assets/icons/optionsIcon.svg";
import PapeoCoinIcon from "../assets/icons/papeoCoinIcon.svg";
import PapeosIcon from "../assets/icons/papeosIcon.svg";
import PartyIcon from "../assets/icons/partyIcon.svg";
import PrivateIcon from "../assets/icons/privateIcon.svg";
import FeedMenuIcon from "../assets/icons/profileFeedMenuPapeoIcon.svg";
import ReportOffIcon from "../assets/icons/reportIcon_off.svg";
import ReportOnIcon from "../assets/icons/reportIcon_on.svg";
import ScrollBarIcon from "../assets/icons/scrollBarIcon.svg";
import IlustrationIcon from "../assets/icons/selfyIlustrationIcon.svg";
import SendTextIcon from "../assets/icons/sendTextIcon.svg";
import SettingsIcon from "../assets/icons/settingsIcon.svg";
import ShareIcon from "../assets/icons/shareIcon.svg";
import StarHalfIcon from "../assets/icons/starIcon_halfOn.svg";
import StarOnIcon from "../assets/icons/starIcon_on.svg";
import StarOffIcon from "../assets/icons/starIcon_off.svg";
import GuyIcon from "../assets/icons/svgGuy.svg";
import TimeIcon from "../assets/icons/timeIcon.svg";
import UploadImageIcon from "../assets/icons/uploadImg_icon.svg";
import VerifiedIcon from "../assets/icons/verifiedIcon.svg";
import VideoPlayIcon from "../assets/icons/videoPlayIcon.svg";

const DEFAULT_ICON_SIZE = 24;

const Icon: React.FC<IconProps> = ({ name, size, color }) => {

    switch(name) {
        case 'activity':    return (<ActivityIcon width={size || DEFAULT_ICON_SIZE} height={size || DEFAULT_ICON_SIZE}/>)
        case 'arrow-left':  return (<ArrowLeftIcon width={size || DEFAULT_ICON_SIZE} height={size || DEFAULT_ICON_SIZE} />)
        case 'arrow-right':  return (<ArrowRightIcon width={size || DEFAULT_ICON_SIZE} height={size || DEFAULT_ICON_SIZE} />)
        case 'close':  return (<CloseIcon width={size || DEFAULT_ICON_SIZE} height={size || DEFAULT_ICON_SIZE} />)
        default: return null;
    }
}

export default Icon;