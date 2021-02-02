import IconProps from './icon.interface';
import ActivityIcon from '../assets/icons/activityIcon.svg';
import ArrowLeftIcon from '../assets/icons/arrowIcon_left.svg';

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  switch (name) {
    case 'activity':
      return <ActivityIcon />;
    case 'arrow-left':
      return <ArrowLeftIcon />;
    default:
      return null;
  }
};

export default Icon;
